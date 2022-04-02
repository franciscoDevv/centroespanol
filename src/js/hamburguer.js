const hamburguerButton = document.getElementById('hamburguer');
const overlay = document.querySelector(".overlay");
const content = document.querySelector(".content2");
const context = document.querySelector(".context");
hamburguerButton.addEventListener('click', () => {
    overlay.classList.toggle("see");
    content.classList.toggle("none");
    content.classList.toggle("none");
})