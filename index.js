async function getWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=d2852281c0784679afb162740260405&q=Goa&aqi=yes`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

getWeather();