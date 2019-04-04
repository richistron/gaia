import React, {useReducer, useEffect} from 'react';
import AppContext from './AppContext';
import reducers from './reducers';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Navigation from './components/organisms/Navigation';

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
          <Route path='/' exact component={Home} />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
