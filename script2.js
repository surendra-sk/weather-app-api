
const countrylistelement = document.querySelector("#country-list");
const search = document.querySelector(".search");
let city = [];




const url1 =
  "https://referential.p.rapidapi.com/v1/city?lang=en&name=";
const options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4a1715bf8cmsh279cb6df86f479bp111dbajsn3d4422c47bf7",
    "X-RapidAPI-Host": "referential.p.rapidapi.com",
  },
};
async function getcity(value) {
    
    try {
      const response = await fetch(url1+value, options1);
        const result = await response.json();
      city = result.map((x) => x.key);
      city.sort();
      // console.log(city);
      // loaddata(city,countrylistelement);
      const filteredCities = city.filter(
        (item) =>
          item.substring(0, 3).toLowerCase() ===
          value.substring(0, 3).toLowerCase()
      );
      loaddata(filteredCities, countrylistelement);
    
    } catch (error) {
      // console.error(error);
    }
}
function loaddata(data, element) {
    if (data) {
        element.innerHtml = " ";
        let innerElement = " ";
        data.forEach((item) => {
          innerElement += `<li onclick=selectinput(this)>${item.toLowerCase()}</li>`;
            
        });

        element.innerHTML = innerElement;
    }
}


function selectinput(item) {
  searchbox.value = item.innerHTML;
  countrylistelement.innerHTML = "";
}


searchbox.addEventListener("keyup", () => {
  
  getcity(searchbox.value.toLowerCase());
})

