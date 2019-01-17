const express = require("express");
const router = express.Router();
const db = require("../models/database.js");

router.get("/articles", (req, res) => {
    res.send("articles", {
        pageTitle: "Articles", // Change this to the article's title
        pageID: "articles" // Change to article's unique ID
    });
});

module.exports = router;