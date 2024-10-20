/** @format */

// ! Events Section Counter To Count My New Birthday Time
const daysSpan = document.querySelector<HTMLSpanElement>(
  ".coming-soon .bubbles .bubble span#days"
);
const hoursSpan = document.querySelector<HTMLSpanElement>(
  ".coming-soon .bubbles .bubble span#hours"
);
const minutesSpan = document.querySelector<HTMLSpanElement>(
  ".coming-soon .bubbles .bubble span#minutes"
);
const secondsSpan = document.querySelector<HTMLSpanElement>(
  ".coming-soon .bubbles .bubble span#seconds"
);
const currDate = new Date();

let myComingBday = currDate.getFullYear() - 2003;
let myComingBdayLastChar = myComingBday.toString().slice(-1);
let countDownDate = new Date(`Dec 3, ${currDate.getFullYear()} 00:00:01`);

const timer = setInterval(() => {
  let dateDiff = countDownDate.getTime() - new Date().getTime();

  if (dateDiff <= 0) {
    countDownDate = new Date(`Aug 4, ${currDate.getFullYear() + 1} 00:00:01`);
  }

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  if (daysSpan) daysSpan.innerHTML = days < 10 ? `0${days}` : days.toString();
  if (hoursSpan)
    hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours.toString();
  if (minutesSpan)
    minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes.toString();
  if (secondsSpan)
    secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds.toString();
}, 1000);
