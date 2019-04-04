import '../../setupTest.js';
import React from 'react';
import Row from './Row';
import {shallow} from 'enzyme';

it('className .row', () => {
  const wrapper = shallow(<Row />);
  expect(wrapper.hasClass('row')).toBe(true);
});

it('should have .col-12 class', () => {
  const wrapper = shallow(<Row />);
  expect(wrapper.find('.col-12').length).toBe(1);
});

it('children', () => {
  const wrapper = shallow(<Row>foo</Row>);
  expect(wrapper.html()).toMatch('foo');
});
