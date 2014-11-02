var boeing      = document.getElementById("boeing");
var airbus      = document.getElementById("airbus");
var runway      = document.getElementById("runway");
var terminal    = document.getElementById("terminal");
var endOfRunway = document.getElementById("endOfRunway");
var boeingImg   = document.getElementById("boeingImg");

var boeingData = {
  fuelLevel: 100,
  parked: false
}

var airbusData = {
  fuelLevel: 100,
  inWay: false
}

var parkedMessage = "You have parked at the gate! You have a new batch of passengers and are ready to take off. Go back to the beginning of the runway to take off!"

var takeOffMessage = "Rotate...TAKEOFF! Landing gear up... climb and maintain level 12-0! Congratulations! You successfully navigated the airport and took off! Now turn autopilot on, sit back, relax, and enjoy the flight to Frankfurt, Germany!"

var naughtyPilotMessage = "What are you doing! You need to unload first! Go back to the gate!"

var scoundrelMessage = "Yikes, looks like an Airbus A320 is on the runway. Click that little ugly scoundrel to alert him to clear the way!"

var fuelMessage = "Oh no, you don't have enough fuel to safely complete the flight! Next time, make your moves wisely! Refresh the page to try again!"

var park = function(newLeftValue, newTopValue) {
  if ((newLeftValue >= 300 && newLeftValue < 600) && (newTopValue <= 130 && newTopValue > 30)) {
    alert(parkedMessage);
    boeingData.parked = true
    airbusData.inWay = true
    airbus.style.top = "320px";
  }
}

var move = function(e) {
  if (boeingData.fuelLevel > 0 && (e.keyCode === 39) && (parseInt(window.getComputedStyle(boeing).top)) > 300 && (parseInt(window.getComputedStyle(boeing).top)) <= 400 && (parseInt(window.getComputedStyle(boeing).left)) > 850 && boeingData.parked === true && airbusData.inWay === false) {

    alert(takeOffMessage);
    boeingData.fuelLevel = 0;
    playVideo();
  }

  else if (boeingData.fuelLevel > 0 && (e.keyCode === 39 || e.keyCode === 40) && (parseInt(window.getComputedStyle(boeing).top)) > 300 && (parseInt(window.getComputedStyle(boeing).top)) <= 400 && (parseInt(window.getComputedStyle(boeing).left)) > 330 && boeingData.parked === false) {

    alert(naughtyPilotMessage);
  }
  else if (boeingData.fuelLevel > 0 && (e.keyCode === 39 || e.keyCode === 40) && (parseInt(window.getComputedStyle(boeing).top)) > 300 && (parseInt(window.getComputedStyle(boeing).top)) <= 400 && (parseInt(window.getComputedStyle(boeing).left)) > 160 && airbusData.inWay === true) {

    alert(scoundrelMessage);
  }
  else if (boeingData.fuelLevel > 0) {
    var increment = 50
    var oldTopValue  = parseInt(window.getComputedStyle(boeing).top);
    var oldLeftValue = parseInt(window.getComputedStyle(boeing).left);

    if (e.keyCode === 38) {
      console.log("up")
      var newTopValue = oldTopValue - increment
      if (newTopValue > 0 && newTopValue < 455) {
        boeing.style.top = newTopValue + "px";
        console.log(newTopValue, newLeftValue)
        park(parseInt(window.getComputedStyle(boeing).left), newTopValue)
      }
    }
    else if (e.keyCode === 40) {
      console.log("down")
      var newTopValue = oldTopValue + increment
      if (newTopValue > 0 && newTopValue < 455) {
        boeing.style.top = newTopValue + "px";
        park(parseInt(window.getComputedStyle(boeing).left), newTopValue)
      }
    }
    else if (e.keyCode === 37) {
      console.log("left")
      var newLeftValue = oldLeftValue - increment
      if (newLeftValue > 0 && newLeftValue < 1000) {
        boeing.style.left = newLeftValue + "px";
        park(newLeftValue, parseInt(window.getComputedStyle(boeing).top))
      }
    }
    else if (e.keyCode === 39) {
      console.log("right")
      var newLeftValue = oldLeftValue + increment
      if (newLeftValue > 0 && newLeftValue < 1000) {
        boeing.style.left = newLeftValue + "px";
        park(newLeftValue, parseInt(window.getComputedStyle(boeing).top))
      }
    }
    boeingData.fuelLevel -= 2
  }
  else if (boeingData.fuelLevel === 0 && e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
    alert(fuelMessage);
  }
}

var clearWay = function(e) {
  e.target.parentNode.style.top = "200px";
  airbusData.inWay = false;
}

var crash = function(object) {
  object.crashed = true
}

var playVideo = function() {
  video = "<video autoplay><source src='img/takeoff.mp4' type='video/mp4'>Your browser does not support the video tag.</video>"
  document.getElementById("container").innerHTML = video
}

airbus.addEventListener('click', clearWay)
window.addEventListener('keydown', move)

