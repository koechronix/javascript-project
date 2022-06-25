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
  