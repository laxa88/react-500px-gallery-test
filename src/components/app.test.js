// Notes on shallow/mount differences:
// https://github.com/airbnb/enzyme/issues/465
// https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913

import React from 'react';
import 'jest';
import 'enzyme';

import App from './app';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';
import * as C from '../constants';

configure({adapter: new Adapter()});

const mockStore = configureStore([thunk]);

global.fetch = require('jest-fetch-mock');

const initialState = {
  galleryType: C.DEFAULT,
  pageNumber: 1,
  categories: [],
  keyword: '',
  isLoading: false,
  galleryJson: {},
};

describe('App', () => {
  test('can render', () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <App store={store} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('can mount with lifecycle methods', () => {
    const store = mockStore(initialState);

    mount(
      <App store={store} />
    );

    expect(store.getActions()).toEqual([
      {'galleryType': 'DEFAULT', 'type': 'GALLERY_LOADING'},
    ]);
  });

  [
    {
      description: 'loads default gallery by page number',
      state: Object.assign({}, initialState, {
        pageNumber: 3,
      }),
      expected: [
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
        {'type': 'SET_PAGE_NUMBER', 'pageNumber': 3},
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
      ],
    },
    {
      description: 'loads search gallery by page number',
      state: Object.assign({}, initialState, {
        galleryType: C.SEARCH,
        pageNumber: 3,
      }),
      expected: [
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
        {'type': 'SET_PAGE_NUMBER', 'pageNumber': 3},
        {'type': 'GALLERY_LOADING', 'galleryType': 'SEARCH'},
      ],
    },
    {
      description: 'does not load if already loading',
      state: Object.assign({}, initialState, {
        galleryType: C.SEARCH,
        pageNumber: 3,
        isLoading: true,
      }),
      expected: [
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
      ],
    },
  ].forEach((config) => {
    test('handleClickPage: ' + config.description, () => {
      const store = mockStore(config.state);

      const wrapper = shallow(
        <App store={store} />
      );

      // Need to dive() because App is wrapped by redux connect().
      // Calling dive() will trigger its lifecycle method.
      wrapper.dive().instance().handleClickPage(3);

      expect(store.getActions()).toEqual(config.expected);
    });
  });

  test('handleCheckCategory dispatches action', () => {
    const store = mockStore(initialState);

      const wrapper = shallow(
        <App store={store} />
      );

      wrapper.dive().instance().handleCheckCategory({
        key: 'dummyKey',
        value: 'dummyValue',
      });

      expect(store.getActions()).toEqual([
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
        {'type': 'SET_CATEGORY', 'category': 'dummyKey', 'value': 'dummyValue'},
      ]);
  });

  test('handleClickSearchButton dispatches action', () => {
    const store = mockStore(initialState);

      const wrapper = shallow(
        <App store={store} />
      );

      wrapper.dive().instance().handleClickSearchButton();

      expect(store.getActions()).toEqual([
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
        {'type': 'SET_PAGE_NUMBER', 'pageNumber': 1},
        {'type': 'GALLERY_LOADING', 'galleryType': 'SEARCH'},
      ]);
  });

  test('handleClickHomeButton dispatches action', () => {
    const store = mockStore(initialState);

      const wrapper = shallow(
        <App store={store} />
      );

      wrapper.dive().instance().handleClickHomeButton();

      expect(store.getActions()).toEqual([
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
        {'type': 'SET_PAGE_NUMBER', 'pageNumber': 1},
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
      ]);
  });

  [
    {
      description: 'dispatches action',
      state: Object.assign({}, initialState),
      keyword: 'dummy keyword',
      expected: [
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
        {'type': 'SET_KEYWORD', 'keyword': 'dummy keyword'},
      ],
    },
    {
      description: 'does not dispatch action for repeated keyword',
      state: Object.assign({}, initialState),
      keyword: initialState.keyword,
      expected: [
        {'type': 'GALLERY_LOADING', 'galleryType': 'DEFAULT'},
      ],
    },
  ].forEach((config) => {
    test('handleSetKeyword: ' + config.description, () => {
      const store = mockStore(initialState);

        const wrapper = shallow(
          <App store={store} />
        );

        wrapper.dive().instance().handleSetKeyword(config.keyword);

        expect(store.getActions()).toEqual(config.expected);
    });
  });
});
