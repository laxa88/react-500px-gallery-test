import 'jest';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';

configure({adapter: new Adapter()});

const mockStore = configureStore([thunk]);

global.fetch = require('jest-fetch-mock');

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
      store.dispatch(actions.setPageNumber(config.pageNumber));
      expect(store.getActions()).toEqual([{
        type: 'SET_PAGE_NUMBER',
        pageNumber: config.expected,
      }]);
    });
  });

  test('loadGallery dispatches and fetches data from API', () => {
    fetch.mockResponse(JSON.stringify({dummyData: 'foo'}));

    const store = mockStore();
    store.dispatch(actions.loadGallery([], 1))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            'galleryType': 'DEFAULT',
            'type': 'GALLERY_LOADING',
          },
          {
            'json': {'dummyData': 'foo'},
            'type': 'GALLERY_LOADED',
          },
        ]);
      });
  });

  test('loadGallery exception is handled', () => {
    fetch.mockReject({message: 'error message'});

    const store = mockStore();
    store.dispatch(actions.loadGallery([], 1))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            'galleryType': 'DEFAULT',
            'type': 'GALLERY_LOADING',
          },
          {
            'exception': {'message': 'error message'},
            'type': 'GALLERY_FAIL',
          },
        ]);
      });
  });

  test('searchGallery dispatches and fetches data from API', () => {
    fetch.mockResponse(JSON.stringify({dummyData: 'foo'}));

    const store = mockStore();
    store.dispatch(actions.searchGallery('', [], 1))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            'galleryType': 'SEARCH',
            'type': 'GALLERY_LOADING',
          },
          {
            'json': {'dummyData': 'foo'},
            'type': 'GALLERY_LOADED',
          },
        ]);
      });
  });

  test('searchGallery exception is handled', () => {
    fetch.mockReject({message: 'error message'});

    const store = mockStore();
    store.dispatch(actions.searchGallery('', [], 1))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            'galleryType': 'SEARCH',
            'type': 'GALLERY_LOADING',
          },
          {
            'exception': {'message': 'error message'},
            'type': 'GALLERY_FAIL',
          },
        ]);
      });
  });
});
