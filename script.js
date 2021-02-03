function citySearch(){
  var city ="london"

  var apiKey = "378576e029da0c8c2b9ad196519798cf"

  var queryUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
  //weather data today
  $.ajax({
      url: queryUrlToday,
      method: "GET",
  }).then(function(res) {
      console.log(res)
    document.getElementById("current-city").innerHTML= "Current City: " + res.name

    document.getElementById("current-temp").textContent=Math.floor(res.main.temp) +  " °F"
  }) 
}

function weatherCast(){
  var apiKey = "378576e029da0c8c2b9ad196519798cf"

  var queryUrlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey

  //weather data forecast
  $.ajax({
      url: queryUrlForecast,
      method: "GET",
  }).then(function(res) {
      console.log(res.list[1].main.temp)
      document.getElementById("card-text-1").innerHTML = 5+6;
      // console.log(res.list[1].main.temp)
      // console.log(res.list[10].main.temp)
      // console.log(res.list[20].main.temp)
      // console.log(res.list[30].main.temp)
      // console.log(res.list[40].main.temp)


      // document.getElementById("card-text-1").textContent= "Temp : " + res.list[10].main.temp
      // // console.log(res.city)
  })
}



  

//save button
// function saveCity() {
// // Use JSON.parse() to convert text to JavaScript object
// var location = JSON.parse(localStorage.getItem("city"));
// // Check if data is returned, if not exit out of the function
// if (saveCity !== null) {
//   event.preventDefault;
//   location++;
//   localStorage.setItem("city", location);
//   localStorage.setItem()

// } else {
//   return;
// }
// };

// var saveButton = document.getElementById("saveBtn")
// saveButton.addEventListener("click", function(event){
// event.preventDefault();
// saveCity();
// })