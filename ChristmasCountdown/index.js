// Target Christmas Day to count up to
const cDate = new Date(2020, 12, 25).getTime();

setInterval(function countDownToChristmas() {
  // get current date
  const today = new Date().getTime();

  // calculate days, hours, minutes, seconds till Christmas
  const seconds = Math.round(Math.abs(cDate - today) / 1000);

  const days = Math.floor(seconds / 86400);

  const hours = Math.floor(seconds / 3600) % 24;

  const minutes = Math.floor(seconds / 60) % 60;

  const sec = seconds % 60;

  // assign time in <p> tag
  document.getElementById("demo").innerHTML =
    days +
    "d " +
    `${hours < 10 ? "0" + hours : hours}` +
    "h " +
    `${minutes < 10 ? "0" + minutes : minutes}` +
    "m " +
    `${sec < 10 ? "0" + sec : sec}` +
    "s " +
    "<br>" +
    "untill Christmas!";

  // finish counting when Christmas is reached
  if (seconds < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
