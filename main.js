document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("fade-out");
  setTimeout(
    () => (document.querySelector(".spinner").style.display = "none"),
    2000
  );
});

document
  .getElementById("video__switch-container")
  .addEventListener("click", function() {
    document.getElementById("video__switch-cover").classList.toggle("on");
  });
