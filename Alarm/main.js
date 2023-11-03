const currentClock = document.getElementById("currentClock");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const addButton = document.querySelector(".btn-add button");
const alarmList = document.getElementById("alarmList");

let alarms = [];

function timeNow() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  currentClock.textContent = `${hours}:${minutes}:${seconds}`;
}

timeNow();

setInterval(timeNow, 1000);

hoursInput.onchange = validateTimeInput;
minutesInput.onchange = validateTimeInput;

function validateTimeInput() {
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);

  if (hours < 0 || hours > 23) {
    alert("Vui lòng nhập thời gian hợp lệ 0-23h.");
    hoursInput.value = "";
    minutesInput.value = "";
  }
  if (minutes < 0 || minutes > 59) {
    alert("Vui lòng nhập thời gian hợp lệ 0-59phut.");
    hoursInput.value = "";
    minutesInput.value = "";
  }
}

addButton.addEventListener("click", () => {
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);

  if (isNaN(hours) || isNaN(minutes)) {
    alert("Vui long nhap thoi gian");
    return;
  }

  const alarm = {
    hours: hours,
    minutes: minutes,
  };

  alarms.push(alarm);
  console.log(alarms);
  updateAlarmList();

  saveAlarmsToLocalStorage();

  hoursInput.value = "";
  minutesInput.value = "";
});

function updateAlarmList() {
  alarmList.innerHTML = "";
  if (Array.isArray(alarms)) {
    alarms.forEach((alarm, index) => {
      const listItem = document.createElement("li");
      const alarmTime = formatTime(alarm.hours, alarm.minutes);
      const displayAlarmTime = document.createElement("span");
      displayAlarmTime.textContent = `${alarmTime}`;
      console.log(alarmTime);
      const divDeleteButton = document.createElement("div");
      const deleteButton = document.createElement("button");
      const labelToggle = document.createElement("label");
      const toggle = document.createElement("input");
      labelToggle.classList.add("toggle-switch");
      const spanToggle = document.createElement("span");
      spanToggle.classList.add("slider");
      toggle.type = "checkbox";
      toggle.id = "toggleSwitch";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteAlarm(index);
      });
      listItem.appendChild(displayAlarmTime);
      listItem.appendChild(labelToggle);
      listItem.appendChild(divDeleteButton);
      labelToggle.appendChild(toggle);
      labelToggle.appendChild(spanToggle);
      divDeleteButton.appendChild(deleteButton);
      alarmList.appendChild(listItem);
    });
  }
}

function deleteAlarm(index) {
  alarms.splice(index, 1);
  updateAlarmList();
  saveAlarmsToLocalStorage();
}

function formatTime(hours, minutes) {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}

function saveAlarmsToLocalStorage() {
  localStorage.setItem("alarms", JSON.stringify(alarms));
  console.log(alarms);
}

if (localStorage.getItem("alarms")) {
  alarms = JSON.parse(localStorage.getItem("alarms"));
  updateAlarmList();
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggleSwitch");
  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      alert.log("alarm is ON");
    } else {
      alert.log("alarm is ON");
    }
  });
});
