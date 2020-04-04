$(document).ready(function () {
    var currentTime = moment().format('HH');

    $("#currentDay").append(moment().format('dddd'));


    $("div.time-past").each(function () {

        if (currentTime > $(this).attr('value')) {

            $(this).addClass("past");

        } if (currentTime == $(this).attr('value')) {
            $(this).addClass("present");
        } if (currentTime < $(this).attr('value')) {

            $(this).addClass("future");
        }
    });

});
