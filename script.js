const extraProjects = document.getElementsByClassName("extra-projects");
const toggleButton = document.getElementById("project-toggle");
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const menuToggle = document.getElementById("btnHamburger");

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
    menu.classList.toggle('sticky', window.scrollY > 0);
});

const toggleMenu = () => {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');
    if(menu.classList.contains('open')){
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}

const toggleProjectView = (e) => {
    const len = extraProjects !== null ? extraProjects.length : 0
    for (let i = 0; i < len; i++) {
        extraProjects[i].classList.toggle("hidden-projects")
    }

    if (toggleButton.innerText === "VIEW MORE") {
        toggleButton.innerText = "SHOW LESS"
    } else {
        toggleButton.innerText = "VIEW MORE"
    }
}

const date = new Date();
document.getElementById("copyright").innerHTML = `&#169 Gregory Schoenberg ${date.getFullYear()}`;
