const express = require("express");
const router = express.Router();
const db = require("../models/database.js");
const body_parser = require("body-parser");

router.get("/article/:articleID", (req, res) => {

    var articleID = Number(req.params.articleID)
    db.query("SELECT COUNT(*) FROM articles INNER JOIN comments ON articles.id = comments.article_id WHERE articles.id = '" + articleID + "'")
        .then(length=>{
            
            if(Number(length[0].count) > 0){
                db.query("SELECT * FROM articles INNER JOIN comments ON articles.id = comments.article_id WHERE articles.id = '" + articleID + "'").then(r => {
                    res.render("article", {
                        pageTitle: r[0].title,
                        pageID: r[0].title,
                        category: r[0].category,
                        publish_date: r[0].publish_date, 
                        article_body: r[0].article_body,
                        author: r[0].author_id,
                        comments: r
                    });
                });
            }
            else{
                db.query("SELECT * FROM articles WHERE articles.id = '" + articleID + "'").then(r => {
                    res.render("article", {
                        pageTitle: r[0].title,
                        pageID: r[0].title,
                        category: r[0].category,
                        publish_date: r[0].publish_date, 
                        article_body: r[0].article_body,
                        author: r[0].author_id,
                        comments: r
                    });
                });
            }
        });
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/article/:articleID", (req, res) => {
    var articleID = Number(req.params.articleID);
    var username = req.body.username;
    var body = req.body.body;

    res.status(204).send();

    // db.query("SELECT COUNT(*) FROM articles INNER JOIN comments ON articles.id = comments.article_id WHERE articles.id = '" + articleID + "'")
    // .then(length => {

    //     if (Number(length[0].count) > 0) {
    //         db.query("SELECT * FROM articles INNER JOIN comments ON articles.id = comments.article_id WHERE articles.id = '" + articleID + "'").then(r => {
    //             res.render("article", {
    //                 pageTitle: r[0].title,
    //                 pageID: r[0].title,
    //                 category: r[0].category,
    //                 publish_date: r[0].publish_date,
    //                 article_body: r[0].article_body,
    //                 author: r[0].author_id,
    //                 comments: r
    //             });
    //         });
    //     }
    //     else {
    //         db.query("SELECT * FROM articles WHERE articles.id = '" + articleID + "'").then(r => {
    //             res.render("article", {
    //                 pageTitle: r[0].title,
    //                 pageID: r[0].title,
    //                 category: r[0].category,
    //                 publish_date: r[0].publish_date,
    //                 article_body: r[0].article_body,
    //                 author: r[0].author_id,
    //                 comments: r
    //             });
    //         });
    //     }
    // })

    db.none("INSERT INTO comments(username, comment_body, article_id )VALUES($1,$2,$3)", [
        username,
        body,
        articleID
    ])
        .then(data => {
            console.log(articleID);
            // db.any('SELECT * FROM')
            console.log("Success");
        })
        .catch(error => {
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
})

module.exports = router;