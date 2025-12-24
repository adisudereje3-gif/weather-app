const searchInput = document.querySelector(".search_area");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector(".image");
const weatherCondition = document.querySelector(".condition p:nth-child(2)");
const tempElement = document.querySelector(".temp p");
const cityElement = document.querySelector(".time_location p:nth-child(1)");
const dateElement = document.querySelector(".time_location p:nth-child(2)");


const apiKey = "d59870497cd64066a1b203444252412";

async function checkWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);

        if (!response.ok) {
            alert("ከተማው አልተገኘም! እባክዎ እንደገና ይሞክሩ።");
            return;
        }

        const data = await response.json();

        cityElement.innerHTML = data.location.name;
        dateElement.innerHTML = data.location.localtime;
        tempElement.innerHTML = Math.round(data.current.temp_c) + "°C";
        weatherCondition.innerHTML = data.current.condition.text;
        
        const iconUrl = data.current.condition.icon;
        weatherIcon.src = "https:" + iconUrl;

        
        weatherIcon.style.width = "100px";
        weatherIcon.style.height = "100px";

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (searchInput.value.trim() !== "") {
        checkWeather(searchInput.value);
    }
});

checkWeather("Addis Ababa");