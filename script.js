// Code for the scheduling application.
// =================================================

$(document).ready(function() {
  // Gets date from moment object and prints value on browser window
  var date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);
  // Styles columns by comparing actual time to printed value in timeblock
  var hour = moment().format("LT");
  var formattedHour = hour.replace(/:\d+ /, "");
  console.log(formattedHour);
});
