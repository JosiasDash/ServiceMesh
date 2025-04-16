const env = require("dotenv");
env.config();
const axios = require("axios");

async function authenticate_user(req, res, next) {
    const url = process.env.NOTES_AUTH_URI + `?token=${req.access}`;
    const {id} = req.params;

    axios.get(url)
    .then((response)=> {
        const user = response.data.user;
        if (user.id != id) {
            return res.status(401).json({
                message: "Bad user id."
            })
        }
        req.user = user;
        next();
    })
    .catch((error)=> {
        return res.status(401).json({
            message: error.message
        })
    })
}

function get_user_token(req, res, next) {
    let token = req.headers["authorization"].split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Access token required"
        })
    }
    req.access = token;
    next();
}

module.exports = {get_user_token, authenticate_user};