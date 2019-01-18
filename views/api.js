$(function() {
    $.getJSON("api", data => {
      updateFeedback(data);
    });
  
    $(".feedback-form").submit(function(e) {
      e.preventDefault();
      $.post(
        "api",
        {
          name: $("#feedback-form-name").val(),
          title: $("#feedback-form-title").val(),
          message: $("#feedback-form-message").val()
        },
        updateFeedback
      );
    });
  
    $(".feedback-messages").on("click", function(e) {
      if (e.target.className== `deleteButton`) {
        $.ajax({
          url: `api/${e.target.id}`,
          type: "DELETE",
          success: updateFeedback
        }); //ajax
      } // the target is a delete button
    }); //feedback messages
  
    function updateFeedback(data) {
      var output = "";
      $.each(data, function(key, item) {
  
        output += `<div class="feedback-item item-list media-list">
                      <div class="feedback-item media">
                      <div class="col-sm-1">
                          <button type="button" class="close" aria-label="Close">
                              <span aria-hidden="true" class="deleteButton" id=${key}>&times;</span>
                          </button>
                      </div>
                      <div class="col-sm-11">	
                          <div class="row">
                              <div class="feedback-title">${item.title}</div>
                          </div>
                          <div class="row" style="margin-bottom: 2%;">
                              <div class="feedback-name">by ${item.name}</div>
                          </div>
                          <div class="row" style="margin-bottom: 3%;">
                              <div class="feedback-message">${item.message}</div>
                          </div>
                      </div>
                  </div>`;
      });
      $(".feedback-messages").html(output);
    }
  });