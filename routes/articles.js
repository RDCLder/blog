const express = require("express");
const router = express.Router();
const db = require("../models/database.js");

router.get("/article/:articleID", (req, res) => {
    
    var articleID = Number(req.params.articleID);
    db.one("SELECT * FROM articles WHERE id = '" + articleID + "'")
        .then((r) => {
            res.render("article", {
                pageTitle: "Articles",
                pageID: "article",
                articles: r
            })
        })

    // db.query("SELECT * FROM articles")
    // .then((results) => {
    //     res.render("article", {
    //         pageTitle: "Articles",
    //         pageID: "article",
    //         articles: results
    //     });
    // });

});

module.exports = router;