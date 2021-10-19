var getCurrentDate = function() {
    var todaysDate = moment().format('dddd, MMMM Do')
    console.log(todaysDate)
    $("#currentDay").text(todaysDate)

  
};
// store hour and text in local storage
//retrieve hour and text from local storage
getCurrentDate();

$("hour-block").each(function(index){
    console.log(index)
})
var hour = document.getElementById(".hour-block")

console.log(hour)
localStorage.setItem('hour', 'text');