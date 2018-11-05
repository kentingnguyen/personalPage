import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Nav />);
  expect(renderedComponent.find('.common-nav').length).toBe(1);
});
