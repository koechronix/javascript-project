const text = document.querySelector(".text");
const submitBtn = document.querySelector(".submit");

const contentBox = document.querySelector(".contentBox");

let city = document.querySelector(".city");
let description = document.querySelector(".description");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humi");
let icon = document.querySelector(".icon");

error = document.querySelector(".error");

let apiKey = "f3df101137850d0a96e0263ad269fdc4";

// kelvin to celsius
function conversion(val) {
    return (val - 273).toFixed(2);
  }

  submitBtn.addEventListener("click", () => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + text.value + "&appid=" + apiKey)
    .then((response) => {
      if (!response.ok) {
        contentBox.style.display = "none";
        alert("Check Your Spelling.");
        throw new Error("Check Your Spelling.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let nameValue = data["name"];
      let humidityValue = data["main"]["humidity"];
      let tempValue = data["main"]["temp"];
      let windValue = data["wind"]["speed"];
      let descValue = data["weather"][0]["description"];
      let iconValue = data["weather"][0]["icon"];

    //   city.innerHTML = `${nameValue}`;
    //   icon.src = "https://openweathermap.org/img/wn/" + iconValue + ".png";
    //   description.innerHTML = `Description: ${descValue}`;
    //   temp.innerHTML = `Temperature: ${conversion(tempValue)} °C`;
    //   humidity.innerHTML = `Humidity: ${humidityValue} %`;
    //   wind.innerHTML = `Wind Speed: ${windValue} km/hr`;
    //   contentBox.style.display = "block";
    //   error.style.display = "none";
    });
});
  