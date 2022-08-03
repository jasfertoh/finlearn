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
    rating: 4.2,
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
    rating: 4.6,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
  {
    courseNo: 7,
    title: "Learning JavaScript: Beginner Mode",
    rating: 4.5,
    author: "John Lim, Professor X",
    details:
      "This JavaScript course has been specially developed for students that are looking to branch out into coding with JavaScript as a starter language, and with John Lim and Professor X teaching, there are many lessons that can be learned. Through this course, students will be able to gain knowledge on how JavaScript works, along with creating projects to display the knowledge that you have gathered, along with exposure to technologies like JQuery, APIs, NodeJS and more. ",
  },
];

var courseNo = location.search.split("?")[1].split("=")[1];
document.getElementById("course-title").innerHTML =
  courseArray[courseNo - 1].title;
document.getElementById("c-rating").innerHTML =
  courseArray[courseNo - 1].rating;
document.getElementById("course-authors").innerHTML =
  courseArray[courseNo - 1].author;
document.getElementById("course-desc").innerHTML =
  courseArray[courseNo - 1].details;
document.getElementById("image").src = "assets/javascript.jpg";

var course = document.getElementById("c-stars");
console.log(course);
for (var j = 0; j < Math.floor(courseArray[courseNo - 1].rating); j++) {
  course.innerHTML += "<img class='stars' src='assets/star.svg' />";
}

var buyBtn = document.getElementsByClassName("buy-btn");

for (var i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener("click", function () {
    if (!localStorage.getItem("user")) {
      alert("You need to login to be able to enroll!");
      return;
    }
    if (!localStorage.getItem("enrolled")) {
      localStorage.setItem("enrolled", JSON.stringify([courseNo]));
    } else {
      var arr = JSON.parse(localStorage.getItem("enrolled"));
      if (!arr.includes(courseNo.toString())) {
        arr.push(courseNo);
        localStorage.setItem("enrolled", JSON.stringify(arr));
        for (var i = 0; i < buyBtn.length; i++) {
          buyBtn[i].innerHTML = "Enrolled";
          buyBtn[i].disabled = true;
        }
      }
    }
  });
}

var link = window.location.search.split("=")[1];
var enrolled = JSON.parse(localStorage.getItem("enrolled"));

if (enrolled.includes(link)) {
  for (var i = 0; i < buyBtn.length; i++) {
    buyBtn[i].innerHTML = "Enrolled";
    buyBtn[i].disabled = true;
  }
}

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
for (var i = 0; i < 7; i++) {
  var course = document.getElementsByClassName("course-stars")[i];
  var rating = document.getElementsByClassName("course-rating-label")[i]
    .innerHTML;
  for (var j = 0; j < Math.floor(rating); j++) {
    course.innerHTML += "<img class='stars' src='assets/star.svg' />";
  }
}

var course = document.getElementsByClassName("course");

for (let k = 0; k < course.length; k++) {
  course[k].addEventListener("click", function () {
    var courseID = course[k].id;
    window.location.href = `/course.html?course=${courseID}`;
  });
}
