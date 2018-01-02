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
function actionGalleryLoading() {
  return {
    type: G.GALLERY_LOADING,
  };
}

/**
 * @param {*} json
 * @return {*} action
 */
function actionGalleryLoaded(json) {
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
 * loadGallery
 * @param {string[]} categories
 * @param {number} page
 * @return {*}
 */
export function loadGallery(categories, page) {
  return (dispatch) => {
    dispatch(actionGalleryLoading());

    fetch(G.apiPhotos(categories, page))
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(actionGalleryLoaded(json));
      })
      .catch((exception) => {
        console.log('throw', exception);
      });
  };
}

/**
 *
 * @param {string} keyword
 * @param {string[]} categories
 * @param {number} page
 * @return {*}
 */
export function searchGallery(keyword, categories, page) {
  return (dispatch) => {
    dispatch(actionGalleryLoading());
  };
}
