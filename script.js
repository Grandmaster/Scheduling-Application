// Code for the scheduling application.
// =================================================

$(document).ready(function() {
  // Loads saved time data from localStorage, and prints it to screen
  scheduleData = JSON.parse(localStorage.getItem("Schedule"));
  $(".hour").each(function() {
    $(this)
      .next()
      .val(scheduleData[$(this).html()]);
  });
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
  var middayTag = hour.replace(/\d+:\d+ /, "");
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
  // Saves data in textarea field to localStorage when corresponding save icon is clicked.
  $(".saveBtn").on("click", function() {
    var correspondingHour = $(this)
      .prev()
      .prev()
      .html();
    eventStorage[correspondingHour] = $(this)
      .prev()
      .val();
    localStorage.setItem("Schedule", JSON.stringify(eventStorage));
  });
});
