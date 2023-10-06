var calendar = $("#calendar").calendarGC({
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    nextIcon: '&gt;',
    prevIcon: '&lt;',    
    dayBegin: 0, // default: 1 || 0 = Sunday
    onPrevMonth: function (e) { },          // Triggers function when prev month btn is clicked
    onNextMonth: function (e) { },          // Triggers function when next month btn is clicked
    onclickDate: function (e, data) {
      console.log(e, data);
    }
});

// Current Date
const date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let today = year+"-"+month+"-"+day

// Set Active Date
calendar.setDate(today);

// Manage Events
const events = [
    {
      date: new Date("2023-10-07"),
      eventName: "Complete Win11 Apps<br>Publish Website",
      className: "my-class",
      onclick(e, data) {
        console.log(data);
      },
      dateColor: "red"
    },
    {
      date: new Date("2023-10-08"),
      eventName: "Revise Korean",
      className: "my-class",
      onclick(e, data) {
        console.log(data);
      },
      dateColor: "red"
    },
    // ... more events
  ];
  calendar.setEvents(events);