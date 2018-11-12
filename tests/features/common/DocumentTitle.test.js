import React from 'react';
import { shallow } from 'enzyme';
import { DocumentTitle } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DocumentTitle />);
  expect(renderedComponent.find('.common-document-title').length).toBe(1); 
});
