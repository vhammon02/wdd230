// Show the meet-greet message on Tue/Thu
// Date.getDay() uses a 0 based index to return the day of the week
var messagedate = new Date();
if (messagedate.getDay() == 2 || messagedate.getDay() == 4) {
  document.querySelector("#meet-greet").classList.add("active");
}

// Wind chill stuff
function setWindChill(windSpeed, temperature) {
  // Get the DOM objects that are dynamic
  let temperatureSpan = document.querySelector("#temperature");
  let windSpeedSpan = document.querySelector("#windspeed");
  let windChillSpan = document.querySelector("#windchill");

  // Set up the wind chill content
  let windChillMessage = "N/A";
  if (windSpeed >= 3.0 && temperature <= 50) {
    let chill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    windChillMessage = `${chill}`;
  }

  // Write out the dynamic content
  temperatureSpan.textContent = temperature;
  windSpeedSpan.textContent = windSpeed;
  windChillSpan.innerHTML = windChillMessage;
}

// select HTML elements in the document
const weatherIcon = document.querySelector("#weathericon");
const weatherDesc = document.querySelector("#weatherdesc");


const LAT = "35.7915";
const LON = "78.7811";
const APIKEY = "53cd406f2feca9610d47d8b30825921b";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayResults(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  const desc = weatherData.weather[0].description;
  const main = weatherData.weather[0].main;
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherDesc.textContent = main; 
  setWindChill(weatherData.wind.speed.toFixed(0), weatherData.main.temp.toFixed(0));
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();

const businessDataUrl = "./data/business.json";


function displaySpotlights(businessList){
  businessList = businessList.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
  spotlights = []
  for (let i=0; i < 3; i++){
    var elt = Math.floor(Math.random() * businessList.length)
    spotlights.push(businessList.splice(elt, 1)[0]);
  }

  // Now display stuff  
  var mainspotlight = document.querySelector('.main-spotlight');
  spotlightcount = 1;
  spotlights.forEach((spotlight) => {
    var newdiv = document.createElement('div');
    newdiv.classList.add('spotlight'+spotlightcount);
    spotlightcount++;
    newdiv.innerHTML = `<h4>${spotlight.name}</h4>
                        <p class="centered-image"><a href="${spotlight.websiteURL}"><img src="${spotlight.imageURL}"></a></p>
                        <p>${spotlight.streetAddress}, ${spotlight.cityStateZip}</p>
                        <p>${spotlight.adcopy}</p>`
    mainspotlight.append(newdiv);    
  })

}

async function getBusinessData() {
  const response = await fetch(businessDataUrl);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.businesses);
  } else {
    console.error("There was an error loading the data.");
  }
}

getBusinessData();