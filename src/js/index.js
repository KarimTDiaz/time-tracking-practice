// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { printInfo } from './print-info.js';
import { textSelected } from './text-selected.js';
const cardsElement = document.getElementById('cards');

printInfo('weekly');
cardsElement.addEventListener('click', ev => {
  printInfo(ev.target.dataset.filter);
  const currentElement = ev.target;
  textSelected(currentElement);
});
