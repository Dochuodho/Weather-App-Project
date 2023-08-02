
const boxSearch = document.querySelector(".searchCity input");
const buttonSearch = document.querySelector(".searchCity button");
const icon = document.querySelector(".icon")

//Declaring the API key and API Url
let apiKey= "0da1b2c6148eea77db878584a3f04e72";
let apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//displaying the data in JSON format
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //displaying the error message
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    //else display the data
    }else{
    var data = await response.json();

    console.log(data);

    //Updating our values according to data that is coming from the API
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";//To roundoff the temperature

    if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    }
    
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    
    

}
   
}

buttonSearch.addEventListener("click", ()=>{
    checkWeather(boxSearch.value);
})
