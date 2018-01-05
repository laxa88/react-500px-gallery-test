import React from 'react';
import 'jest';
import 'enzyme';

import Button from './button';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Button', () => {
  test('Can render', () => {
    const wrapper = shallow(
      <Button
        onClick={jest.fn()}
        label="button label"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
