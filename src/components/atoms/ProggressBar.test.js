import '../../setupTest.js';
import React from 'react';
import {shallow} from 'enzyme';
import ProggressBar from './ProggressBar';

it('0% width', () => {
  const wrapper = shallow(<ProggressBar />);
  expect(wrapper.props().children.props.style.width).toBe('0%');
});

it('25% width', () => {
  const wrapper = shallow(<ProggressBar value={25} />);
  expect(wrapper.props().children.props.style.width).toBe('25%');
});
