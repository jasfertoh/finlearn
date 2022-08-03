document
  .getElementById("newsletter-btn")
  .addEventListener("click", function () {
    alert("Thanks for subscribing to our newsletter!");
    document.getElementById("newsletter-email").innerHTML = "";
  });
