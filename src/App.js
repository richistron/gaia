import AppContext from './AppContext';
import HomePage from './components/pages/HomePage.js';
import Navigation from './components/organisms/Navigation';
import React, {useReducer, useEffect} from 'react';
import reducers from './reducers';
import {HashRouter as Router, Route} from 'react-router-dom';

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
      <Router basename={'/'} >
        <Navigation />

        <div className={'container'}>
          <Route path='/' exact component={HomePage} />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
