function passwordHandler(){
    // Password
    let password = document.getElementById("password");
    let passLen = password.value.length;
    console.log(password.value);
    // Button
    let submit = document.getElementById("submit");
    let flag = false;
    flag = passLen > 0 ? true : false;
    if (flag) {
        submit.removeAttribute("disabled");
    } else {
        submit.setAttribute("disabled", true);
    }
}

function submitPassword(){
let wrapper_loader = document.getElementsByClassName("wrapper_loader")[0];
wrapper_loader.style.display = "block";
window.setTimeout(function () {
    location.href = "./Desktop.html";
}, 5000);
}

function lockScreen(){
    $("#slideUp").slideUp();
}

function openScreen(){
    $("#slideUp").slideDown();
}

/* ============================================================== [ Date Time Manipulation Starts Here ]*/
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
  /* ============================================================== [ Date Time Manipulation Ends Here ]*/