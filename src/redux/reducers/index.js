import * as G from '../../constants';

/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*} new state
 */
function counter(state = {}, action) {
  switch (action.type) {
    case G.SEARCH_KEYWORD: {
      return {
        ...state,
        keyword: action.keyword,
      };
    }

    case G.SEARCH_CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }

    default: {
      return state;
    }
  }
}

export default counter;
