var keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
var sounds = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

document.querySelectorAll('.drum').forEach((btn, i) => {
  btn.addEventListener('click', () => playSound(keys[i]));
});

document.addEventListener('keydown', (event) => {
  var key = event.key.toLowerCase();
  if (keys.includes(key)) {
    playSound(key);
  }
});

function playSound(key) {
  var audio = new Audio(sounds[keys.indexOf(key)]);
  audio.play();
}
