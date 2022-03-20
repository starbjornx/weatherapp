var search = document.querySelector("#searchForm");
var wind = document.querySelector(".windspeed");
var temp = document.querySelector(".temp");
var cityname = document.querySelector("#cityName");
var image = document.querySelector(".image");
var dashboard = document.querySelector("#dashboard");
var apiKey = "4cf84f97761ef4ad3d872af26897cfb0";
var fiveday = document.querySelector("#fiveDay");
var searchTextEl = document.querySelector(".searchText")
var searchArray = JSON.parse(localStorage.getItem("searchArray"));


//ID TAGGED TO A UL WITH LI'S STORED INSIDE. THIS IS DATA FOR PREVIOUS SEARCH RESULTS TO GO BACK TO BY CLICKING ON.
// var previousData = document.querySelector('#previousData')





//api call example?
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

search.addEventListener("click", function (e) {
  e.preventDefault();


  // var newLi = document.createElement("li");
  // newLi.textContent = searchTextEl.value;
  // console.log(prevSearchUlEl);
  // console.log(newLi);

  // newLi.addEventListener("click", function (liEvent, parent) {
  //   searchTextEl.value = liEvent.srcElement.textContent;
  //   getWeatherAPI();
  // });
  // prevSearchUlEl.appendChild(newLi);

  //thus is where to store history


  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apiKey}&units=imperial`
  )
    .then((res) => res.json(res))
    .then((currentData) => {
      console.log(currentData);
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${apiKey}&units=imperial`
      )
        .then((res) => res.json())
        .then((fiveData) => {
          console.log(fiveData);

          dashboard.innerHTML = `  
            <h3 class="fs-1">${currentData.name} ${moment(
            currentData.dt,
            "X"
          ).format(
            "(MM/DD/YYYY)"
          )} <img src="http://openweathermap.org/img/wn/${currentData.weather[0].icon
            }@2x.png" >    </h3>
            <ul class="fs-3 list-inline">
              <li>Temp:${currentData.main.temp}</li>
              <li>Wind:${currentData.wind.speed}</li>
              <li>Humidity:${currentData.main.humidity}</li>
              <li>UV Index:${fiveData.current.uvi}</li>
            </ul>`;

          fiveday.innerHTML = `  <div
                class="col-sm-2 border border-dark border-2 bg-dark text-white rounded"
              >
                <h5>${moment(fiveData.daily[1].dt, "X").format("(MM/DD/YYYY)")} </h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/${fiveData.daily[1].weather[0].icon}@2x.png" />
                  </li>
                  <li>Temp:${fiveData.daily[1].temp.day}</li>
                  <li>Wind:${fiveData.daily[1].wind_speed}</li>
                  <li>Humidity:${fiveData.daily[1].humidity}</li>
                </ul>
              </div>
             <div
                class="col-sm-2 border border-dark border-2 bg-dark text-white rounded ms-4 mt-2"
              >
                <h5>${moment(fiveData.daily[2].dt, "X").format("(MM/DD/YYYY)")}</h5>

                <ul class="list-inline">
                 <img src="http://openweathermap.org/img/wn/${fiveData.daily[2].weather[0].icon}@2x.png" />
                  </li>
                  <li>Temp:${fiveData.daily[2].temp.day}</li>
                  <li>Wind:${fiveData.daily[2].wind_speed}</li>
                  <li>Humidity:${fiveData.daily[2].humidity}</li>
                </ul>
              </div>
               <div
                class="col-sm-2 border border-dark border-2 bg-dark text-white rounded ms-4 mt-2"
              >
                <h5>${moment(fiveData.daily[3].dt, "X").format("(MM/DD/YYYY)")}</h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/${fiveData.daily[3].weather[0].icon}@2x.png" />
                  </li>
                  <li>Temp:${fiveData.daily[3].temp.day}</li>
                  <li>Wind:${fiveData.daily[3].wind_speed}</li>
                  <li>Humidity:${fiveData.daily[3].humidity}</li>
                </ul>
              </div>
               <div
                class="col-sm-2 border border-dark border-2 bg-dark text-white rounded ms-4 mt-2"
              >
                <h5>${moment(fiveData.daily[4].dt, "X").format("(MM/DD/YYYY)")}</h5>

                <ul class="list-inline">
                 <img src="http://openweathermap.org/img/wn/${fiveData.daily[4].weather[0].icon}@2x.png" />
                  </li>
                  <li>Temp:${fiveData.daily[4].temp.day}</li>
                  <li>Wind:${fiveData.daily[4].wind_speed}</li>
                  <li>Humidity:${fiveData.daily[4].humidity}</li>
                </ul>
              </div>
               <div
                class="col-sm-2 border border-dark border-2 bg-dark text-white rounded ms-4 mt-2"
              >
                <h5>${moment(fiveData.daily[5].dt, "X").format("(MM/DD/YYYY)")}</h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/${fiveData.daily[5].weather[0].icon}@2x.png" />
                  </li>
                  <li>Temp:${fiveData.daily[5].temp.day}</li>
                  <li>Wind:${fiveData.daily[5].wind_speed}</li>
                  <li>Humidity:${fiveData.daily[5].humidity}</li>
                </ul>
              </div>
           `;
        });
    });
});
