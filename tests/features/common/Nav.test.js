import React from 'react';
import { shallow } from 'enzyme';
import { Nav, Linker } from '../../../src/features/common';


it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Nav />);
  expect(renderedComponent.find('.common-nav').length).toBe(1);
});


describe("Linker", () => {
  const renderedComponent = shallow(<Linker />);
expect(renderedComponent.html()).toEqual("");

});
