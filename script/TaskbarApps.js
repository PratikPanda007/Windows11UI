var BASE_URL = "http://127.0.0.1:5500/";
const MyApps = [
  {
    name: "Edge",
    image: "./Assets/edgeicon.png",
    title: "Microsoft Edge",
    hasEvent: "1",
    event: [{
      onclick:"",
    }],
    display: "1",
  },
  {
    name: "Document",
    image: "./Assets/Document.png",
    title: "Document Viewer",
    hasEvent: "0",
    event: [],
    display: "1",
  },
  {
    name: "Word",
    image: "./Assets/Word.png",
    title: "Word Viewer",
    hasEvent: "0",
    event: [],
    display: "1",
  },
  {
    name: "Mail",
    image: "./Assets/Mail.png",
    title: "Outlook Email",
    hasEvent: "0",
    event: [],
    display: "1",
  },
  {
    name: "Gallery",
    image: "./Assets/Gallery.png",
    title: "Gallery",
    hasEvent: "0",
    event: [],
    display: "1",
  },
  {
    name: "Downloads",
    image: "./Assets/Downloads.png",
    title: "Downloads Viewer",
    hasEvent: "0",
    event: [],
    display: "1",
  },
  {
    name: "CMD",
    image: "./Assets/CMD.png",
    title: "CMD opens in new tab",
    hasEvent: "0",
    event: [],
    display: "1",
  },
  {
    name: "Calendar",
    image: "./Assets/calendar.png",
    hasEvent: "0",
    event: [],
    display: "0",
  },
  {
    name: "",
    image: "",
    hasEvent: "",
    event: [{
      onclick:"",
    }],
    display: "0",
  },
  {
    name: "",
    image: "",
    hasEvent: "",
    event: [{
      onclick:"",
    }],
    display: "0",
  },
];

$.each(MyApps, function(i){
  var stringMyApps = `
  ${MyApps[i].display == "1" ? `
  <button type="button" class="pinnedApps" title="`+ MyApps[i].title + `" ${MyApps[i].hasEvent == "1" ? `onclick=` + MyApps[i].event[i].onclick : ``}>
    <img src="` + MyApps[i].image +`">
    <span>`+ MyApps[i].name +`</span>
  </button>
  ` : ``}
  `;

  $("#pinned_Apps").append(stringMyApps);
});

// ================================================================================ [ Notifications ]
const MyNotifications = [
  {
    img: `${BASE_URL}Assets/Me-modified.png`,
    msg: `Hello Visitor! Welcome to my page. You can access Applications if you tap on the icons from task bar.
    <br />
    Click on the notification (next to time section below) to close the <em>notification window</em>.`,
    display: "1",
  },
  {
    img: `${BASE_URL}Assets/Me-modified.png`,
    msg: `Each displayed Apps serves different purpose. You can download contents from Download app.`,
    display: "1",
  },
];

$.each(MyNotifications, function(i){
  var stringMyNotifications = `
  ${MyNotifications[i].display == "1" ? `
    <div class="notificationMsg">
      <img src="` + MyNotifications[i].img + `">
      <p>` + MyNotifications[i].msg + `</p>
    </div>
  ` : ``}
  `;

  $("#rightNotificationWindow").append(stringMyNotifications);
});