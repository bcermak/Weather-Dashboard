var currentWeather = $("#currentWeather");
var forecast = $("#forecast");

var apiKey = "caa60dd5de89e3436e69161b817e42cb";

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
        
        $("#currentTemp").html("Current Temp (F): " + currentTempF.toFixed(2) + "&#176;");
        $("#currentHumidity").append(" Humidity: " + response.main.humidity + "%");
        $("#currentWind").append(" Humidity: " + response.wind.speed + " MPH ");
    
    })
    
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + apiKey;
    
    $.ajax({
        url: forecastURL,
        method: "get"
    }).then(function(response) {
    
        for (var i = 0; i++;) {
            response.list[i]
            console.log(response.list[i])
            var currentDate = response.list[i].dt_txt
            console.log(currentDate)
        }
    var futureTempF1 = (response.list[i].main.temp_max - 275.15) * 1.80 + 32;
    var lowTempF1 = (response.list[i].main.temp_min - 275.15) * 1.80 + 32;

    $("#forecast1").html(response.list[i].dt_txt);
    $("#forecast1").append("<p>High: " + futureTempF1.toFixed(2) + "&#176;");
    $("#forecast1").append("<p>Low: " + lowTempF1.toFixed(2) + "&#176;");

    var futureTempF2 = (response.list[i+7].main.temp_max - 275.15) * 1.80 + 32;
    var lowTempF2 = (response.list[i+7].main.temp_min - 275.15) * 1.80 + 32;  

    $("#forecast2").html(response.list[i+7].dt_txt);
    $("#forecast2").append("<p>High: " + futureTempF2.toFixed(2) + "&#176;");
    $("#forecast2").append("<p>Low: " + lowTempF2.toFixed(2) + "&#176;");

    var futureTempF3 = (response.list[i+14].main.temp_max - 275.15) * 1.80 + 32; 

    $("#forecast3").html(response.list[i+14].dt_txt);
    $("#forecast3").append("<p>High: " + futureTempF3.toFixed(2) + "&#176;");

    var futureTempF4 = (response.list[i+21].main.temp_max - 275.15) * 1.80 + 32;

    $("#forecast4").html(response.list[i+21].dt_txt);
    $("#forecast4").append("<p>High: " + futureTempF4.toFixed(2) + "&#176;");

    var futureTempF5 = (response.list[i+28].main.temp_max - 275.15) * 1.80 + 32;

    $("#forecast5").html(response.list[i+28].dt_txt);
    $("#forecast5").append("<p>High: " + futureTempF5.toFixed(2) + "&#176;");




    })
  });


