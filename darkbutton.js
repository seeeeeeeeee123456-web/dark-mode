 const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleIcon.src = "animals.jpg";
  } else {
    toggleIcon.src = "hampster kissy.jpg";
  }
});