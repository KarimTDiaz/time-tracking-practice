// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { printInfo } from './print-info.js';
const cardsElement = document.getElementById('cards');

printInfo(cardsElement);
