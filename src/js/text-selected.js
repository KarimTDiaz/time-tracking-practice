const cardFrequencyElement = document.getElementById('card-list');

const textSelected = element => {
  [...cardFrequencyElement.children].forEach(li => {
    li.classList.remove('card__list-item--active');
  });
  element.classList.add('card__list-item--active');
};

export { textSelected };
