import * as G from '../../constants';

/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*} new state
 */
function counter(state = {
  isLoading: false,
  categories: [],
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
