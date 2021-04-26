export const fetchWeather = (city) => ({
  type: "FETCH_WEATHER",
  city
});

export const checkLogged = () => ({
  type: "ISLOGGED",
  IsLogged: false
});

export const loading = () => ({
  type: "LOADING",
  loading: true
});
