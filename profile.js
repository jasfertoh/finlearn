if (localStorage.getItem("loggedIn") == "false") {
  window.location.href = "index.html";
}

var user = JSON.parse(localStorage.getItem("user"));

document.getElementById(
  "profile-details"
).innerHTML = `<p>First name: ${user.firstName}</p><p>Last name: ${user.lastName}</p><p>Email: ${user.email}</p>`;

document.getElementById("logout-btn").addEventListener("click", function () {
  localStorage.setItem("loggedIn", false);
  window.location.href = "index.html";
});
