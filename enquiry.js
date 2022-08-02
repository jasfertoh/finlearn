var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") != -1) {
  formData = formData.replace("+", " ");
}
formData = unescape(formData);
var formArray = formData.split("&");
document.getElementById("submitted-info").innerHTML = `Name: ${
  formArray[0].split("=")[1]
}<br />Email: ${formArray[1].split("=")[1]}<br />Phone: ${
  formArray[2].split("=")[1]
}<br /> Message: ${formArray[3].split("=")[1]}`;

var backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", function () {
  location.href = "index.html";
});
