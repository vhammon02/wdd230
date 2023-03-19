const url = './data.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets)
}


  


    const displayProphets = (prophets) => {
        const cards = document.querySelector('div.cards'); // select the output container element

        prophets.forEach((prophet) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let portrait = document.createElement('img');

            h2.textContent = '${prophet.name} ____';

            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portait of ${prophet.name} ______________`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            card.appendChild(h2);
            card.appendChild(portrait);

            cards.appendChild(card);
        });
  }

getProphetData();