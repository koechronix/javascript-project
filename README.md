# Weather-App
This is Weather Application using OpenWeatherMap API
As a user, I can;
-Get current weather report by either typing the name of the city
and it will display current weather at that time for the city searched.

## Demo

-Follow this gif video link

https://drive.google.com/file/d/1Dq49SJIJml5scGeZkmy1o5jfegp71k_h/view?usp=sharing

N.B you need to refresh the page to view for other countries 

## Usage/Examples

-How To Run On JSON Server

-Steps;
-Have   JSON server, extention from google Chrome  browser

https://api.openweathermap.org/data/2.5/weather?q={City Name}&appid={API key}
where; {City Name = Name of your city you intent to such}
       {API key = an API KEY generated from OpenWeatherMap}

       Here is an example from json server, its for country Kenya 
// https://api.openweathermap.org/data/2.5/weather?q=kenya&appid={API key}
(API key cannot be shared publicly)


{
  "coord": {
    "lon": 38,
    "lat": 1
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 299.56,
    "feels_like": 299.56,
    "temp_min": 299.56,
    "temp_max": 299.56,
    "pressure": 1015,
    "humidity": 43,
    "sea_level": 1015,
    "grnd_level": 938
  },
  "visibility": 10000,
  "wind": {
    "speed": 7.3,
    "deg": 162,
    "gust": 7.5
  },
  "clouds": {
    "all": 1
  },
  "dt": 1656055142,
  "sys": {
    "country": "KE",
    "sunrise": 1656041097,
    "sunset": 1656084940
  },
  "timezone": 10800,
  "id": 192950,
  "name": "Kenya",
  "cod": 200
}


- Also in my weather application you can run live on your browser
  though this steps;1.Open My Weather-App
                    2.Right click and go to the option (Inpect) you will see all all details.

## Link to OpenWeatherMap
-https://openweathermap.org/current

## Authors

- [@koechronix](https://www.github.com/koechronix)
