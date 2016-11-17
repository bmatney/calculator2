$(document).ready(function() {

    $('#equals').on("click", calculate);
    $('#clear').on("click", function () {
      $("#firstNum").empty(),
      $("#secondNum").empty()
    });


});



function calculate(){
  event.preventDefault();

  // create object with necessary info
  var calculateThis = {
      x: $("#firstNum").val(),
      y: $("#secondNum").val(),
      type: $("#calculate").val()
  }

// send the object to the server at the url localhost://5000/calculate
      $.ajax({
          type: 'POST',
          url: '/calculate',
          data: calculateThis,
          success: function(data) {
            appendAnswer(data);
          }
      });
}

// in the h2 element with the ID "finalAnswer" insert the answer we received
// from the app.js "res.send"
function appendAnswer(data) {
    $("#finalAnswer").html(data.answer);
}
