import placesReducer from './placesReducer.js';

const reducers = (state = {}, action = {}) => {
  return {
    places: placesReducer(state.places, action),
  };
};


export default reducers;
