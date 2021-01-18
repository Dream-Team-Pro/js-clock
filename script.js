function updateDate(){
    var date = new Date();
    var settime = document.getElementById("time");
    settime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setdate = document.getElementById("date");
    setdate.innerHTML = date.getDate() + " - " + parseInt(date.getMonth() + 1) + " - " + date.getFullYear();
    var setcolor = document.getElementById("color");


}
setInterval(updateDate, 1000);
setInterval(setColor, 5000);
onload = updateDate();
onload = setColor();

function getColor(){
    var getColor = document.getElementById("input_color").value;
    localStorage.setItem("COLOR", getColor);
    document.getElementById("time").style.background = localStorage.getItem("COLOR");
    document.getElementById("body").style.background = localStorage.getItem("COLOR");
}

function setColor(){
    document.getElementById("input_color").value = localStorage.getItem("COLOR");
    document.getElementById("time").style.background = localStorage.getItem("COLOR");
    document.getElementById("body").style.background = localStorage.getItem("COLOR");    
}
