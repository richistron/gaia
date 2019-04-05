import '../../setupTest.js';
import React from 'react';
import {shallow} from 'enzyme';
import MapPage from './MapPage.js';

it('MapPage smoke test', () => {
  const wrapper = shallow(<MapPage />);
  expect(wrapper.find('Page').length).toBe(1);
});
