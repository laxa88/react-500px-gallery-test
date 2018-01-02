const API_BASE = 'https://api.500px.com/v1/';
const EP_PHOTOS = 'photos';
const EP_SEARCH = 'photos/search';
const CONSUMER_KEY = 'eq0EBJISTn4tknXbI3Gwtp0aVOqFdxGxL8I7rP92';

/**
 *
 * @param {*} categories
 * @param {*} page
 * @param {*} rpp
 * @return {*}
 */
export function apiPhotos(categories, page, rpp) {
  const consumerKey = 'consumer_key=' + CONSUMER_KEY;
  let result = API_BASE + EP_PHOTOS + '?' + consumerKey;

  if (categories) {
    const categoryString = categories.reduce((acc, curr) => {
      return acc + ',' + curr;
    });
    result += '&only=' + categoryString;
  }

  return result;
};

export const SET_KEYWORD = 'SET_KEYWORD';
export const GALLERY_LOADING = 'GALLERY_LOADING';
export const GALLERY_LOADED = 'GALLERY_LOADED';
export const SEARCH = 'SEARCH';
