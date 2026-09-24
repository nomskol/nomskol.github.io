const forwardSound = new Audio('./assets/lancer-splat.mp3');
const reverseSound = new Audio('./assets/reverse-lancer-splat.mp3');
const sfxVolume = 0.5;

forwardSound.volume = sfxVolume;
reverseSound.volume = sfxVolume;

document.querySelectorAll('.result-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const image = document.getElementById(button.dataset.target);
    const isOpening = image.hidden;

    document.querySelectorAll('.result-image').forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.hidden = true;
      }
    });
    document.querySelectorAll('.result-toggle').forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute('aria-expanded', 'false');
      }
    });

    image.hidden = !isOpening;
    button.setAttribute('aria-expanded', String(isOpening));

    const sound = isOpening ? forwardSound : reverseSound;
    sound.currentTime = 0;
    sound.play();
  });
});
