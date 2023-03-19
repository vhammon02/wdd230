const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);