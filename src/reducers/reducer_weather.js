export default function (state = {}, action) {
  switch (action.type) {
    case "FETCHED_WEATHER":
      return { ...state, weatherData: action.payload, loading: false };

    case "LOADING":
      return { ...state, loading: true };

    case "ISLOGGED":
      return { ...state, IsLogged: !action.IsLogged };

    default:
      return state;
  }
}

/*
export default function(state = null, action){
  //this gets back the weather data
  console.log('Action received', action);

  return state;
}

.data - because that's what the API returns
we are showing multiple rows hence state is an array 
and the new state is added to the previous state
concat because pushing to the array would mutate the state
using ES6 syntax for concat using ...
*/
