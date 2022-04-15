const video = document.querySelector("video");
const video_container = document.querySelector(".video_container");
const button = document.querySelector(".video_button");
button.addEventListener("click", () => {
  video.play();

  video.classList.toggle("playing");

  button.classList.toggle("transparent");
});
video.addEventListener("click", () => {
  button.classList.toggle("transparent");
});
// video_container.addEventListener("click", () => {
//   if (video.classList.contains("playing")) {
//     video.pause();
//     video.classList.toggle("playing");
//     button.style.display = "block";
//   }
// });
