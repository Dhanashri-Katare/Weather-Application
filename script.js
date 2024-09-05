const inputBox=document.querySelector('.input-box');
const search=document.getElementById('SearchButton');
const weatherImage=document.querySelector('.wimg');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
/* i used const bcoz variables dosn't change*/ 
const humidity=document.getElementById('humidity');
const windSpeed=document.getElementById('wind-speed');

const locationMissing=document.querySelector('.error');

const weatherBody=document.querySelector('.weather-body');

const weather_welcome=document.querySelector('.welcome');


async function checkWeather(city){
    const api_key="f5df42eaafb098c1cec714bd10883eea";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherData= await fetch(`${url}`).then(response => response.json());

    /* await -isliye use kiya hai ke ek bar ka sara data weather_data me store karane k liye*/ 

    
if(weatherData.cod===`404`){
    locationMissing.style.display="flex";
    
    weatherBody.style.display="none";
    console.log("Error");
    return;
}
locationMissing.style.display="none";
weatherBody.style.display="flex";

weather_welcome.innerHTML=`Thanks for using my application!!`

   temperature.innerHTML=`${Math.round(weatherData.main.temp - 273.15)}°C`;
  console.log(weatherData);

   description.innerHTML=`${weatherData.weather[0].description}`;

   humidity.innerHTML=`${weatherData.main.humidity}%`;

   windSpeed.innerHTML=`${weatherData.wind.speed}Km/H`;

   switch(weatherData.weather[0].main){
  case 'Clouds':
    weatherImage.src="https://cdn.dribbble.com/users/40760/screenshots/7007227/sunny_weather.gif";
    break;

    case 'Clear':
        weatherImage.src="https://cdn.dribbble.com/users/186452/screenshots/1732132/media/122bade18c3fd170e8224ce32c378359.gif";
break;

        case 'Mist':
            weatherImage.src="/images/mist.png";
        break;

            case 'Rain':weatherImage.src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/af8a6a32739675.5691dd2389a24.gif";
            break;

            case 'Snow':weatherImage.src="/images/snow.png";
            break;
        }
}

search.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});