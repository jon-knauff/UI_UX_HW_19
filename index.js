let modal = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

document.querySelectorAll('.audio-button').forEach(button => {
    button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-audio');
        const audio = new Audio(audioSrc);
        audio.play();
    });
});