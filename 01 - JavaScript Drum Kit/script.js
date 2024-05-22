document.addEventListener('keydown', playSound)

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (audio) {
        audio.currentTime = 0;
        audio.play()
        key.classList.remove('active');
        key.classList.add('active')
    } else {
        return
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeActiveClass));

    function removeActiveClass(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('active');
    }

}
