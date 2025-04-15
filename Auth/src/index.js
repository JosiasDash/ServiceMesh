const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const db = require("./config/db");
const {v4} = require("uuid");
const {hashPassword} = require("./utils");
const jwt = require("jsonwebtoken");
const { check_authenticated_user } = require("./config/middleware")
const crypt = require("bcrypt");
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Signup
app.post("/signup", async (req, res)=> {
    const {email, password} = req.body;
    if (!email || !password || email.length == 0 || password.length == 0) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }
    const usersRef = db.collection("users");
    let snapshot = await usersRef.where("email", "==", email).get();
    
    if (!snapshot.empty || snapshot.docs.length != 0) {
        return res.status(400).json({
            message: "Account already exists"
        })
    }

    let user = {
        email,
        password: hashPassword(password),
        id: v4()
    }

    await usersRef.add(user);
    res.status(200).json({
        message: "Account created succesfully"
    })
})

app.post("/login", async (req, res)=> {
    const {email, password} = req.body;
    if (!email || !password || email.length == 0 || password.length == 0) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }
    const usersRef = db.collection("users");
    let snapshot = await usersRef.where("email", "==", email).get();
    if (snapshot.empty || snapshot.docs.length == 0) {
        return res.status(400).json({
            message: "Account not found"
        })
    }
    const user = snapshot.docs.at(0).data();
    if (!crypt.compareSync(password, user.password)) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }
    const token = jwt.sign({id: user.id}, process.env.AUTH_SECRET);
    res.status(200).json({
        message: "Logged in successfully",
        id: user.id,
        access_token: token
    })
})

app.get("/verify-token", (req, res)=> {
    const token = req.query["token"];
    check_authenticated_user(token, ()=>{
        return res.status(401).json({
            message: "Invalid token"
        })
    }, (user)=> {
        user.password = undefined;
        return res.status(200).json({
            message: "Token validated",
            user: user
        })
    })
})


app.listen(process.env.AUTH_PORT, ()=> {
    console.log(`Auth microservice is running on ${process.env.AUTH_PORT}`);
})

