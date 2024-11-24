const button = document.getElementById("theme");
const body = document.body;

button.addEventListener("click", () => {
    body.classList.toggle("lightMode");
    body.classList.toggle("darkMode");

    if (body.classList.contains("lightMode")) {
        button.textContent = "Troque para um tema escuro"
    } else {
        button.textContent = "Troque para um tema claro"
    }

});