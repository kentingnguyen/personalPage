import {
  BLOG_NEXT_PAGE,
} from '../../../../src/features/blog/redux/constants';

import {
  nextPage,
  reducer,
} from '../../../../src/features/blog/redux/nextPage';

describe('blog/redux/nextPage', () => {
  it('returns correct action by nextPage', () => {
    expect(nextPage()).toHaveProperty('type', BLOG_NEXT_PAGE);
  });

  it('handles action type BLOG_NEXT_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_NEXT_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
