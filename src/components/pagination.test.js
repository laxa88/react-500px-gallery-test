import React from 'react';
import 'jest';
import 'enzyme';

import Pagination from './pagination';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Pagination', () => {
  test('Can render', () => {
    const wrapper = shallow(
      <Pagination
        onClick={jest.fn()}
        page={1}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Can render range of pages', () => {
    const wrapper = shallow(
      <Pagination
        onClick={jest.fn()}
        page={10}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Calls onClick', () => {
    const callback = jest.fn();

    const wrapper = shallow(
      <Pagination
        onClick={callback}
        page={1}
      />
    );

    wrapper.instance().handleClick({target: {innerHTML: 10}});

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
