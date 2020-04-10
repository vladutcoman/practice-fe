document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cards = [
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    }
  ];

  cards.sort(() => 0.5 - Math.random);

  let grid = document.querySelector('.grid');
  let displayResult = document.querySelector('#result');
  let cardsChoosen = [];
  let cardsChoosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.append(card);
    }
  }

  // check for matches
  function checkForMatch() {
    const allCards = document.querySelectorAll('img');
    const cardOneId = cardsChoosenId[0];
    const cardTwoId = cardsChoosenId[1];
    if (cardsChoosen[0] === cardsChoosen[1]) {
      alert('You found a match!');
      allCards[cardOneId].setAttribute('src', 'images/white.png');
      allCards[cardTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChoosen);
    } else {
      allCards[cardOneId].setAttribute('src', 'images/blank.png');
      allCards[cardTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again!');
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    displayResult.textContent = cardsWon.length;
    if (cardsWon.length >= cards.length/2) {
      displayResult.textContent = 'Congratulations';
    }
  }

  // flip card
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChoosen.push(cards[cardId].name);
    cardsChoosenId.push(cardId);
    this.setAttribute('src', cards[cardId].img);
    if (cardsChoosen.length === 2) {
      setTimeout(checkForMatch, 400);
    }
  }


  createBoard();

})