import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/pics/DefaultPage';

describe('pics/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      pics: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.pics-default-page').length
    ).toBe(1);
  });
});
