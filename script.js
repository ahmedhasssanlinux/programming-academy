const filterButtons = document.querySelectorAll('.filter-btn');
const languageCards = document.querySelectorAll('.language-card');
const tabButtons = document.querySelectorAll('.tab-btn');
const lessonPanels = document.querySelectorAll('.lesson-panel');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    languageCards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    lessonPanels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    const selected = button.dataset.tab;
    document.getElementById(`${selected}-panel`).classList.add('active');
  });
});

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
