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
  //   var hour = moment().format("LT");
  var hour = "8:32 AM";
  var formattedHour = hour.replace(/:\d+ /, "");
  var middayTag = hour.replace(/\d+:\d+ /, "");
  console.log(formattedHour);
  console.log("middayTag: " + middayTag);
  // Styles columns based on time data. If the time is not on the list of timeblocks,
  // it styles the columns based on what time it is (they are either all in the future
  // or all in the past).
  var hourConditionalsList = [];
  for (let i of Object.keys(eventStorage)) {
    if (i == formattedHour) {
      hourConditionalsList.push(true);
    } else hourConditionalsList.push(false);
  }
  var hourCheck = hourConditionalsList.filter(a => {
    return a == true;
  });
  console.log(hourCheck);
  if (hourCheck.length == 0 && middayTag == "AM") {
    $(".hour").each(function() {
      $(this)
        .next()
        .addClass("future");
    });
  } else if (hourCheck.length == 0 && middayTag == "PM") {
    $(".hour").each(function() {
      $(this)
        .next()
        .addClass("past");
    });
  } else if (hourCheck.length !== 0) {
    var currentHour = hourConditionalsList.indexOf(true);
    console.log(currentHour);
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
  }
});
