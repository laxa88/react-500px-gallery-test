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
function actionDefaultGallery() {
  return {
    type: G.GALLERY_DEFAULT,
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
        console.log('hello', response);
        return response.json();
      })
      .then((json) => {
        console.log('hello2', json);
        dispatch(actionDefaultGallery());
      })
      .catch((exception) => {
        console.log('throw', exception);
      });
  };
}
