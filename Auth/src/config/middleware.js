const db = require("./db");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

function check_authenticated_user(token, err, next) {
    if (!token)
        return res.status(401).json({
            message: "Bad authentication"
        })
    jwt.verify(token, process.env.AUTH_SECRET, async (error, payload)=> {
        if (error) {
            return err();
        }
        const usersRef = db.collection("users");
        const snapshot = await usersRef.where("id", "==", payload.id).get();
        const user = snapshot.docs[0].data();
        next(user);
    });
}

module.exports = {
    check_authenticated_user,
}

