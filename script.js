function searchCity(){
var city = document.getElementById("city").value
var apiKey = "378576e029da0c8c2b9ad196519798cf"
var queryUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
$.ajax({
      url: queryUrlToday,
      method: "GET",
  }).then(function(res) { 
     document.getElementById("current").textContent= "Current City : " + res.name
     document.getElementById("temp").textContent = "Current Temp : " + Math.floor(res.main.temp) +  " °F"
     document.getElementById("wind").textContent = "Current Wind Speed : " + res.wind.speed + " mph"
     document.getElementById("humidity").textContent = "The Humidity : " + res.main.humidity + "%"
     document.getElementById("weather").textContent = "Current Weather : " + res.weather[0].description
  });
  forecast();
}
 
function forecast(){
var city = "London"
var apiKeyFore = "378576e029da0c8c2b9ad196519798cf"
var queryUrl ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" +apiKeyFore

$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(res){
    console.log(res)
    for(var i = 0 ; i < 5 ; i++){
        document.getElementById("day-" + (i +  1).toString() ).textContent = "Date/Time : " + res.list[i * 8].dt_txt
        document.getElementById("weather-" + (i +  1).toString()).src = "http://openweathermap.org/img/w/" + res.list[i * 8].weather[0].icon + ".png"
        document.getElementById("temp-" + (i +  1).toString()).textContent = "Temp : " + Math.floor(((res.list[i * 8].main.temp - 273.15) * 9/5 + 32)).toString() + " °F"
        document.getElementById("hum-" + (i +  1).toString()).textContent = "Humidity : " +  res.list[i * 8].main.humidity
    }

})


}
