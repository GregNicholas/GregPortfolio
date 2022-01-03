const extraProjects = document.getElementsByClassName("extra-projects");
const toggleButton = document.getElementById("project-toggle");

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const toggleMenu = () => {
    const menuToggle = document.getElementById("btnHamburger");
    const menu = document.querySelector(".menu");
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');
}

const toggleProjectView = (e) => {
    const len = extraProjects !== null ? extraProjects.length : 0
    for (let i = 0; i < len; i++) {
        extraProjects[i].classList.toggle("hidden-projects")
    }

    if (toggleButton.innerText === "VIEW MORE") {
        toggleButton.innerText = "HIDE"
    } else {
        toggleButton.innerText = "VIEW MORE"
    }
}

const date = new Date();
document.getElementById("copyright").innerHTML = `&#169 Gregory Schoenberg ${date.getFullYear()}`;

