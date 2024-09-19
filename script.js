//changes navigation bar at the top from transparent to white when scrolling
let navbar = document.querySelector('nav');

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#eefff9';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}

let banner = document.querySelector('.banner-container');
let navList = document.getElementById('navlistItems');
//toggle button

//selectors - for selecting elements
const themeToggleBtn = document.querySelector('.theme-toggle');

//state - data that can be used globally and possibly changed or mutated
const theme = localStorage.getItem('theme');

//on mount - something that happens when page is first loaded
theme && document.body.classList.add(theme); //short circuiting
//the && operator is only going to allow what's on the right to run
//if, and only if, what's on the left is true
//like an if statement, what's on the left is the condition and right is the
//code we want to run

//handlers - better way to organize our functions
handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');//key and value pair
    } else {
        localStorage.removeItem('theme');
    };
    
    
};

//events
themeToggleBtn.addEventListener('click', handleThemeToggle);

//toggle sun and moon icons when clicked
let toggle = true;

const img = document.getElementById('image');

const toggleSunMoon = () => {
    toggle = !toggle;//when you click, the truthy value changes to false
    if (toggle) {
        img.src = 'CSS/Images/sun-29-512.png';
        banner.style.background = 'rgb(129, 128, 126)';
        banner.style.background = 'linear-gradient(0deg, rgba(129, 128, 126, 1) 4%, rgba(214, 219, 219, 1) 58%, rgba(197, 201, 200, 1) 100%)';
    } else {
        img.src = 'CSS/Images/moon-24-512.png';
        banner.style.background = '#2b2a2a';
        navList.style.color = '#000';
    };
    
};

img.addEventListener('click', toggleSunMoon);
