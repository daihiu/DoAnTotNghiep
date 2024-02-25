
// Du lịch
// với bạn là gì?
// Là kỷ niệm, là trải nghiệm, là kiến thức..
// còn với những đứa trẻ ở mảnh đất đó
// du lịch là một phần tâm hồn.
var aText = new Array(
    "Du lịch với bạn là gì?",
    "Là kỷ niệm, là trải nghiệm, là kiến thức...",
    "còn với những đứa trẻ ở mảnh đất đó",
    "du lịch là một phần tâm hồn."
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

typewriter();

//after 10500 the button will appear smoothly 
setTimeout(function () {
    document.getElementById("startButton").style.opacity = "1";
    document.getElementById("startButton").style.transition = "opacity 1s";
}, 10500);

function startShowOtherScreen() {
    //hide the main page
    console.log("start");
    //set session storage to store the data
    sessionStorage.setItem("data", "0");
    //data will expire after 24h
    setTimeout(function () {
        sessionStorage.clear();
    }, 86400000);
    console.log(sessionStorage.getItem("data"));

    document.getElementById("firstPage").style.display = "none";
    //show the other screen
    document.getElementById("wrapper").style.display = "flex";
    //add music for main page
    var audio = new Audio('./sounds/dulich.mp3');
    audio.play();
}

function setSessionStorage(x) {
    var session = sessionStorage.getItem("data");
    if (session == "0") {
        sessionStorage.setItem("data", x);
    } else {
        sessionStorage.setItem("data", "0" + x.toString());
    }
}
