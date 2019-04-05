import {AppState} from './AppContext';
import HomePage from './components/pages/HomePage.js';
import Navigation from './components/organisms/Navigation';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <AppState>
      <Router basename={'/'} >
        <Navigation />

        <div className={'container'}>
          <Route path='/' exact component={HomePage} />
        </div>
      </Router>
    </AppState>
  );
};

export default App;
