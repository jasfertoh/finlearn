const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("hamburger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
  burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.add("is-active");
    bgOverlay.classList.toggle("is-active");
  });

  bgOverlay.addEventListener("click", () => {
    navbarMenu.classList.remove("is-active");
    bgOverlay.classList.toggle("is-active");
  });
}

document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("is-active");
    bgOverlay.classList.remove("is-active");
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName("dc");

$(document).ready(function () {
  // Check if the URL parameter is apples
  if (dynamicContent == "apples") {
    $("#apples").show();
  }
  // Check if the URL parameter is oranges
  else if (dynamicContent == "oranges") {
    $("#oranges").show();
  }
  // Check if the URL parameter is bananas
  else if (dynamicContent == "bananas") {
    $("#bananas").show();
  }
  // Check if the URL parmeter is empty or not defined, display default content
  else {
    $("#default-content").show();
  }
});

var course = document.getElementsByClassName("course");

for (let k = 0; k < course.length; k++) {
  course[k].addEventListener("click", function () {
    var courseID = course[k].id;
    window.location.href = `/courses.html?course=${courseID}`;
  });
}
