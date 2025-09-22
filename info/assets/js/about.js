// add javascript for about page for work experience card animation

const cards = document.querySelectorAll('.timeline-card');
let currentCard = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('hidden', i !== index);
  });
}

document.getElementById('next-card').addEventListener('click', () => {
  currentCard = (currentCard + 1) % cards.length;
  showCard(currentCard);
});

document.getElementById('prev-card').addEventListener('click', () => {
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  showCard(currentCard);
});

// Show the first card initially
showCard(currentCard);
