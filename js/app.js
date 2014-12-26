// Start Anonymous function
(function() {

// Start jQuery Ready Function
$(function() {
    function numEvaluate() {

    var outputMsg = $("#msg");

        // Evaluate number when entered
    $("#enter-number").on("keypress", function(event) {

      if (event.which == "13") {
        event.preventDefault();
        // Remove number 
       outputMsg.html("");

       // Get the input
       var num = +$(this).val();

      // error message condition
      if(isNaN(num) || num != Math.floor(num) || num > 100 || num < 1) {
         outputMsg.append("Please try again. Enter a number between 1-100.");
         } else {
            // For loop 
            for(var i = 1; i <= num; i++) {
            if(i % 3 == 0 && i % 5 == 0) {
               outputMsg.append("Fizz Buzz<br />");
                } else if(i % 3 == 0) {
                    outputMsg.append("Fizz<br />");
                    } else if(i % 5 == 0) {
                        outputMsg.append("Buzz<br />");
                        } else {
                        outputMsg.append(i + "<br />");
                        }
                    }
                }
                
                $(this).val("");
            }
        });

        // Reset Number
        $("#reset").on("click", function(event) {
            event.preventDefault();
            outputMsg.html("");
        });
    }
    numEvaluate();
});

})();
