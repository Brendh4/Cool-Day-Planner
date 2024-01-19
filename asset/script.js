console.log("testing JS link")

// todays date, put at top of page
var displayDayEl = $("#currentDay");
function currentDay() {
    var day = dayjs().format("dddd, MMMM D, YYYY");
    $(displayDayEl).text(day);
}

currentDay()

// make a block for every hour from 9 to 5 inclusive
function generateTimeblocks () {
    const timeBlocksEl = $(".container");
        for (var i = 9; i <= 17; i++) {
            var timeblock = $("<div>");
            timeblock.addClass("time-block row hour");
            timeblock.attr("id", "hour-" + i);
            timeblock.html('<div col-8 col-md-10>' + i + '</div>');

            timeblock.append(createInputField(i));
            timeBlocksEl.append(timeblock);
        }
    }
    
    function createInputField(i) {
        var inputField = $("<input>");
        inputField.attr("type", "text");
        inputField.attr("id", "inputField" + i);
        inputField.addClass("col-8 col-md-10 description");
        return inputField;
    }
    
    generateTimeblocks();







// each block should allow for text entry (input element)
    // each block should be styled if the hour is past pres or future - based on hour of day

//each block should include an hour label
    // associate each hours tasks with a separate key
// each block should include a save button
    // eachsave button should have a clikck handler that writes to the local storage

// var myDiv = document.createElement("div");
// myDiv.textContent = "Here is my first task"

// save text to local storage - event handling

// each block should load stored tasks for the given hour
