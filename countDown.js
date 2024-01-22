var countDownDate = new Date("Mar,21 2023 8:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var gap = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var textDay = Math.floor(gap / (1000 * 60 * 60 * 24));
    var textHour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var textMinute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    var textSecond = Math.floor((gap % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector("#daysLeft").innerHTML = textDay;
    document.querySelector("#hoursLeft").innerHTML = textHour;
    document.querySelector("#minutesLeft").innerHTML = textMinute;
    document.querySelector("#secondsLeft").innerHTML = textSecond;

    // If the count down is finished, write some text 
    if (gap < 0) {
        clearInterval(x);
        document.getElementById("countdownDate").innerHTML = "Event has concluded";
    } else if (textDay == 0) {
        document.getElementById("days").classList.add("hidden");
        document.getElementById("minutes").classList.remove("hidden");
    }

}, 1000);

