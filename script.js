alert("Are you ready to see more?");
document.getElementById("yesButton").addEventListener("click", function () {
  document.getElementById("yesImage").style.display = "inline-block";
  document.getElementById("noImage").style.display = "none";
});

document.getElementById("noButton").addEventListener("click", function () {
  document.getElementById("noImage").style.display = "inline-block";
  document.getElementById("yesImage").style.display = "none";
});
