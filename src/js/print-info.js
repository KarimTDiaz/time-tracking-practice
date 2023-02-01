const fetchData = url => fetch(url);
const cards = document.querySelectorAll('.card-info');

const printInfo = ev => {
  const requestInfo = fetchData('/data.json');
  requestInfo
    .then(response => response.json())
    .then(data => {
      data.forEach((card, i) => {
        cards[i].children[1].textContent = card.timeframes[ev].current + 'hrs';
        cards[i].children[2].children[1].textContent =
          card.timeframes[ev].previous + 'hrs';
      });
    });
};
export { printInfo };
