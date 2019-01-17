const express = require("express");
const router = express.Router();
const body_parser = require('body-parser');
const db = require("../models/database.js");

router.get("/commentSubmit", (req, res) => {
    res.render("commentSubmit", {
        pageTitle: "Submit Comment",
        pageID: "commentSubmit"
    });
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/commentSubmit", (req, res) => {
    var username = req.body.username;
    var body = req.body.body;

    db.none("INSERT INTO comments(username, body)VALUES($1,$2)", [username, body])
        .then((data) => {
            // db.any('SELECT * FROM')
            console.log("Success");
        })
        .catch((error) => {
            console.log(error);
        });

});

module.exports = router;