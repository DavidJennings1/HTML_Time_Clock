function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var mon = today.getMonth();
    var dt = today.getDate()
    var d = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'
    ];
    if(h < 12){
        var period = 'AM'
    }else{
        var period = 'PM'
    }
    if (h > 12) {h = h - 12};
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt2').innerHTML = 
    h + ":" + m + ":" + s  + ' ' + period;
    document.getElementById('txt').innerHTML = 
    dayNames[d] + ', ' + monthNames[mon] + ' ' + dt + ', ' + y;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
function inTime(){
    var start = new Date();
    var h = start.getHours();
    var m = start.getMinutes();
    if(m < 10) {m = "0" + m};
    // if(h > 12){h = h - 12};
    var result = h + ":" + m;
    document.getElementById('in').value = result;
    document.getElementById('inButton').disabled = true;
    document.getElementById('outButton').disabled = false;
    document.getElementById('totalTimeButton').disabled = true;

}
function outTime(){
    var end = new Date();
    var h = end.getHours();
    var m = end.getMinutes();
    if(m < 10) {m = "0" + m};
    // if(h > 12){h = h - 12};
    var result = h + ":" + m;
    document.getElementById('out').value = result;
    document.getElementById('outButton').disabled = true;
    document.getElementById('inButton').disabled = false;
    document.getElementById('totalTimeButton').disabled = false;
}
function totalTime(){
    var timeIn = document.getElementById('in').value;
    var timeOut = document.getElementById('out').value;
    var inTimeSplit = timeIn.split(":");
    var outTimeSplit = timeOut.split(":");
    var inMinutes = (inTimeSplit[0] * 60) + inTimeSplit[1];
    var outMinutes = (outTimeSplit[0] * 60) + outTimeSplit[1];
    if (inMinutes > outMinutes) {outMinutes = outMinutes + 1440}
    var diff = outMinutes - inMinutes;
    var elapsedHours = Math.floor(diff / 60);
    if (elapsedHours < 10) {elapsedHours = "0" + elapsedHours};
    var elapsedMinutes = diff % 60;
    if (elapsedMinutes < 10) {elapsedMinutes = "0" + elapsedMinutes};
    document.getElementById('total').value = elapsedHours + ":" + elapsedMinutes;
    // console.log(elapsedTime);
}