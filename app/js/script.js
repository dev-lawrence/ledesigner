const toggle = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const loadMore = document.querySelector('#load-more');

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

// Load more button for featured section
let currentItem = 3;

const showMore = () => {
  const featuredCard = document.querySelector('.featured__card');
  const cards = Array.from(featuredCard.children);
  cards.forEach((card, index) => {
    index = currentItem;

    if (index < currentItem + 3) {
      card.style.display = 'block';
    }

    currentItem += 3;

    if (currentItem >= cards.length) {
      loadMore.style.display = 'none';
    }
  });
};

loadMore.addEventListener('click', showMore);
