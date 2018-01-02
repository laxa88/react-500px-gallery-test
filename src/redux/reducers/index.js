import * as G from '../../constants';

/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*} new state
 */
function counter(state = {}, action) {
  switch (action.type) {
    case G.SET_KEYWORD: {
      return {
        ...state,
        keyword: action.keyword,
      };
    }

    case G.GALLERY_LOADING: {
      return {
        ...state,
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

    default: {
      return state;
    }
  }
}

export default counter;
