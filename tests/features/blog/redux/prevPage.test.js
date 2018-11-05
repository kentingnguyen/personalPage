import {
  BLOG_PREV_PAGE,
} from '../../../../src/features/blog/redux/constants';

import {
  prevPage,
  reducer,
} from '../../../../src/features/blog/redux/prevPage';

describe('blog/redux/prevPage', () => {
  it('returns correct action by prevPage', () => {
    expect(prevPage()).toHaveProperty('type', BLOG_PREV_PAGE);
  });

  it('handles action type BLOG_PREV_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_PREV_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
