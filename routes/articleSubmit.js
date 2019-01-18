const express = require("express");
const router = express.Router();
const body_parser = require('body-parser');
const db = require("../models/database.js");

router.get("/articleSubmit", (req, res) => {
    res.render("articleSubmit", {
        pageTitle: "Submit Article",
        pageID: "submitArticle"
    });
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/articleSubmit", (req, res) => {
    var fName = req.body.fName;
    var lname = req.body.lName;
    var category = req.body.category;
    var title = req.body.title;
    var body = req.body.body;
    var DEFAULT = 1;

    db.none("INSERT INTO articles( title, article_body)VALUES($1,$2)", [title, body])
        .then((data) => {
            // db.any('SELECT * FROM')
            console.log("Success");
        })
        .catch((error) => {
            console.log(error);
        });

});

module.exports = router;