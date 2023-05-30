let t = new Date();
let h = t.getHours();
console.log(h - 12);
let m = t.getMinutes();
console.log(m);
let s = t.getSeconds();
console.log(s);
function currTime() {
  let t = new Date();
  t = t.toLocaleTimeString();
  document.querySelector("#cur-time").innerHTML = t;
}
setInterval(currTime, 1000);

document.getElementById("set-alarm").addEventListener("click", function () {
  let hr = parseInt(document.getElementById("hours").value);
  let mins = parseInt(document.getElementById("mins").value);
  let secs = parseInt(document.getElementById("secs").value);
  console.log(hr, mins, secs);
  setInterval(check, 1000);
  function check() {
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    if (h > 12) {
      h = h - 12;
    } else {
      h = h;
    }
    if (h == hr && m == mins && s == secs) {
      document.getElementById("play-alarm").play();
      console.log("play");
    }
  }
});

document.getElementById("stop-alarm").addEventListener("click", function () {
  document.getElementById("play-alarm").pause();
  console.log("pause");
});