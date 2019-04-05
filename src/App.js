import {AppState} from './AppContext';
import MapPage from './components/pages/MapPage.js';
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
          <Route path='/map' exact component={MapPage} />
        </div>
      </Router>
    </AppState>
  );
};

export default App;
