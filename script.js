//var location = $(".search-bar").attr("placeholder")


//This is the query for the openweatherAPI Phoenix
function query(location) {
    var apiKey = "b251b6b758e9775099f0a7a313ce857b";
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=" + apiKey


    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        var temp = (response.main.temp + "°F")
        var humid = (" " + response.main.humidity)
        var city = response.name
        currentweather(temp, humid, city)

        // queryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
        // console.log(queryUrl)

        // $.ajax({
        //     url: queryUrl,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response.name)
        // })


    })
}


//This is a function to get the most popular cities
$("a").click(function () {
    let city = $(this).text()
    var search = query(city)
    console.log(city)
})


function currentweather(temp, humid, city, date) {
    $(".city").empty();
    $(".city").append(city);
    $(".city").append("  ")
    console.log(city)

    $(".humidity").empty();
    $(".humidity").append(" ")
    $(".humidity").append(humid);
    $(".humidity").append(" ")
    console.log(humid)

    $(".date").empty();
    $(".date").append(" ")

    $(".temp").empty();
    $(".temp").append(temp);
    $(".temp").append(" ")
    console.log(temp)



}
