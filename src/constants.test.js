import 'jest';
import * as C from './constants';

describe('constants.js', () => {
  [
    {
      description: 'Returns base URL',
      categories: null,
      page: null,
      expected: 'https://api.500px.com/v1/photos?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92',
    },
    {
      description: 'Returns URL for one category',
      categories: ['dummy category'],
      page: null,
      expected: 'https://api.500px.com/v1/photos?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&only=dummy category',
    },
    {
      description: 'Returns URL for multiple categories',
      categories: ['category 1', 'category 2'],
      page: null,
      expected: 'https://api.500px.com/v1/photos?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&only=category 1,category 2',
    },
    {
      description: 'Returns URL for specific page',
      categories: null,
      page: 5,
      expected: 'https://api.500px.com/v1/photos?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&page=5',
    },
  ].forEach((config) => {
    test('apiPhotos: ' + config.description, () => {
      expect(C.apiPhotos(
        config.categories,
        config.page
      )).toBe(config.expected);
    });
  });

  [
    {
      description: 'Returns base URL',
      keyword: null,
      categories: null,
      page: null,
      expected: 'https://api.500px.com/v1/photos/search?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92',
    },
    {
      description: 'Returns URL for keyword',
      keyword: 'foo bar',
      categories: null,
      page: null,
      expected: 'https://api.500px.com/v1/photos/search?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&term=foo bar',
    },
    {
      description: 'Returns URL for one category',
      keyword: null,
      categories: ['dummy category'],
      page: null,
      expected: 'https://api.500px.com/v1/photos/search?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&only=dummy category',
    },
    {
      description: 'Returns URL for multiple categories',
      keyword: null,
      categories: ['category 1', 'category 2'],
      page: null,
      expected: 'https://api.500px.com/v1/photos/search?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&only=category 1,category 2',
    },
    {
      description: 'Returns URL for specific page',
      keyword: null,
      categories: null,
      page: 5,
      expected: 'https://api.500px.com/v1/photos/search?consumer_key=eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92&page=5',
    },
  ].forEach((config) => {
    test('apiPhotosSearch: ' + config.description, () => {
      expect(C.apiPhotosSearch(
        config.keyword,
        config.categories,
        config.page,
      )).toBe(config.expected);
    });
  });
});
