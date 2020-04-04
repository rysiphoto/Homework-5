$(document).ready(function () {
    var currentTime = moment().format('HH');
    restore();

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
    document.getElementById("save").addEventListener("click", save, false);
    document.getElementById("save1").addEventListener("click", save, false);
    document.getElementById("save2").addEventListener("click", save, false);
    document.getElementById("save3").addEventListener("click", save, false);
    document.getElementById("save4").addEventListener("click", save, false);
    document.getElementById("save5").addEventListener("click", save, false);
    document.getElementById("save6").addEventListener("click", save, false);
    document.getElementById("save7").addEventListener("click", save, false);
    document.getElementById("save8").addEventListener("click", save, false);

    function save() {
        localStorage.setItem("fieldNine", document.getElementById('fieldNine').value);
        localStorage.setItem("fieldTen", document.getElementById('fieldTen').value);
        localStorage.setItem("fieldEleven", document.getElementById('fieldEleven').value);
        localStorage.setItem("fieldNoon", document.getElementById('fieldNoon').value);
        localStorage.setItem("fieldOne", document.getElementById('fieldOne').value);
        localStorage.setItem("fieldTwo", document.getElementById('fieldTwo').value);
        localStorage.setItem("fieldThree", document.getElementById('fieldThree').value);
        localStorage.setItem("fieldFour", document.getElementById('fieldFour').value);
        localStorage.setItem("fieldFive", document.getElementById('fieldFive').value);

    }

    function restore() {
        document.getElementById('fieldNine').value = localStorage.getItem("fieldNine");
        document.getElementById("fieldTen").value = localStorage.getItem('fieldTen');
        document.getElementById("fieldEleven").value = localStorage.getItem('fieldEleven');
        document.getElementById("fieldNoon").value = localStorage.getItem('fieldNoon');
        document.getElementById("fieldOne").value = localStorage.getItem('fieldOne');
        document.getElementById("fieldTwo").value = localStorage.getItem('fieldTwo');
        document.getElementById("fieldThree").value = localStorage.getItem('fieldThree');
        document.getElementById("fieldFour").value = localStorage.getItem('fieldFour');
        document.getElementById("fieldFive").value = localStorage.getItem('fieldFive');
    }

});
