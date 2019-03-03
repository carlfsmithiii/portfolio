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
    const cover = document.getElementById("video__switch-cover");
    const video = document.getElementById("video");
    cover.classList.toggle("on");
    const play = cover.classList.contains("on");
    setTimeout(() => {
      if (play) {
        video.play();
      } else {
        video.pause();
      }
    }, 200);
  });
