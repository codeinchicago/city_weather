//API key-63030f0a1bdaef33cc0d236f83981cbf

//For Chicago
//https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=63030f0a1bdaef33cc0d236f83981cbf

//For London
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=63030f0a1bdaef33cc0d236f83981cbf


var cityName = 'Chicago'

async function getCountryInfo(cityName){
    try{
        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=63030f0a1bdaef33cc0d236f83981cbf`)
        let data = await res.json()
        console.log(data['main'])
        return data['main']
    } catch(err) {
        console.error(err)
    }
}

getCountryInfo(cityName)