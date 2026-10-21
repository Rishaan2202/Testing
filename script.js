const themeToggle = document.getElementById('themeToggle');
const factButton = document.getElementById('factButton');
const factText = document.getElementById('factText');
const year = document.getElementById('year');

const facts = [
  'I enjoy building projects from scratch.',
  'I like learning new technologies.',
  'I believe consistency beats intensity.'
];

year.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

factButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});
