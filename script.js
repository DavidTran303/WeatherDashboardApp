$( document ).ready(function() {
    console.log( "ready!" );
//global variables
var location = 0;

//document.id to display information on card of each city
document.getElementById("card-1").textContent
document.getElementById("card-2").textContent
document.getElementById("card-3").textContent
document.getElementById("card-4").textContent
document.getElementById("card-5").textContent






    //search button click on
    document.getElementById("searchBtn").addEventListener("click", function(city){

    var apiKey = "378576e029da0c8c2b9ad196519798cf"
    var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + city + apiKey



    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(reponse) {
        console.log(reponse)
    })
    
    //temperature
    var tempKel //temp kelvin
    var tempFar = ((tempKel - 273.15) *1.8 + 32).toFixed(); //temp far formula

    $(".city").text("City: " + reponse.name);
    $(".wind").text("The current wind speend in " + city + "is at " + reponse.wind.speed);
    $(".temp").text("The temperature is at " + tempFar + "Fahrenheit");
    $(".humanity").text("The current humaidity is " + reponse.main.humidity);

    saveCity();
    });

//save button
function saveCity() {
  // Use JSON.parse() to convert text to JavaScript object
  var location = JSON.parse(localStorage.getItem("city"));
  // Check if data is returned, if not exit out of the function
  if (saveCity !== null) {
    event.preventDefault;
    location++;
    localStorage.setItem("city", location);
    localStorage.setItem()

  } else {
    return;
  }
};

saveButton.addEventListener("click", function(event){
event.preventDefault();
saveCity();

});
