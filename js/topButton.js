// let html, body, scrollToTopButton;
// window.onload = function() {
//   html = document.documentElement;
//   body = document.body;
//   scrollToTopButton = document.getElementById("scrollToTopButton");
// };
// window.onscroll = controlScrollToTopButton;

// function controlScrollToTopButton() {
//   let windowInnerHeightX2 = 2 * window.innerHeight;
//   if (
//     body.scrollTop > windowInnerHeightX2 ||
//     html.scrollTop > windowInnerHeightX2
//   ) {
//     scrollToTopButton.classList.add("show");
//   } else {
//     scrollToTopButton.classList.remove("show");
//   }
// }
// function scrollToTop(totalTime, easingPower) {
//   var timeInterval = 1;
//   var scrollTop = Math.round(body.scrollTop || html.scrollTop);
//   var timeLeft = totalTime;
//   var scrollByPixel = setInterval(function() {
//     var percentSpent = (totalTime - timeLeft) / totalTime;
//     if (timeLeft >= 0) {
//       let newScrollTop = scrollTop * (1 - easyInOut(percentSpent, easingPower));
//       body.scrollTop = newScrollTop;
//       html.scrollTop = newScrollTop;
//       timeLeft--;
//     } else {
//       clearInterval(scrollByPixel);
//     }
//   }, timeInterval);
// }
// function easyInOut(t, power) {
//   if (t < 0.5) {
//     return 0.5 * Math.pow(2 * t, power);
//   } else {
//     return 0.5 * (2 - Math.pow(2 * (1 - t), power));
//   }
// }

var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};

function scrollToTop(totalTime, easingPower) {
  //console.log("here");
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  //var by=- scrollTop;
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}

function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

window.onscroll = controlScrollToTopButton;

function controlScrollToTopButton() {
  var windowInnerHeight = 1.2 * window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}