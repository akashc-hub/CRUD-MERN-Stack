const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("Connected Successfully...!");

        app.listen(process.env.PORT || 8000, (err) => {
            if(err) console.log(err);

            console.log()
        });
})
    .catch((error) => {
        console.log("error", error)
})

app.get("/", (req, res) => {
    res.send("api running here...!");
})

