import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputEl = document.querySelector("#datetime-picker");
const buttonEl = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let userSelectedDate;
let countdownTimer;

buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
        position: "topRight",
        titleColor: "#fff",
        messageColor: "#fff",
        color: "#ef4040",
        icon: null,
      });
      buttonEl.disabled = true;
    } else {
      buttonEl.disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

buttonEl.addEventListener("click", function () {
  this.disabled = true;
  inputEl.disabled = true;
  countdownTimer = setInterval(function () {
    let now = new Date().getTime();
    let distance = userSelectedDate - now;
    if (distance < 0) {
      clearInterval(countdownTimer);
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      buttonEl.disabled = true;
      inputEl.disabled = false;
      return;
    }
    let { days, hours, minutes, seconds } = convertMs(distance);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

const styleElement = document.createElement("style");
styleElement.type = "text/css";
const styles = `
body {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;
}
#datetime-picker {
  border-radius: 4px;
  width: 280px;
  height: 40px;
  padding-left: 16px;
  margin-bottom: 32px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
#datetime-picker:focus {
  border-color: #6c8cff;
}
[data-start] {
  border-radius: 8px;
  padding: 8px 16px;
  width: 75px;
  height: 40px;
  background: #4e75ff;
  border: none;
  font-weight: 500;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
[data-start]:hover {
    background: #6c8cff;
}
[data-start]:disabled {
    background: #cfcfcf;
    color: #989898;
}
.timer {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 24px;
  width: 346px;
}
.field {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0px;
}
.value {
  font-size: 40px;
  line-height: 1.2;
}
.label {
  text-transform: uppercase;
}`;
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);
