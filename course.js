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
