// const searchbox=document.getElementById('city').value;
const searchbox = document.querySelector(".search input");
console.log(searchbox);
const searchbtn = document.querySelector(".search button");
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4a1715bf8cmsh279cb6df86f479bp111dbajsn3d4422c47bf7",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};
async function checkwheather(city) {
  try {
    const response = await fetch(url + city, options);
    const result = await response.json();
    console.log(result);
    debugger;
    document.querySelector(".city").innerHTML = result.location.name;
    document.querySelector(".temp").innerHTML = result.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = result.current.humidity;
    document.querySelector(".wind").innerHTML = result.current.wind_kph;
  } catch (error) {
    console.error(error);
  }
}

searchbtn.addEventListener("click", () => {
  checkwheather(searchbox.value);
});
