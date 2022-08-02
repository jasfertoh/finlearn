if (localStorage.getItem("loggedIn") == "true") {
  window.location.href = "index.html";
}

function registerUser() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if (fname == "" || lname == "" || email == "" || pass == "") {
    return;
  }
  var user = {
    firstName: fname,
    lastName: lname,
    email: email,
    password: pass,
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loggedIn", true);
  window.location.href = "index.html";
}

document
  .getElementsByClassName("register-form-btn")[0]
  .addEventListener("click", function () {
    registerUser();
  });
