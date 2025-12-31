
var countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

// Update the countdown every 100 milliseconds
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Time calculations
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var milliseconds = distance % 1000;

  // Display the countdown
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s " + milliseconds + "ms";

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
