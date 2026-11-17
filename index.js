let buttons = document.querySelectorAll(".drum");
let sounds = [
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
  "snare.mp3",
  "crash.mp3",
  "kick-bass.mp3"
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let audio = new Audio("sounds/" + sounds[i]);
    audio.play();
  });
}