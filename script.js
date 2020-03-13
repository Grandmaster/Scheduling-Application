// Code for the scheduling application.
// =================================================

$(document).ready(function(){
    // Gets date from moment object and prints value on browser window
    var date = moment().format('dddd, MMMM Do');
    $('#currentDay').text(date);
})