$(document).ready(function ()
{
    var saleEndDate = new Date("Sep 10, 2024 23:59:59").getTime();

    var countdown = setInterval(function ()
    {
        var now = new Date().getTime();
        var timeRemaining = saleEndDate - now;

        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        $("#timer").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (timeRemaining < 0)
            {
            clearInterval(countdown);
            $("#timer").html("Sale Ended!");
        }
    }, 1000);
});
