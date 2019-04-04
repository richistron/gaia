import {combineReducers} from './index.js';

it('combineReducers', () => {
  const reducers = combineReducers({
    foo: (state, action) => ({
      panchito: action && action.type === 'foo' ? true : false
    })
  });
  expect(typeof reducers)
    .toEqual('function');
  expect(reducers().foo)
    .toEqual({panchito: false});
  expect(reducers({}, {type: 'foo'}).foo)
    .toEqual({panchito: true});
});
