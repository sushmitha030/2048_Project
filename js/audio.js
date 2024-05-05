var audio = document.getElementById("background-music");
var audioButton = document.getElementById("audio-button");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    document.getElementById("audio-icon").src = "./meta/sound_1_resize.jpg";
  } else {
    audio.pause();
    document.getElementById("audio-icon").src = "./meta/mute_resize.jpg";
  }
}

audioButton.addEventListener("click", toggleAudio);