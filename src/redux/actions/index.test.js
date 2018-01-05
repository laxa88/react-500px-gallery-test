import 'jest';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';

configure({adapter: new Adapter()});

const mockStore = configureStore([thunk]);

describe('redux actions', () => {
  test('setSearchKeyword dispatches event', () => {
    const store = mockStore();
    store.dispatch(actions.setSearchKeyword('foo'));
    expect(store.getActions()).toEqual([{
      type: 'SET_KEYWORD',
      keyword: 'foo',
    }]);
  });

  test('setCategory dispatches event', () => {
    const store = mockStore();
    store.dispatch(actions.setCategory('foo', 123));
    expect(store.getActions()).toEqual([{
      type: 'SET_CATEGORY',
      category: 'foo',
      value: 123,
    }]);
  });

  [
    {
      description: 'returns pageNumber',
      pageNumber: 123,
      expected: 123,
    },
    {
      description: 'null pageNumber defaults to 1',
      pageNumber: null,
      expected: 1,
    },
    {
      description: 'negative pageNumber defaults to 1',
      pageNumber: -5,
      expected: 1,
    },
  ].forEach((config) => {
    test('setPageNumber dispatches event: ' + config.description, () => {
      const store = mockStore();
      store.dispatch(actions.setCategory('foo', 123));
      expect(store.getActions()).toEqual([{
        type: 'SET_CATEGORY',
        category: 'foo',
        value: 123,
      }]);
    });
  });
});
