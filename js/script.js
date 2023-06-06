// toggle class active
let navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik 
document.querySelector('#hamburger-menu');
onclick = () => {
    navbarNav.classList.toggle('active');

};

// klik diluar sidebar untuk menghilangkan navnya
let hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});