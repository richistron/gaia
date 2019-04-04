import '../../setupTest.js';
import React from 'react';
import Page from './Page';
import {shallow} from 'enzyme';

it('className .page', () => {
  const wrapper = shallow(<Page />);
  expect(wrapper.hasClass('page')).toBe(true);
});

it('should render children', () => {
  const wrapper = shallow(<Page ><div>yolo</div></Page>);
  expect(wrapper.props().children).toEqual(<div>yolo</div>);
});
