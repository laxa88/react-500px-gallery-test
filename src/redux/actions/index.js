import * as G from '../../constants';

// Private action creators

/**
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
 * @param {string} category
 * @param {bool} value
 * @return {*}
 */
function actionSetCategory(category, value) {
  return {
    type: G.SET_CATEGORY,
    category,
    value,
  };
}

/**
 *
 * @param {*} pageNumber
 * @return {*}
 */
function actionSetPageNumber(pageNumber) {
  return {
    type: G.SET_PAGE_NUMBER,
    pageNumber,
  };
}

/**
 * @param {string} galleryType
 * @return {*} action
 */
function actionGalleryLoading(galleryType) {
  return {
    type: G.GALLERY_LOADING,
    galleryType,
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

/**
 * @param {*} exception
 * @return {*} action
 */
function actionError(exception) {
  return {
    type: G.GALLERY_FAIL,
    exception,
  };
}

// Helper methods

/**
 * @return {*}
 */
function handleResponse() {
  return (response) => {
    return response.json();
  };
}

/**
 * @param {*} dispatch
 * @return {*}
 */
function handleJsonData(dispatch) {
  return (json) => {
    dispatch(actionGalleryLoaded(json));
  };
}

/**
 * @param {*} dispatch
 * @return {*}
 */
function handleException(dispatch) {
  return (exception) => {
    dispatch(actionError(exception));
  };
}

// Public action methods

/**
 * @param {string} keyword
 * @return {*}
 */
export function setSearchKeyword(keyword) {
  return (dispatch) => {
    dispatch(actionSetSearchKeyword(keyword));
  };
}

/**
 * @param {string} category
 * @param {bool} value
 * @return {*}
 */
export function setCategory(category, value) {
  return (dispatch) => {
    dispatch(actionSetCategory(category, value));
  };
}

/**
 * @param {number} pageNumber
 * @return {*}
 */
export function setPageNumber(pageNumber) {
  return (dispatch) => {
    let actualPageNumber = pageNumber || 1;

    if (actualPageNumber < 1) {
      actualPageNumber = 1;
    }

    dispatch(actionSetPageNumber(actualPageNumber));
  };
}

/**
 * @param {string[]} categories
 * @param {number} page
 * @return {*}
 */
export function loadGallery(categories, page) {
  return (dispatch) => {
    dispatch(actionGalleryLoading(G.DEFAULT));

    return fetch(G.apiPhotos(categories, page))
      .then(handleResponse())
      .then(handleJsonData(dispatch))
      .catch(handleException(dispatch));
  };
}

/**
 * @param {string} keyword
 * @param {string[]} categories
 * @param {number} page
 * @return {*}
 */
export function searchGallery(keyword, categories, page) {
  return (dispatch) => {
    dispatch(actionGalleryLoading(G.SEARCH));

    return fetch(G.apiPhotosSearch(keyword, categories, page))
      .then(handleResponse())
      .then(handleJsonData(dispatch))
      .catch(handleException(dispatch));
  };
}
