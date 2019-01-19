$(function () {

    // var data = require("../../models/database");
    // import { db } from "../../models/database.js"
    // var data = db();
    console.log("Step 1");
    $('#commentSubmit').submit((e) => {
        updateComments();
        console.log("Called updateFeedback");
        setTimeout(()=>{
            $('#commentSubmit')[0].reset()
            console.log('settime')
        },500)
    })


    // $('.feedback-messages').on('click', (e) => {
    //     if (e.target.className == "glyphicon glyphicon-remove") {
    //         $.ajax({
    //             url: 'api/' + e.target.id,
    //             type: DELETE,
    //             success: updateFeedback
    //         })
    //         console.log("testing")
    //     }
    // })

    function updateComments() {
        var output = ""
        // data.none("SELECT * FROM comments WHERE blog_id = '" + articleID )
        
        // output += 
        // `
        //     <div class="row">
        //         <%= data.body. %>
        //     </div>
        // `
        // $("#commentsContainer").html(output);

        $username = $("#comment_username").val();
        $body = $("#comment_body").val();

        $("#commentsContainer").prepend(
            `<div class="row m-0 p-0" style="border: solid red;">
            ${$username}
            <br></br>
            ${$body}
            </div>
            `
        );
    }
});