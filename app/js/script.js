const toggle = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

// function to show the Navigation
const showNav = () => {
  navMenu.classList.toggle('showMenu');
  navList.classList.toggle('appear');
  // create var for the close icon
  const close = toggle.querySelector('i');
  close.classList.toggle('closeIcon');
};

// function to change active link
const changeActiveLink = (link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.classList.add('active');

    showNav();
  });
};

// Nav links
navLinks.forEach(changeActiveLink);

toggle.addEventListener('click', showNav);
