import { apiKey } from "./exportApi.js";
// require('.env').config();
// const apiKey = process.env.API_KEY;

const input_field = document.getElementById('input_field');
const weather_details = document.getElementById('weather_display');
const getWeatherButton = document.getElementById('get_weather_btn');
getWeatherButton.addEventListener("click", async () =>{
  weather_details.textContent = "";
  try{
    const weatherData = await getWather();
    const {name:city,
           main:{temp, humidity},
           weather:[{description, id}]} = weatherData;

           const placeName = document.createElement('p');
           placeName.textContent = city;
           placeName.classList.add("place");

           const placeTemp = document.createElement('p');
           placeTemp.textContent = (temp - 273).toFixed(1);
           placeTemp.classList.add("temp");

           const placeHumidity = document.createElement('p');
           placeHumidity.textContent = `${humidity}%`;
           placeHumidity.classList.add("humidity");

           const weatherDesc = document.createElement('p');
           weatherDesc.textContent = description;
           weatherDesc.classList.add("weather_desc");

           const weatherId = document.createElement('p');
           let weatherEmoji;
           switch(true){
            case id >= 200 && id < 300:
              weatherEmoji = "⛈"; 
            break;
            case id >= 300 && id < 400:
               weatherEmoji = "🌧";
            break;
            case id >= 500 && id < 600:
               weatherEmoji = "🌧"; 
            break;
            case id >= 600 && id < 700:
              weatherEmoji = "🌨"; 
            break;
            case id >= 700 && id < 800:
               weatherEmoji = "";
            break;
            case id === 800:
             weatherEmoji = "";
            break;
            case id >= 800 && id < 900:
               weatherEmoji = "☁";
            break;
            default: weatherEmoji ="❓";
           }
           weatherId.textContent = weatherEmoji;
           weatherId.classList.add("emoji");

           weather_details.append(placeName, placeTemp, placeHumidity, weatherDesc, weatherId);

           weather_details.style.display = 'flex';
  }
  catch(error){
    console.error(error);
    displayError("");
  }
  
});

async function getWather(){
  const city = input_field.value;
  if(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
      const response = await fetch (apiUrl);
      if(!response.ok){
        throw new error("Could not fetch data");
      }
      return response.json();
    }
    catch(error){
      console.error(error);
      displayError("Could not fetch data")
    }

    console.log(response);
  }
  else{
    displayError("Please enter a city");

  }
}
function displayError(message){
  const errorDisplay = document.createElement('p');
  errorDisplay.classList.add("errorDisplay");
  errorDisplay.textContent = message;

  weather_details.appendChild(errorDisplay);

  weather_details.style.display = 'flex';

}
