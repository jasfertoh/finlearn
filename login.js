if (localStorage.getItem("loggedIn") == "true") {
  window.location.href = "index.html";
}

function authenticateUser() {
  if (!localStorage.getItem("user")) {
    window.alert("You have not created an account!");
  }
  let user = JSON.parse(localStorage.getItem("user"));
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (user.email == email && user.password == password) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "index.html";
  } else {
    window.alert("Wrong email or password");
  }
}

document
  .getElementsByClassName("login-form-btn")[0]
  .addEventListener("click", function () {
    authenticateUser();
  });
