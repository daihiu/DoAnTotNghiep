
// Du lịch
// với bạn là gì?
// Là kỷ niệm, là trải nghiệm, là kiến thức..
// còn với những đứa trẻ ở mảnh đất đó
// du lịch là một phần tâm hồn.
var aText = new Array(
    "Du lịch là trải nghiệm, đến là khám phá, là đón nhận",
    "nhưng cần có trách nhiệm với thế giới nơi đây",
    "để không làm thay đổi những điều tốt đẹp vốn có",
    "và để mỗi đứa trẻ đều có tuổi thơ trọn vẹn."
);
var aText2 = new Array(
    "Tác giả: Nguyễn Bích Thảo - Đinh Tống Hồng Oanh - Lê Thị Trang",
    "Sinh viên chuyên ngành TTĐPTK40 - Học viện Báo chí và Tuyên truyền.",
);

var iSpeed = 50; // time delay of print out
var iSpeed2 = 50; // time delay of print out

var iIndex = 0; // start printing array at this posision
var iIndex2 = 0; // start printing array at this posision

var iArrLength = aText[0].length; // the length of the text array
var iArrLength2 = aText2[0].length;

var iScrollAt = 20; // start scrolling up at this many lines
var iScrollAt2 = 20; // start scrolling up at this many lines


var iTextPos = 0; // initialise text position
var iTextPos2 = 0; // initialise text position

var sContents = ''; // initialise contents variable
var sContents2 = ''; // initialise contents variable

var iRow; // initialise current row
var iRow2; // initialise current row

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

function typewriter2() {
    sContents2 = ' ';
    iRow2 = Math.max(0, iIndex2 - iScrollAt2);
    var destination = document.getElementById("typedtext2");

    while (iRow2 < iIndex2) {
        sContents2 += aText2[iRow2++] + '<br />';
    }
    destination.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2);
    if (iTextPos2++ == iArrLength2) {
        iTextPos2 = 0;
        iIndex2++;
        if (iIndex2 != aText2.length) {
            iArrLength2 = aText2[iIndex2].length;
            setTimeout("typewriter2()", 500);
        }
    } else {
        setTimeout("typewriter2()", iSpeed2);
    }
}


typewriter();

setTimeout(function () {
    typewriter2();
}, 15000);

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
