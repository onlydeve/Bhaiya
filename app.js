const play_pause = document.getElementById("play-pause");
const audio = new Audio("audio/vipul.mp3");

let isFirstImage = true;

play_pause.addEventListener("click", () => {
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
