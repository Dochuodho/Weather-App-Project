let apiKey= "0da1b2c6148eea77db878584a3f04e72";
let apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nairobi";
//displaying in JSON format
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    //Updating our values according to data that is coming from the API


}

checkWeather()