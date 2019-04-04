import '../../setupTest.js';
import React from 'react';
import {shallow} from 'enzyme';
import {TestNavigation} from './Navigation.js';
import fakeLocationProps from '../../lib/fakeLocationProps.js'

const props = {
  ...fakeLocationProps,
  isTest: true,
};

it('TestNavigation smoke test', () => {
  const wrapper = shallow(<TestNavigation {...props} />);
  expect(wrapper.find('nav').hasClass('sticky-top')).toBe(true);
  expect(wrapper.find('Link').hasClass('navbar-brand')).toBe(true);
  expect(wrapper.find('button').hasClass('navbar-toggler')).toBe(true);
});
