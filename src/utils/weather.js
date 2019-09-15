const API_KEY = "Ztr9I1kQ2Yy2BIHlLviGqEGmXWlhChir";

export async function fetchCityWeather(cityId, type) {
  const response = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/${type}/${cityId}?apikey=${API_KEY}&metric=true`,
    {
      mode: "cors",
      cache: "force-cache"
    }
  );
  const json = await response.json();
  return json;
}

export async function search(cityname) {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityname}`,
    {
      mode: "cors",
      cache: "force-cache"
    }
  );
  const json = await response.json();
  return json;
}
