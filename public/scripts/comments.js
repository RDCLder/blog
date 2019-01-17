$(function () {

    var data = require("../../models/database.js");
    $('#commentSubmit').submit((e) => {

        e.preventDefault();
        updateFeedback;

    })

    $('.feedback-messages').on('click', (e) => {
        if (e.target.className == "glyphicon glyphicon-remove") {
            $.ajax({
                url: 'api/' + e.target.id,
                type: DELETE,
                success: updateFeedback
            })
            console.log("testing")
        }
    })

    function updateFeedback(data) {
        
        
        var output = '';

        $('.feedback-messages').html(output);
    }
});