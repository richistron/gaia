import isArray from './isArray.js';

it('isArray smoke test', () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray('adfadf')).toBe(false);
});

