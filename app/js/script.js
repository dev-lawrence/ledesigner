const toggle = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = navList.querySelectorAll('a');

// function to show the Navigation
const showNav = () => {
  navMenu.classList.toggle('showMenu');
  navList.classList.toggle('appear');
  // create var for the close icon
  const close = toggle.querySelector('i');
  close.classList.toggle('closeIcon');
};

// Function to change active link on click
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.classList.add('active');

    showNav();
  });
});

toggle.addEventListener('click', showNav);
