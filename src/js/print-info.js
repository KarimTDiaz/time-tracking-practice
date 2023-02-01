const fetchData = url => fetch(url);

const printInfo = cards => {
  const requestInfo = fetchData('/data.json');
  requestInfo
    .then(response => response.json())
    .then(data => {
      for (let index = 0; index <= 6; index++) {
        cards.children[index] + 1;
        for (let j = 0; j < 3; j++) {
          console.log(cards.children[index].children[j]);
          console.log(data[index]);
        }
      }
    });
};
export { printInfo };
