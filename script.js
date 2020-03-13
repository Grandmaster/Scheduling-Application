// Code for the scheduling application.
// =================================================

$(document).ready(function() {
  // Gets date from moment object and prints value on browser window
  var date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);
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
  // Grabs current time and formats to match strings in timeblock
  var hour = moment().format("LT");
  var formattedHour = hour.replace(/:\d+ /, "");
  console.log(formattedHour);
  // Styles columns based on time data
  var array = [];
  for (let i of Object.keys(eventStorage)) {
    if (i == formattedHour) {
      array.push(true);
    } else array.push(false);
  }
  var currentHour = array.indexOf(true);
  $(".hour").each(function(index) {
    if (index < currentHour) {
      $(this)
        .next()
        .addClass("past");
    } else if (index == currentHour) {
      $(this)
        .next()
        .addClass("present");
    } else if (index > currentHour) {
      $(this)
        .next()
        .addClass("future");
    }
  });
});
