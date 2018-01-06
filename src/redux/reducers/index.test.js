import 'jest';
import counter from './index';
import * as C from '../../constants';

const initialState = {
  galleryType: C.DEFAULT,
  pageNumber: 1,
  categories: [],
  keyword: '',
  isLoading: false,
  galleryJson: {},
};

describe('redux reducers', () => {
  [
    {
      description: 'returns initial state',
      state: undefined, // Note: null does not cause default value to be assigned to state parameter.
      action: {},
      expected: initialState,
    },
    {
      description: 'returns state for ' + C.SET_KEYWORD,
      state: initialState,
      action: {
        type: C.SET_KEYWORD,
        keyword: 'dummy keyword',
      },
      expected: Object.assign({}, initialState, {
        keyword: 'dummy keyword',
      }),
    },
    {
      description: 'returns added state for ' + C.SET_CATEGORY,
      state: Object.assign({}, initialState, {
        categories: [
          'category 1',
          'category 2',
        ],
      }),
      action: {
        type: C.SET_CATEGORY,
        category: 'category 3',
        value: true,
      },
      expected: Object.assign({}, initialState, {
        categories: [
          'category 1',
          'category 2',
          'category 3',
        ],
      }),
    },
    {
      description: 'returns removed state for ' + C.SET_CATEGORY,
      state: Object.assign({}, initialState, {
        categories: [
          'category 1',
          'category 2',
        ],
      }),
      action: {
        type: C.SET_CATEGORY,
        category: 'category 1',
        value: false,
      },
      expected: Object.assign({}, initialState, {
        categories: [
          'category 2',
        ],
      }),
    },
    {
      description: 'returns state for ' + C.SET_PAGE_NUMBER,
      state: Object.assign({}, initialState, {
        pageNumber: 3,
      }),
      action: {
        type: C.SET_PAGE_NUMBER,
        pageNumber: 4,
      },
      expected: Object.assign({}, initialState, {
        pageNumber: 4,
      }),
    },
    {
      description: 'returns state for ' + C.GALLERY_LOADING,
      state: initialState,
      action: {
        type: C.GALLERY_LOADING,
        galleryType: C.SEARCH,
      },
      expected: Object.assign({}, initialState, {
        galleryType: C.SEARCH,
        isLoading: true,
      }),
    },
    {
      description: 'returns state for ' + C.GALLERY_LOADED,
      state: Object.assign({}, initialState, {
        isLoading: true,
      }),
      action: {
        type: C.GALLERY_LOADED,
        json: {dummyData: 999},
      },
      expected: Object.assign({}, initialState, {
        isLoading: false,
        galleryJson: {dummyData: 999},
      }),
    },
  ].forEach((config) => {
    test(config.description, () => {
      const result = counter(config.state, config.action);
      expect(result).toEqual(config.expected);
    });
  });
});
