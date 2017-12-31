import * as G from '../../constants';

/**
 * @return {*} action
 */
export function loadDefaultGallery() {
  return {
    type: G.GALLERY_DEFAULT,
  };
}

/**
 *
 * @param {*} keyword
 * @return {*} action
 */
export function searchByKeyword(keyword) {
  return {
    type: G.SEARCH_KEYWORD,
    keyword,
  };
}

/**
 *
 * @param {*} category
 * @return {*} action
 */
export function searchByCategory(category) {
  return {
    type: G.SEARCH_CATEGORY,
    category,
  };
}
