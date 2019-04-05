import uiReducer from './uiReducer.js';
import locationReducer from './locationReducer.js';

export const combineReducers = (reducers = {}) => {
  return (state = {}, action = {}) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](( state[key]), action);
    }
    return newState;
  };
};

export default combineReducers({
  ui: uiReducer,
  location: locationReducer,
});
