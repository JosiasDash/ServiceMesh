const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/profile/:id", async (req, res)=> {
    const {id} = req.params;
    const token = req.query["token"];
    const url = process.env.USERS_CHECK_URI + `?token=${token}`;
    axios.get(url)
    .then((response)=> {
        const user = response.data.user;
        
        if (user.id != id) {
            return res.status(400).json({
                message: "Invalid ID"
            })
        }
        return res.status(200).json(user);
    }).catch((error)=> {
        return res.status(error.status).json({
            error
        })
    })
})

app.listen(process.env.USERS_PORT, ()=> {
    console.log(`Users microservice is running on ${process.env.USERS_PORT}`);
})
