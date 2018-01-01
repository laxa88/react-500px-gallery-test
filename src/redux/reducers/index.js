import * as G from '../../constants';

/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*} new state
 */
function counter(state = {}, action) {
  switch (action.type) {
    case G.GALLERY_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case G.GALLERY_DEFAULT: {
      return {
        ...state,
        isLoading: false,
        galleryJson: action.json,
      };
    }

    case G.SEARCH_KEYWORD: {
      return {
        ...state,
        isLoading: false,
        keyword: action.keyword,
      };
    }

    case G.SEARCH_CATEGORY: {
      return {
        ...state,
        isLoading: false,
        category: action.category,
      };
    }

    default: {
      return state;
    }
  }
}

export default counter;
