// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_PREV_PAGE,
} from './constants';

export function prevPage() {
  return {
    type: BLOG_PREV_PAGE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_PREV_PAGE:
      return {
        ...state,
        page: state.page - 1
      };

    default:
      return state;
  }
}
