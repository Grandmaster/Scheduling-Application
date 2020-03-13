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

  // Creates object to store in localStorage
  var eventStorage = {
    "9AM": "",
    "10AM": "",
    "11AM": "",
    "12PM": "",
    "1PM": "",
    "2PM": "",
    "3PM": "",
    "4PM": "",
    "5PM": ""
  };
});
