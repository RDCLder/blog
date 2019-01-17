const express = require("express");
const router = express.Router();
const db = require("../models/database.js");
const body_parser = require('body-parser');

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


    });
    router.use(body_parser.urlencoded({ extended: false }));
    router.post("/article/:articleID", (req, res) => {
        var username = req.body.username;
        var body = req.body.body;

        db.none("INSERT INTO comments(username, body, blog_id )VALUES($1,$2,$3)", [username, body, articleID])
            .then((data) => {
                console.log(articleID);
                // db.any('SELECT * FROM')
                console.log("Success");
            })
            .catch((error) => {
                console.log(error);
            });

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