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

var course = document.getElementsByClassName("course");

for (let k = 0; k < course.length; k++) {
  course[k].addEventListener("click", function () {
    var courseID = course[k].id;
    window.location.href = `/course.html?course=${courseID}`;
  });
}
