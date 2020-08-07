//$(document).ready(function () {


//This is the query for the openweatherAPI Phoenix
function query(location) {
    var apiKey = "19c30c0dab07e321f0f5bc97cbf8c46c";
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=" + apiKey


    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        console.log(temp)
        var temp = ("°F " + response.main.temp + "\n")
        var humid = (" " + response.main.humidity + "\n")
        var city = response.name
        currentweather(temp, humid, city)
    })
}


//This is a function to get the most popular cities
$(".popular").click(function () {
    let city = $(this).text()
    var search = query(city)
    console.log(search)
})


function currentweather(temp, humid, city, date) {
    $(".city").empty();
    $(".city").append(city);
    $(".city").append("  ")
    console.log("Name of the city: " + city)

    $(".humidity").empty();
    $(".humidity").append(" ")
    $(".humidity").append(humid);
    $(".humidity").append(" ")
    console.log("Humidity: " + humid)

    $(".date").empty();
    $(".date").append(" ")

    $(".temp").empty();
    $(".temp").append(temp);
    $(".temp").append(" ")
    console.log("This is the current temp: " + temp)
}

//This should handle the click from the search
$(".search-bar").on('click', function () {
    event.preventDefault()
    var search = $(".btn").val();
    query(search)
})
