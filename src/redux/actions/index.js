import * as G from '../../constants';

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
