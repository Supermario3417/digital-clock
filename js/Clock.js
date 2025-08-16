var twelveHour = true;
var color = "yellow";

function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM"

    if (twelveHour == true) {
        if (hours == 0) {
            hours = 12; //12 hour format
        }

        if (hours > 12) {
            hours -= 12; //12 hour format
            session = "PM";
        }
    }

    hours = (hours<10)?"0"+hours:hours;
    minutes = (minutes<10)?"0"+minutes:minutes;
    seconds = (seconds<10)?"0"+seconds:seconds;

    if (twelveHour == true) {
        document.getElementById("DigitalClock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + session;
    } else {
        document.getElementById("DigitalClock").innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    
    setTimeout(showTime, 0);
}

function changeFormat() {
    if (twelveHour == true) {
        twelveHour = false;
        document.getElementById("formatButton").innerHTML = "12 hour"
    } else {
        twelveHour = true;
        document.getElementById("formatButton").innerHTML = "24 hour"
    }
}

showTime();