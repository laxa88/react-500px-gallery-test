import * as G from '../../constants';

// Private action creators

/**
 * actionSetSearchKeyword
 * @param {string} keyword
 * @return {*}
 */
function actionSetSearchKeyword(keyword) {
  return {
    type: G.SET_KEYWORD,
    keyword,
  };
}

/**
 * @return {*} action
 */
function actionLoading() {
  return {
    type: G.GALLERY_LOADING,
  };
}

/**
 * @param {*} json
 * @return {*} action
 */
function actionDefaultGallery(json) {
  return {
    type: G.GALLERY_LOADED,
    json,
  };
}

// Public action methods

/**
 * setSearchKeyword
 * @param {string} keyword
 * @return {*}
 */
export function setSearchKeyword(keyword) {
  return (dispatch) => {
    dispatch(actionSetSearchKeyword(keyword));
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
