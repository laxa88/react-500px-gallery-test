import React from 'react';
import 'jest';
import 'enzyme';

import SearchKeyword from './search-keyword';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('SearchKeyword', () => {
  test('can render', () => {
    const wrapper = shallow(
      <SearchKeyword
        onBlur={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('can trigger change and callback', () => {
    const callback = jest.fn();

    const wrapper = shallow(
      <SearchKeyword
        onBlur={callback}
      />
    );

    const expectedValue = 'dummyValue';

    wrapper.instance().handleChange({
      target: {value: expectedValue},
    });

    wrapper.instance().handleBlur();

    expect(callback).toBeCalledWith(expectedValue);
  });
});
