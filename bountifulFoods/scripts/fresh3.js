let dropdown3 = document.getElementById('fruity');
dropdown3.length = 0;

let defaultOption3 = document.createElement('option');
defaultOption3.text = 'Choose Your Fruit 3';

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

const url3 = '../bountifulFoods/data/fruit.json';

fetch(url3)  
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
      	  dropdown3.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });
