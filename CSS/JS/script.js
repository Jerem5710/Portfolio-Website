let navbar = document.querySelector('nav');

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#eefff9';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}