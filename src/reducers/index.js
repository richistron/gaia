import placesReducer from './placesReducer.js';

export const combineReducers = (reducers = {}) => {
  return (...args) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](...args);
    }
    return newState;
  };
};

export default combineReducers({
  places: placesReducer,
});
