//date variable
var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

//Loading HTML DOM
$(document).ready(function () {
    $("#display_date").html(display_date)
})

//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action
$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        $.ajax({
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            },
            //Error function
            
        });
    });
})

