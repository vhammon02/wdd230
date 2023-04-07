let url = new URL(window.location);
let params  = url.searchParams;

const date = new Date();
console.log(date);

for (const p of params) {
    console.log(p);
}

document.querySelector('#yourfname').textContent = params.get("fname");
document.querySelector('#yourlname').textContent = params.get("lname");
document.querySelector('#yourphone').textContent = params.get("phone");
document.querySelector('#youremail').textContent = params.get("email");
/*document.querySelector('#yourfruit').textContent = params.get("fruit");
document.querySelector('#yourfruit2').textContent = params.get("fruit2");
document.querySelector('#yourfruity').textContent = params.get("fruity");*/
document.querySelector('#yourdate').textContent = date;



