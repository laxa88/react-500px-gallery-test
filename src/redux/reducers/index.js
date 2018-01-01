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
        loading: true,
      };
    }

    case G.GALLERY_DEFAULT: {
      return {
        ...state,
        loading: false,
        galleryJson: action.json,
      };
    }

    case G.SEARCH_KEYWORD: {
      return {
        ...state,
        loading: false,
        keyword: action.keyword,
      };
    }

    case G.SEARCH_CATEGORY: {
      return {
        ...state,
        loading: false,
        category: action.category,
      };
    }

    default: {
      return state;
    }
  }
}

export default counter;
