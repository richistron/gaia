import './setupTest.js';
import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

it('should have a HashRouter', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('HashRouter').length).toBe(1);
});

it('should have a Navigation', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('withRouter(Navigation)').length).toBe(1);
});
