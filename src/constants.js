const API_BASE = 'https://api.500px.com/v1/';
const EP_PHOTOS = 'photos';
const EP_SEARCH = 'photos/search';
const CONSUMER_KEY = 'eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92';

/**
 * @param {*} categories
 * @return {string}
 */
function getCategoriesAsQueryParams(categories) {
  let result = '';

  if (categories && categories.length > 0) {
    const categoryString = categories.reduce((acc, curr) => {
      return acc + ',' + curr;
    });
    result += '&only=' + categoryString;
  }

  return result;
}

/**
 * @param {*} categories
 * @param {*} page
 * @return {string}
 */
export function apiPhotos(categories, page) {
  const result =
    API_BASE +
    EP_PHOTOS +
    '?consumer_key=' + CONSUMER_KEY +
    ((page) ? '&page=' + page : '') +
    getCategoriesAsQueryParams(categories);

  return result;
};

/**
 * @param {*} keyword
 * @param {*} categories
 * @param {*} page
 * @return {string}
 */
export function apiPhotosSearch(keyword, categories, page) {
  const result =
    API_BASE +
    EP_SEARCH +
    '?consumer_key=' + CONSUMER_KEY +
    ((keyword) ? '&term=' + keyword : '') +
    ((page) ? '&page=' + page : '') +
    getCategoriesAsQueryParams(categories);

  return result;
}

export const SET_KEYWORD = 'SET_KEYWORD';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const GALLERY_LOADING = 'GALLERY_LOADING';
export const GALLERY_LOADED = 'GALLERY_LOADED';

export const DEFAULT = 'DEFAULT';
export const SEARCH = 'SEARCH';
