import * as G from '../../constants';

/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*} new state
 */
function counter(state = {
  galleryType: G.DEFAULT,
  pageNumber: 1,
  categories: [],
  keyword: '',
  isLoading: false,
  galleryJson: {},
}, action) {
  switch (action.type) {
    case G.SET_KEYWORD: {
      return {
        ...state,
        keyword: action.keyword,
      };
    }

    case G.SET_CATEGORY: {
      let categories = JSON.parse(JSON.stringify(state.categories));

      const index = categories.indexOf(action.category);
      if (action.value === true) {
        (index === -1) && categories.push(action.category);
      } else {
        (index !== -1) && categories.splice(index, 1);
      }

      return {
        ...state,
        categories,
      };
    }

    case G.SET_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    }

    case G.GALLERY_LOADING: {
      return {
        ...state,
        galleryType: action.galleryType,
        isLoading: true,
      };
    }

    case G.GALLERY_LOADED: {
      return {
        ...state,
        isLoading: false,
        galleryJson: action.json,
      };
    }

    // Note: GALLERY_FAILED is not handled for now
    default: {
      return state;
    }
  }
}

export default counter;
