import '../../setupTest.js';
import React from 'react';
import {shallow} from 'enzyme';
import Gmap from './Gmap';

it('smoke test', () => {
  const wrapper = shallow(<Gmap lat={0} lng={0} zoom={10} />);
  expect(wrapper.props().children.props.zoom).toBe(10);
  expect(wrapper.props().children.props.center).toEqual({lat: 0, lng: 0});
});

