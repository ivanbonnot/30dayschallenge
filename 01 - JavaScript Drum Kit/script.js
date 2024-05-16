document.addEventListener('keydown', playSound)

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio)
    if (audio) {

        audio.currentTime = 0;
        audio.play()
    } else {
        return
    }
}