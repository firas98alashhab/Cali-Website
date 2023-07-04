const cards = document.querySelectorAll(".card__inner");
let activeCard = null;

function resetActiveCard() {
  if (activeCard !== null) {
    activeCard.classList.remove('is-flipped');
    activeCard = null;
  }
}

function handleCardClick(card) {
  if (activeCard === card) {
    card.classList.toggle('is-flipped');
  } else {
    resetActiveCard();
    activeCard = card;
    card.classList.add('is-flipped');
  }
}

cards.forEach(card => {
  card.addEventListener('click', function(){
    handleCardClick(card);
  });
});

window.addEventListener('scroll', function() {
  if (activeCard !== null) {
    const rect = activeCard.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!isVisible) {
      resetActiveCard();
    }
  }
});
