function callApi(city) {
    const web = "http://api.openweathermap.org/data/2.5/weather";
    const key = "108cf238dd5beb2cab700ba003f03797";
    const url = `${web}?q=${city}&appid=${key}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const userData=data;
        displayProperty(userData);
      });
      
  }

  function getCityName() {
    const inputCity = document.getElementById("input-city").value;
    callApi(inputCity);
  }
 function displayProperty(dataAll){
    const cityName = dataAll.name;
    console.log(cityName);
    document.getElementById("location").innerText = cityName;
    const currentTemp= dataAll.main.temp;
    document.getElementById("current-temp").innerText = currentTemp;
    console.log(currentTemp);
    const skyType =dataAll['weather'][0]['description'];
    console.log(typeof(skyType));
    document.getElementById("lead").value = skyType;
 }