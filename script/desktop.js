
function taskbarHandler(){
  let taskbar = document.getElementsByClassName("taskbar")[0];
  let startmenu = document.getElementsByClassName("startmenu")[0];

    //console.log("clicked");
    if (startmenu.style.bottom == "80vh") {
      startmenu.style.bottom = "-655px"
    }
    else {
      startmenu.style.bottom = "80vh"
    }

    closeSideNotification();
}


// Window Applications
$('.pinnedApps').click(function () {
  console.log(this.children[1].innerHTML);
  if (this.children[1].innerHTML == MyApps[0].name){
    windowAppHandler();
  }else if(this.children[1].innerHTML == MyApps[1].name){
    toggleStyledResumeOpener();
  }else if(this.children[1].innerHTML == MyApps[2].name){
    toggleWordOpener();
  }else if(this.children[1].innerHTML == MyApps[3].name){
    toggleEmailOpener();
  }
  else if(this.children[1].innerHTML == MyApps[4].name){
    toggleGalleryOpener();
  }else if(this.children[1].innerHTML == MyApps[5].name){
    toggleDownloadsOpener();
  }else if(this.children[1].innerHTML == MyApps[6].name){
    toggleCMDOpener();
  }else{
    console.log("World");
  }
  taskbarHandler();
});

/* ===================================================================================== */
function windowAppHandler(){
  let appWindow = document.getElementsByClassName("appWindow")[0];
  if (appWindow.style.bottom == "24vh") {
    appWindow.style.bottom = "-655px"
  }
  else {
    appWindow.style.bottom = "24vh"
  }
}

// Toggle Document Opener
function toggleStyledResumeOpener(){
  let documentViewer = document.getElementsByClassName("documentViewer")[0];
  if (documentViewer.style.bottom == "24vh") {
    documentViewer.style.bottom = "-655px"
  }
  else {
    documentViewer.style.bottom = "24vh"
  }
}

function closeStyledResumeScreen(){
  let documentViewer = document.getElementsByClassName("documentViewer")[0];
  if (documentViewer.style.bottom == "24vh") {
    documentViewer.style.bottom = "-655px"
  }
}

// Toggle Word Opener
function toggleWordOpener(){
  let wordViewer = document.getElementsByClassName("wordViewer")[0];
  if (wordViewer.style.bottom == "24vh") {
    wordViewer.style.bottom = "-655px"
  }
  else {
    wordViewer.style.bottom = "24vh"
  }
}

function closeWordScreen(){
  let wordViewer = document.getElementsByClassName("wordViewer")[0];
  if (wordViewer.style.bottom == "24vh") {
    wordViewer.style.bottom = "-655px"
  }
}

// Email Viewer
function toggleEmailOpener(){
  let elemViewer = document.getElementsByClassName("emailViewer")[0];
  if (elemViewer.style.bottom == "20vh") {
    elemViewer.style.bottom = "-655px"
  }
  else {
    elemViewer.style.bottom = "20vh"
    $("#showEmail").load(BASE_URL + "Email.html");
  }
}

function closeEmailScreen(){
  let elemViewer = document.getElementsByClassName("emailViewer")[0];
  if (elemViewer.style.bottom == "20vh") {
    elemViewer.style.bottom = "-655px"
  }
}

// Gallery Viewer
function toggleGalleryOpener(){
  let elemViewer = document.getElementsByClassName("galleryViewer")[0];
  if (elemViewer.style.bottom == "20vh") {
    elemViewer.style.bottom = "-655px"
  }
  else {
    elemViewer.style.bottom = "20vh"
    $("#showGallery").load(BASE_URL + "Gallery.html");
  }
}

function closeGalleryScreen(){
  let elemViewer = document.getElementsByClassName("galleryViewer")[0];
  if (elemViewer.style.bottom == "20vh") {
    elemViewer.style.bottom = "-655px"
  }
}

// Downloads Viewer
function toggleDownloadsOpener(){
  let elemViewer = document.getElementsByClassName("downloadsViewer")[0];
  if (elemViewer.style.bottom == "20vh") {
    elemViewer.style.bottom = "-655px"
  }
  else {
    elemViewer.style.bottom = "20vh"
    $("#showDownloads").load(BASE_URL + "Downloads.html");
  }
}

function closeDownloadsScreen(){
  let elemViewer = document.getElementsByClassName("downloadsViewer")[0];
  if (elemViewer.style.bottom == "20vh") {
    elemViewer.style.bottom = "-655px"
  }
}

// CMD Viewer
function toggleCMDOpener(){
  // let elemViewer = document.getElementsByClassName("cmdViewer")[0];
  // if (elemViewer.style.bottom == "20vh") {
  //   elemViewer.style.bottom = "-655px"
  // }
  // else {
  //   elemViewer.style.bottom = "20vh"
  //   // $("#showCMD").load("../CMD.html");
  // }
  window.open(BASE_URL + "CMD.html", "_blank");
}

// function closeCMDScreen(){
//   let elemViewer = document.getElementsByClassName("cmdViewer")[0];
//   if (elemViewer.style.bottom == "20vh") {
//     elemViewer.style.bottom = "-655px"
//   }
// }
/* ===================================================================================== */
// Date Time
function getDateTime(){
  let today = new Date();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  if(month < 10){month = "0"+month}
  if(date < 10){date = "0"+date;}

  let hour = today.getHours();
  hour = hour < 10 ? "0"+hour : hour;
  
  let minutes = today.getMinutes();
  minutes = minutes < 10 ? "0"+minutes : minutes;

  let seconds = today.getSeconds();
  seconds = seconds < 10 ? "0"+seconds : seconds;

  date = month + "/" + date + "/" + today.getFullYear();
  let time = hour + ":" + minutes+ ":" + seconds;

  //console.log(date + " || " + time);
  document.getElementById("spanTime").innerHTML = time;
  document.getElementById("spanDay").innerHTML = moment().format('dddd');
  document.getElementById("spanDate").innerHTML = date;
}

getDateTime();

setInterval(function(){getDateTime()}, 1000);

// toggleSideNotification
function toggleSideNotification(){
  let rightNotificationWindow = document.getElementById("rightNotificationWindow");
  if (rightNotificationWindow.style.display == "block") {
    rightNotificationWindow.style.display = "none"
  }
  else {
    rightNotificationWindow.style.display = "block"
  }
}

function closeSideNotification(){
  let rightNotificationWindow = document.getElementById("rightNotificationWindow");
  if (rightNotificationWindow.style.display == "block") {
    rightNotificationWindow.style.display = "none"
  }
}