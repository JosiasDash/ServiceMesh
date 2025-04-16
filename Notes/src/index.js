const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const db = require("./config");
const axios = require("axios");
const {get_user_token,authenticate_user} = require("./middleware");
const {v4} = require("uuid");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/notes/:id", get_user_token, authenticate_user, async (req, res)=> {
    const notesRef = db.collection("notes");
    const snapshot = await notesRef.where("user", "==", req.user.id).get();
    let notes = [];
    snapshot.docs.map((note)=> {
        let data = note.data();
        notes.push({
            title: data.title,
            content: data.content,
            created_at: note.createTime.toDate().toDateString()
        });
    });
    res.status(200).json(notes);
})

app.post("/notes/:id", get_user_token, authenticate_user, async (req, res)=> {
    const {title, content} = req.body;
    if (!title || !content || title.length == 0 || content.length == 0 ) {
        return res.status(400).json({
            message: "Invalid field"
        })
    }
    const note = {
        title: title,
        content: content,
        id: v4(),
        user: req.user.id
    };
    const notesRef = db.collection("notes");
    await notesRef.add(note);
    res.status(200).json({
        message: "Note successfully added"
    })
})

app.listen(process.env.NOTES_PORT, ()=> {
    console.log(`Notes microservice is running on ${process.env.NOTES_PORT}`);
})
