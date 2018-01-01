import * as G from '../../constants';

/**
 * @return {*} action
 */
function actionLoading() {
  return {
    type: G.GALLERY_LOADING,
  };
}

/**
 * @return {*} action
 */
function actionDefaultGallery(json) {
  return {
    type: G.GALLERY_DEFAULT,
    json,
  };
}

/**
 *
 * @param {string} keyword
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
 * @param {string} category
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
    dispatch(actionLoading());

    fetch(G.apiPhotos())
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(actionDefaultGallery(json));
      })
      .catch((exception) => {
        console.log('throw', exception);
      });
  };
}
