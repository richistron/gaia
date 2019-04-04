import '../../setupTest.js';
import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './HomePage.js';

it('HomePage smoke test', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper.find('Page').length).toBe(1);
});
