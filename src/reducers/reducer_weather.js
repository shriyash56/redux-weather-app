export default function (state = {}, action) {
  switch (action.type) {
    case "FETCHED_WEATHER":
      return { ...state, weatherData: action.payload, loading: false };

    case "LOADING":
      return { ...state, loading: !action.loading };

    case "ISLOGGED":
      return { ...state, IsLogged: !action.IsLogged };

    default:
      return state;
  }
}
