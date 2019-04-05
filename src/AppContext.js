import React from 'react';
import reducers from './reducers';

const AppContext = React.createContext({});

export const AppState = props => {
  const [state, dispatch] = React.useReducer(reducers, {});
  const val = {
    state,
    dispatch
  };
  return (
    <AppContext.Provider value={val}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
