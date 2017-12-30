/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*} new state
 */
function counter(state = {}, action) {
  switch (action.type) {
    case 'SEARCH_KEYWORD': {
      return {
        ...state,
        searchKeyword: true,
      };
    }

    case 'SEARCH_CATEGORY': {
      return {
        ...state,
        searchCategory: true,
      };
    }

    default: {
      return state;
    }
  }
}

export default counter;
