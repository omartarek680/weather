// let searchInput = document.getElementById("search-input");

let searchInput = document.getElementById("search-input")

// searchInput.addEventListener("keyup",()=>{

// })
let todayForecast = document.getElementById("today-forecast");
let nextDayForecast = document.getElementById("next-day-forecast");
let thirdDayForecast = document.getElementById("third-day-forecast");

//  Days and Months

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


async function getForecast(city="alex") {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=36366e31871040c9bb7114356242101%20&q=${city}&days=3`
  );


  let result = await response.json();



  let date = new Date(result.location.localtime);
  let nextDayDate = new Date(result.forecast.forecastday[1].date)
  let thirdDayDate = new Date(result.forecast.forecastday[2].date)


  

  let todayForecastContent = `
      <div class="today-header d-flex justify-content-between pb-2 pt-2">
      <div class="ps-2">${days[date.getDay()]}</div>
      <div class="pe-2"> ${date.getDate()}${months[date.getMonth()]}</div>
      </div>
      <div class="today-content p-3 pt-4">
      <h3 class="ps-2">${result.location.name}</h3>
      <div class="temp text-light">${result.current.temp_c} <sup>o</sup>C</div>
      <div class="icon"><img src=${result.current.condition.icon} /></div>
      <div class="description">${result.current.condition.text}</div>
      <div class="container py-3 d-flex justify-content-between">
      <div class="rain"><i class="fa-solid fa-umbrella pe-1"></i>${
        result.forecast.forecastday[0].day.daily_chance_of_rain
      }%</div>
      <div class="wind"><i class="fa-solid fa-wind"></i> ${
        result.current.wind_kph
      }km/h</div>
      <div class="wind-dir"><i class="fa-regular fa-compass"></i> ${
        result.current.wind_dir
      }</div>
      </div>
      </div>
       
        `;

        let nextDayForecastContent = `
        <div class="next-day-header text-center pb-2 pt-2">
        <div class="ps-2">${days[nextDayDate.getDay()]}</div>
        
        </div>
        <div class="next-today-content text-center p-3 pt-4">
        <div class="icon"><img src="${result.forecast.forecastday[1].day.condition.icon}"/></div>
        <div class="temp text-light">${
          result.forecast.forecastday[1].day.maxtemp_c
        } <sup>o</sup>C</div>
        <small>${result.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>C</small>
        
        <div class="description pt-4">${result.forecast.forecastday[1].day.condition.text}</div>
       
        </div>
         
          `;

  let thirdDayForecastContent = `   <div class="third-day-header text-center pb-2 pt-2">
        <div class="ps-2">${days[thirdDayDate.getDay()]}</div>
        
        </div>
        <div class="third-today-content text-center p-3 pt-4">
        <div class="icon"><img src=${result.forecast.forecastday[2].day.condition.icon} /></div>
        <div class="temp text-light">${
          result.forecast.forecastday[2].day.maxtemp_c
        } <sup>o</sup>C</div>
        <small>${result.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>C</small>
        
        <div class="description pt-4">${result.forecast.forecastday[2].day.condition.text}</div>
       
        </div>
        `;

  document.getElementById("today-forecast").innerHTML = todayForecastContent;
  nextDayForecast.innerHTML = nextDayForecastContent;
  thirdDayForecast.innerHTML = thirdDayForecastContent;

  }


getForecast();
