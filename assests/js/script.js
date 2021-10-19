var getCurrentDate = function() {
    var todaysDate = moment().format('dddd, MMMM Do')
    console.log(todaysDate)
    $("#currentDay").text(todaysDate)
};

getCurrentDate();