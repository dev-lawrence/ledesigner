// Nav menu
const toggle = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

// Testimonial carousel
const loadMore = document.querySelector('#load-more');
const carouselSlide = document.querySelector('.testimonial__cards');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Monthly and yearly plans
const yearButton = document.querySelector('#year');
const radioButton = document.querySelectorAll('.toggle__wrapper input');
const season = document.querySelectorAll('.season');
const price = document.querySelectorAll('.price');

// FUNCTION TO SHOW THE NAVIGATION
const showNav = () => {
  navMenu.classList.toggle('showMenu');
  navList.classList.toggle('appear');
  // create var for the close icon
  const close = toggle.querySelector('i');
  close.classList.toggle('closeIcon');
};

// FUNCTION TO CHANGE ACTIVE LINK
const changeActiveLink = (link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.classList.add('active');

    showNav();
  });
};

// NAV LINKS
navLinks.forEach(changeActiveLink);
toggle.addEventListener('click', showNav);

// LOAD MORE BUTTON FOR FEATURED SECTION
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

// TESTIMONIAL SLIDER
let currentSlide = 0;
const carouselCard = document.querySelector('.testimonial__card');
const size = carouselCard.getBoundingClientRect().width;

const moveSlide = () => {
  carouselSlide.style.transform = `translateX(-${currentSlide * size}px)`;
};

const nextSlide = () => {
  if (currentSlide < 2) {
    currentSlide++;
  }

  // set slide to end
  else {
    currentSlide = 2;
  }

  moveSlide();
};

const prevSlide = () => {
  if (currentSlide > 0) {
    currentSlide--;
  }

  // set slide to end
  else {
    currentSlide = 0;
  }

  moveSlide();
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// PLANS SECTION - monthly and yearly plans
let yearly = localStorage.getItem('yearly');

const yearlyPrice = () => {
  document.querySelector('.basic-price').textContent = '$69';
  document.querySelector('.team-price').textContent = '$138';
  document.querySelector('.enterprise-price').textContent = '$276';
};

const monthlyPrice = () => {
  document.querySelector('.basic-price').textContent = '$39';
  document.querySelector('.team-price').textContent = '$69';
  document.querySelector('.enterprise-price').textContent = '$139';
};

// enable yearly price
const enableYearly = () => {
  // yearly season
  season.forEach((season) => {
    season.textContent = '/year';
  });

  // yearly price
  yearlyPrice();

  localStorage.setItem('yearly', 'enabled');
};

// enable monthly price
const enableMonthly = () => {
  season.forEach((season) => {
    season.textContent = '/month';
  });

  monthlyPrice();

  localStorage.setItem('yearly', null);
};

if (yearly === 'enabled') {
  enableYearly();
  yearButton.click();
}

radioButton.forEach((button) => {
  yearly = localStorage.getItem('yearly');
  button.addEventListener('click', () => {
    if (yearButton.checked) {
      enableYearly();
    } else {
      enableMonthly();
    }
  });
});
