document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("fade-out");
  setTimeout(
    () => (document.querySelector(".spinner").style.display = "none"),
    2000
  );
});
