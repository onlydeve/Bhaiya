const play_pause = document.getElementById("play-pause");
const audio = new Audio("audio/vipul.mp3");

let isPlaying = false;

play_pause.addEventListener("click", () => {
  if (!isPlaying) {
    play_pause.src = "imgs/Pause.png";
    audio.play();
    // audio.loop = "loop";
  } else {
    play_pause.src = "imgs/Play.png";
    audio.pause();
    audio.currentTime = 0;
  }
  isPlaying = !isPlaying;
});

audio.addEventListener("ended", () => {
  play_pause.src = "imgs/Play.png";
  isPlaying = false;
});
