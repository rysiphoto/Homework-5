$(document).ready(function () {
    var currentTime = moment().format('HH');

    $("#currentDay").append(moment().format('dddd'));

    var divVal = $(".hour").attr('value');
    console.log(divVal);



    $("div.time-past").each(function () {

        if (currentTime > $(this).attr('value')) {

            $(this).addClass("past");

        } if (currentTime == $(this).attr('value')) {
            $(this).addClass("present");
        } if (currentTime < $(this).attr('value')) {

            $(this).addClass("future");
        }
    });

    console.log("outside for loop");
    // addclass




    $(this).on('unload', function () {
        saveSettings();
        loadSettings();
    });

    function loadSettings() {
        $('#nine').val(JSON.localStorage.nine);
        $('#ten').val(localStorage.ten);
        $('#eleven').val(localStorage.eleven);
        $('noon').val(localStorage.noon);
        $("one").val(localStorage.one);
        $("two").val(localStorage.two);
        $("three").val(localStorage.three);
        $("four").val(localStorage.four);
        $("five").val(localStorage.five);
    }

    function saveSettings() {
        var nine = document.getElementById("nine").value;
        var ten = document.getElementById("ten").value;
        var eleven = document.getElementById("eleven").value;
        var noon = document.getElementById("noon").value;
        var one = document.getElementById("one").value;
        var two = document.getElementById("two").value;
        var three = document.getElementById("three").value;
        var four = document.getElementById("four").value;
        var five = document.getElementById("five").value;
    }
    function saveSettings() {
        localStorage.nine = $('#nine').val();
        localStorage.ten = $('#ten').val();
        localStorage.eleven = $('#eleven').val();
        localStorage.noon = $('#noon').val();
        localStorage.one = $('#one').val();
        localStorage.two = $('#two').val();
        localStorage.three = $('#three').val();
        localStorage.four = $('#four').val();
        localStorage.five = $('#five').val();

    }

    $("#saveBtn").on("click", function () {
        event.preventDefault();


    });
});
