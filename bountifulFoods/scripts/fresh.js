/*let dropdown = $('#fruit');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Fruit_Option</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://fruityvice.com/api/fruit/all';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('id', entry.id).text(entry.name));
})
});



*/
let dropdown = document.getElementById('fruit');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Your Fruit 1';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = '../bountifulFoods/data/fruit.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

var messagedate = new Date();
if (messagedate.getDay() == 2 || messagedate.getDay() == 4) {
  document.querySelector("#meet-greet").classList.add("active");
}