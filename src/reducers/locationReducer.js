const initialState = {
  lat: 0,
  lng: 0,
};

const locationReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'SET_LOCATION': {
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };
    }

    default:
      return state;
  }
};

export default locationReducer;
