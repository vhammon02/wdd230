var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});

const url = "./data/business.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayBusinesses = (businesss) => {
    const cards = document.querySelector(".directory-cards"); // select the output container element
  
    businesss.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("section");
      card.innerHTML = `
      <img src="${business.imgname}">
      <h5>${business.name}</h5>
      <h5>has been with us ${business.years} years</h5>
      <p>${business.address}</p>
      <p>${business.phone}</p>
      <p><a href="${business.website}">${business.website}</a></p>
      <p>${business.category}</p>
      `;
      if (business.memberlvl=='gold'){
        card.classList.add('gold-member');
      }
      if (business.memberlvl=='silver'){
        card.classList.add('silver-member');
      

      }
      cards.appendChild(card);
    }); // end of forEach loop
    
  }; // end of function expression
  
  async function getBusinessData() {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayBusinesses(data.businesses);
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("directory-cards");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  }
  
  getBusinessData();
//async function getProphetData() {
//    const response = await fetch(url);
//    const data = await response.json();
//    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
//    displayProphets(data.business)
//}
//
//
//  
//
//
//    const displayProphets = (prophets) => {
//        const cards = document.querySelector('div.cards'); // select the output container element
//
//        prophets.forEach((prophet) => {
//            let card = document.createElement('section');
//            let h2 = document.createElement('h2');
//            let portrait = document.createElement('img');
//            let address = document.createElement('p');
//            let phone = document.createElement('p');
//            let website = document.createElement('p');
//            let memberlvl = document.createElement('p');
//            let  = document.createElement('p');
//
//            h2.textContent = `${prophet.name}`;
//
//            card.setAttribute('class', 'directory-cards')
//
//            portrait.setAttribute('src', prophet.imgname);
//            portrait.setAttribute('alt', `Portait of ${prophet.name} ______________`);
//            portrait.setAttribute('loading', 'lazy');
//            portrait.setAttribute('width', '440');
//            portrait.setAttribute('height', '340');
//
//            address.textContent = `Address: ${prophet.address}`
//
//            if (prophet.memberlvl=='gold'){
//                card.classList.add('gold-member');
//            }
//
//            card.appendChild(h2);
//            card.appendChild(portrait);
//
//            cards.appendChild(card);
//
//            cards.appendChild(address);
//        });
//  }
//
//getProphetData();