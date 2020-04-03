$(document).ready(function () {
    var currentTime = moment().format('HH a');
    var planID = document.querySelector("#nineAM");
    var pID = document.querySelector("#p-ID");
    var planTop = document.querySelector("#player-Top");

    var hourDiv = ['#hour9', '#hour10', '#hour11', '#hour12', '#hour13', '#hour14', '#hour15', '#hour16', '#hour17'];

    console.log(hourDiv);
    console.log(currentTime);
    console.log(moment().format('dddd'));


    $("#currentDay").append(moment().format('dddd'));

    var colorSch = document.querySelector('#hour').value;
    console.log(colorSch);





    if (colorSch > currentTime) {
        future.style.backgroundcolor = "green";


    } if (colorSch === currentTime) {
        red

    } if (colorSch < currentTime) {
        grey
    };




});




    // background of the schedule






    // $("#hour")function changeClrGreen

    // function changeClrGrey

    // function changeClrRed
    // if (currentTime) >


    //     // if (currentTime > $("#hour.value")) {
    //    if  $("#hour").val()("click", "text", function (event) {
    //     $(event.delegateTarget).css("background-color", "green");
    // });
    // }


    //     .past
    // append

    //     .present
    // append
    //     .future
    // append

