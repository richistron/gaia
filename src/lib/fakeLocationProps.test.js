import fakeLocationProps from './fakeLocationProps.js';

it('fakeLocationProps', () => {
  expect(fakeLocationProps.location).toEqual({pathname: '/'});
  expect(typeof fakeLocationProps.history.push).toBe('function');
});
