const input_field = document.getElementById('input_field');
const ipiKey = "649597c47fd13799b12cd57e0046f0d8";
const getWeatherButton = document.getElementById('get_weather_btn');
getWeatherButton.addEventListener("click", async () =>{
  const weatherData = await getWather();

  const cityName = weatherData.main.name;
  const cityTemp = weatherData.main.temp;
  const weather = weatherData.weather.main;
  const weatherDesc = weatherData.weather.description;
  const weatherIcon = weatherData.weather.icon;

  console.log(cityName);
  console.log(cityTemp);
  console.log(weather);
  console.log(weatherDesc);
  console.log(weatherIcon);
  console.log(weatherData);
  
});

async function getWather(){
  const city = input_field.value;
  if(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ipiKey}`;

    try{
      const response = await fetch (apiUrl);
      if(!response.ok){
        console.error("Could not fetch data");
      }
      return response.json();
    }
    catch(error){
      console.error(error);
    }

    console.log(response);
  }
}