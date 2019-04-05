import uiReducer from './uiReducer';

it('default state', () => {
  expect(uiReducer()).toEqual({
    zoom: 25,
  });
});

it('ZOOM_IN', () => {
  const state = uiReducer();
  expect(state.zoom).toBe(25);
  expect(uiReducer(state, {type: 'ZOOM_IN'}).zoom).toBe(50);
});

it('ZOOM_OUT', () => {
  const state = uiReducer();
  expect(state.zoom).toBe(25);
  expect(uiReducer(state, {type: 'ZOOM_OUT'}).zoom).toBe(0);
});
