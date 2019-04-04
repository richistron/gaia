import React, {useReducer, useEffect} from 'react';
import AppContext from './AppContext';
import reducers from './reducers'

const App = () => { 
  const [state, dispatch] = useReducer(reducers, {});

  useEffect(() => {
    dispatch({type: '@@INIT'});
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <div> new app </div>
    </AppContext.Provider>
  );
};

export default App;
