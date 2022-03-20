var search = document.querySelector("#searchForm");
var wind = document.querySelector(".windspeed");
var temp = document.querySelector(".temp");
var cityname = document.querySelector("#cityName");
var image = document.querySelector(".image");
var dashboard = document.querySelector("#dashboard");
var apiKey = "4cf84f97761ef4ad3d872af26897cfb0";

var fiveday = document.querySelector("#fiveDay");

//api call example?
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

search.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apiKey}&units=imperial`
  )
    .then((res) => res.json(res))
    .then((currentData) => {
      console.log(currentData);
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=4cf84f97761ef4ad3d872af26897cfb0&units=imperial`
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
                class="col-sm-2 border border-dark border-2 bg-info text-white rounded"
              >
                <h5>${moment(fiveData.daily[1].dt, "X").format("(MM/DD/YYYY)")} </h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/10d@2x.png" />
                  </li>
                  <li>Temp: 65</li>
                  <li>Wind: too fast!</li>
                  <li>Humidity: to wet!</li>
                </ul>
              </div>
             <div
                class="col-sm-2 border border-dark border-2 bg-info text-white rounded ms-4"
              >
                <h5>3/19/2022</h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/10d@2x.png" />
                  </li>
                  <li>Temp: 65</li>
                  <li>Wind: too fast!</li>
                  <li>Humidity: to wet!</li>
                </ul>
              </div>
               <div
                class="col-sm-2 border border-dark border-2 bg-info text-white rounded ms-4"
              >
                <h5>3/19/2022</h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/10d@2x.png" />
                  </li>
                  <li>Temp: 65</li>
                  <li>Wind: too fast!</li>
                  <li>Humidity: to wet!</li>
                </ul>
              </div>
               <div
                class="col-sm-2 border border-dark border-2 bg-info text-white rounded ms-4"
              >
                <h5>3/19/2022</h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/10d@2x.png" />
                  </li>
                  <li>Temp: 65</li>
                  <li>Wind: too fast!</li>
                  <li>Humidity: to wet!</li>
                </ul>
              </div>
               <div
                class="col-sm-2 border border-dark border-2 bg-info text-white rounded ms-4"
              >
                <h5>3/19/2022</h5>

                <ul class="list-inline">
                  <img src="http://openweathermap.org/img/wn/10d@2x.png" />
                  </li>
                  <li>Temp: 65</li>
                  <li>Wind: too fast!</li>
                  <li>Humidity: to wet!</li>
                </ul>
              </div>
           `;
        });
    });
});
