var audioElement = new Audio('track1low.mp3');
audioElement.addEventListener('loadeddata', () => {
  let duration = audioElement.duration;
})