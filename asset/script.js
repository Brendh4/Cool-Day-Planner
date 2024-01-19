console.log("testing JS link");

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

            //input field
            timeblock.append(createInputField(i));

            //save button (not working yet, just a button)
            var saveButton = $("<button>");
            saveButton.addClass("saveBtn");
            saveButton.html('<i class="fas fa-save"></i>');
            timeblock.append(saveButton);

            timeBlocksEl.append(timeblock);
        }
    }
    
function createInputField(i) {
    var inputField = $("<input>");
    inputField.attr("type", "text");
    inputField.attr("id", "inputField" + i);
    inputField.addClass("description");
    return inputField;
}
    
generateTimeblocks();

