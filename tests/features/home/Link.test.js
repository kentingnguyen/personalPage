import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Link />);
  expect(renderedComponent.find('.home-link').length).toBe(1);
});
