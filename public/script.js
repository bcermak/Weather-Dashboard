var current = $("#current");
var forecast = $("#forecast");

var cityInput = $("#cityInput")

var apiKey = "caa60dd5de89e3436e69161b817e42cb";

forecast.hidden();

$( "#submitCity" ).click(function(e) {
    e.preventDefault();
    
    var cityInput = $("#cityInput").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function(response) {
    
        console.log(queryURL);
        console.log(response);
        var currentTempF = (response.main.temp - 273.15) * 1.80 + 32;
        
        $("#current1").html("Current " + response.name + " Weather:");
        $("#currentTemp").html("Temp (F): " + currentTempF.toFixed(2) + "&#176;");
        $("#currentHumidity").html(" Humidity: " + response.main.humidity + "%");
        $("#currentWind").html(" Wind: " + response.wind.speed + " MPH ");
      
    })
    
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + apiKey;
    
    $.ajax({
        url: forecastURL,
        method: "get"
    }).then(function(response) {
    
        for (var i = 0; i++;) {
            response.list[i]
            console.log(response.list[i])
            var currentDate = response.list[i].dt_txt;
            console.log(currentDate);
        }


    var futureTempF1 = (response.list[i].main.temp_max - 275.15) * 1.80 + 32;



    $("#forecast1").html(response.list[i].dt_txt);
    $("#forecast1").append("<p>Forecasted Temp:" + futureTempF1.toFixed(2) + "&#176;");


    var futureTempF2 = (response.list[i+7].main.temp_max - 275.15) * 1.80 + 32;


    $("#forecast2").html(response.list[i+7].dt_txt);
    $("#forecast2").append("<p>Forecasted Temp: " + futureTempF2.toFixed(2) + "&#176;");


    var futureTempF3 = (response.list[i+14].main.temp_max - 275.15) * 1.80 + 32; 


    $("#forecast3").html(response.list[i+14].dt_txt);
    $("#forecast3").append("<p>Forecasted Temp: " + futureTempF3.toFixed(2) + "&#176;");


    var futureTempF4 = (response.list[i+21].main.temp_max - 275.15) * 1.80 + 32;


    $("#forecast4").html(response.list[i+21].dt_txt);
    $("#forecast4").append("<p>Forecasted Temp: " + futureTempF4.toFixed(2) + "&#176;");
    

    var futureTempF5 = (response.list[i+28].main.temp_max - 275.15) * 1.80 + 32;

        
    $("#forecast5").html(response.list[i+28].dt_txt);
    $("#forecast5").append("<p>Forecasted Temp: " + futureTempF5.toFixed(2) + "&#176;");

   
    });
 
  });




 
