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

console.log(localStorage.getItem("loggedIn"));
if (localStorage.getItem("loggedIn") == "true") {
  console.log("hello");
  document.getElementById("right").innerHTML = `<a href="profile.html"
          ><img src="assets/profile.svg" alt="Profile Icon"
        /></a>`;
  console.log(document.getElementById("buttons"));
  document.getElementById("buttons").style.display = "none";
} else {
  document.getElementById("right").innerHTML = `<div id="buttons">
          <button class="register-btn">Register</button>
          <button class="login-btn">Login</button>
        </div>`;
}

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

var registerBtn = document.getElementsByClassName("register-btn");
for (let i = 0; i < registerBtn.length; i++) {
  registerBtn[i].addEventListener("click", function () {
    window.location.href = "/register.html";
  });
}

var loginBtn = document.getElementsByClassName("login-btn");
for (let i = 0; i < loginBtn.length; i++) {
  loginBtn[i].addEventListener("click", function () {
    window.location.href = "/login.html";
  });
}
var courseArray = [
  {
    courseNo: 1,
    title: "Learning JavaScript: Beginner Mode",
    rating: 4.5,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 2,
    title: "Learning JavaScript: Medium Mode",
    rating: 1.2,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 3,
    title: "Learning JavaScript: Hard Mode",
    rating: 4.6,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 4,
    title: "Learning JavaScript: Beginner Mode",
    rating: 4.5,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 5,
    title: "Learning JavaScript: Medium Mode",
    rating: 4.2,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 6,
    title: "Learning JavaScript: Hard Mode",
    rating: 3.6,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 7,
    title: "Learning JavaScript: Beginner Mode",
    rating: 2.5,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
];

var courses = document.getElementsByClassName("courses");
var link =
  window.location.href.split("/")[window.location.href.split("/").length - 1];
if (link == "index.html" || link == "") {
  for (var i = 0; i < 4; i++) {
    courses[0].innerHTML += `<div class="course" id="${i + 1}">
          <img src="assets/javascript.jpg" class="course-img" />
          <h4 class="course-title">
            ${courseArray[i].title}
          </h4>
          <div class="course-info">
            <p class="course-authors">${courseArray[i].author}</p>
            <div class="course-rating">
              <p class="course-rating-label">${courseArray[i].rating}</p>
              <div class="course-stars">
                <!-- Javascript to check rating label number and loop number of times to display the stars -->
              </div>
            </div>
          </div>
        </div>`;
  }

  for (var i = 0; i < 4; i++) {
    var course = document.getElementsByClassName("course-stars")[i];
    var rating = document.getElementsByClassName("course-rating-label")[i]
      .innerHTML;
    for (var j = 0; j < Math.floor(rating); j++) {
      course.innerHTML += "<img class='stars' src='assets/star.svg' />";
    }
  }
} else if (
  window.location.href.split("/")[window.location.href.split("/").length - 1] ==
  "courses.html"
) {
  for (var i = 0; i < 7; i++) {
    courses[0].innerHTML += `<div class="course" id="${i + 1}">
          <img src="assets/javascript.jpg" class="course-img" />
          <h4 class="course-title">
            ${courseArray[i].title}
          </h4>
          <div class="course-info">
            <p class="course-authors">${courseArray[i].author}</p>
            <div class="course-rating">
              <p class="course-rating-label">${courseArray[i].rating}</p>
              <div class="course-stars">
              </div>
            </div>
          </div>
        </div>`;
  }

  for (var i = 0; i < 7; i++) {
    courses[1].innerHTML += `<div class="course" id="${i + 1}">
          <img src="assets/javascript.jpg" class="course-img" />
          <h4 class="course-title">
            ${courseArray[i].title}
          </h4>
          <div class="course-info">
            <p class="course-authors">${courseArray[i].author}</p>
            <div class="course-rating">
              <p class="course-rating-label">${courseArray[i].rating}</p>
              <div class="course-stars">
              </div>
            </div>
          </div>
        </div>`;
  }

  for (var i = 0; i < 14; i++) {
    var course = document.getElementsByClassName("course-stars")[i];
    var rating = document.getElementsByClassName("course-rating-label")[i]
      .innerHTML;
    for (var j = 0; j < Math.floor(rating); j++) {
      course.innerHTML += "<img class='stars' src='assets/star.svg' />";
    }
  }
} else if (link.includes("course.html")) {
  for (var i = 0; i < 7; i++) {
    courses[0].innerHTML += `<div class="course" id="${i + 1}">
          <img src="assets/javascript.jpg" class="course-img" />
          <h4 class="course-title">
            ${courseArray[i].title}
          </h4>
          <div class="course-info">
            <p class="course-authors">${courseArray[i].author}</p>
            <div class="course-rating">
              <p class="course-rating-label">${courseArray[i].rating}</p>
              <div class="course-stars">
                <!-- Javascript to check rating label number and loop number of times to display the stars -->
              </div>
            </div>
          </div>
        </div>`;
  }
  for (var i = 0; i < 14; i++) {
    var course = document.getElementsByClassName("course-stars")[i];
    var rating = document.getElementsByClassName("course-rating-label")[i]
      .innerHTML;
    for (var j = 0; j < Math.floor(rating); j++) {
      course.innerHTML += "<img class='stars' src='assets/star.svg' />";
    }
  }
}

var course = document.getElementsByClassName("course");

for (let k = 0; k < course.length; k++) {
  course[k].addEventListener("click", function () {
    var courseID = course[k].id;
    window.location.href = `/course.html?course=${courseID}`;
  });
}
