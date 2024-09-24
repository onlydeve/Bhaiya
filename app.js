gsap.from("#play-pause", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.5,
});

gsap.from("#logo", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.5,
});

gsap.from(".first-para", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.7,
});

gsap.from(".second-para", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.8,
});

gsap.from(".third-para", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.9,
});

const play_pause = document.getElementById("play-pause");
const audio = new Audio("audio/vipul.mp3");

let isFirstImage = true;

play_pause.addEventListener("click", function () {
  if (isFirstImage) {
    play_pause.src = "imgs/Pause.png";
    audio.play();
    audio.loop = "loop";
  } else {
    play_pause.src = "imgs/Play.png";
    audio.pause();
    audio.currentTime = 0;
    audio.src = audio.src;
  }
  isFirstImage = !isFirstImage;
});
