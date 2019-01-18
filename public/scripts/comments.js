// $(function () {

    var data = require("../../models/database");
    console.log("Step 1");
    $('#commentSubmit').submit((e) => {
        updateFeedback();
        console.log("Called updateFeedback")
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

    function updateFeedback(data) {
        var output = ""
        data.none("SELECT * FROM comments WHERE blog_id = '" + articleID )
        output += 
        `
            <div class="row">
                <%= comments.body %>
            </div>
        `
        $("#commentsContainer").html(output);
    }
// });