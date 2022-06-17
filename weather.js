//API key-63030f0a1bdaef33cc0d236f83981cbf

//For Chicago
//https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=63030f0a1bdaef33cc0d236f83981cbf

//For London
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=63030f0a1bdaef33cc0d236f83981cbf


//var cityName = 'Chicago'

// Get the country from the form and display info on page
{
    // Grab the form
    let form = document.getElementById('cityForm');
    
    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault();
        // Get the input data from the form
        let inputCity = e.target.cityName.value;
        // Get country info from the input data
        let city = await getCityInfo(inputCity);
        // Build and add country card to display
        buildCityCard(city)
        e.target.cityName.value = '';
    }

    // Add handleSubmit function as listener to submit even on form
    form.addEventListener('submit', handleSubmit);



    async function getCityInfo(cityName){
        try{
            let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=63030f0a1bdaef33cc0d236f83981cbf&units=imperial`)
            let data = await res.json()
            console.log(data)
            return data
        } catch(err) {
            console.error(err)
        }
    }

        // Function that will create country card and add to country display div
        function buildCityCard(cityObj){
            // Create the card div
            const card = document.createElement('div');
            card.className = 'card';
    
            // Create card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            // HERE Create country name and population elements
            const cityTitle = document.createElement('h5');
            cityTitle.className = 'card-title'
            cityTitle.innerHTML = cityObj.name;
    
            const temperature = document.createElement('p');
            temperature.className = 'card-text'
            temperature.innerHTML = cityObj.main['temp'];

            const max = document.createElement('max');
            max.className = 'card-text'
            max.innerHTML = cityObj.main['temp_max'];

            const min = document.createElement('min');
            min.className = 'card-text'
            min.innerHTML = cityObj.main['temp_min'];

            const test = document.createElement('test');
            test.className = 'card-text'
            test.innerHTML = cityObj.main['pressure'];
    
            // Append title and population to card body
            cardBody.append(cityTitle);
            cardBody.append(temperature);
            cardBody.append(max);
            cardBody.append(min);
            cardBody.append(test);
    
            // Add card body to card div
            card.append(cardBody);
    
            // Create our column for the row
            const col = document.createElement('div');
            col.className = 'col-12'
    
            // Add the card to the column
            col.append(card)
    
            // Get the country display row
            const cityDisplay = document.getElementById('cityDisplay');
    
            // Add the new column to our display
            cityDisplay.append(col);
        }
}

//getCountryInfo(cityName)