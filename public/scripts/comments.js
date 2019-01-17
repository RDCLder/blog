$(function () {

    $('.feedback-form').submit(function (e) {

        e.preventDefault();

        $.post('api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback)

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