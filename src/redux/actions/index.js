import * as G from '../../constants';

/**
 * @return {*} action
 */
function actionDefaultGallery() {
  return {
    type: G.GALLERY_DEFAULT,
  };
}

/**
 *
 * @param {*} keyword
 * @return {*} action
 */
function actionSearchByKeyword(keyword) {
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
function actionSearchByCategory(category) {
  return {
    type: G.SEARCH_CATEGORY,
    category,
  };
}

/**
 * @return {*}
 */
export function loadDefaultGallery() {
  return (dispatch) => {
    dispatch(actionDefaultGallery());
  };
}
