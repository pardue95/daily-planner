var getCurrentDate = function() {
    var todaysDate = moment().format('dddd, MMMM Do')
    console.log(todaysDate)
    $("#currentDay").text(todaysDate)

    //retrieve hour and text from local storage
$(".hour-block").each(function() {
    var id = $(this).attr("id");
    var text = localStorage.getItem(id)

    if (text !== null) {
        $(this).children(".text").val(text);
    }
})

  
};
// store hour and text in local storage
//retrieve hour and text from local storage
getCurrentDate();

// store hour and text in local storage
var saveBtn = $(".saveBtn")

$(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id")
    console.log(hour)
    var text = $(this).siblings(".text").val()
    console.log(text)
    localStorage.setItem(hour, text);
})
















//     function changeColor (){

// var hour = document.getElementById(".hour-block")
// $(hour).each(function(index){
//     console.log(index)
// })
// }
// var hour = document.getElementById(".hour-block")

// console.log(hour)
// localStorage.setItem('hour', 'text');

// changeColor()