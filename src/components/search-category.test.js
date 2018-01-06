import React from 'react';
import 'jest';
import 'enzyme';

import SearchCategory from './search-category';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const before = [
  {id: 0, key: 'Uncategorized', value: false},
  {id: 10, key: 'Abstract', value: false},
  {id: 29, key: 'Aerial', value: false},
  {id: 11, key: 'Animals', value: false},
  {id: 5, key: 'Black and White', value: false},
  {id: 1, key: 'Celebrities', value: false},
  {id: 9, key: 'City and Architecture', value: false},
  {id: 15, key: 'Commercial', value: false},
  {id: 16, key: 'Concert', value: false},
  {id: 20, key: 'Family', value: false},
  {id: 14, key: 'Fashion', value: false},
  {id: 2, key: 'Film', value: false},
  {id: 24, key: 'Fine Art', value: false},
  {id: 23, key: 'Food', value: false},
  {id: 3, key: 'Journalism', value: false},
  {id: 8, key: 'Landscapes', value: false},
  {id: 12, key: 'Macro', value: false},
  {id: 18, key: 'Nature', value: false},
  {id: 30, key: 'Night', value: false},
  {id: 4, key: 'Nude', value: false},
  {id: 7, key: 'People', value: false},
  {id: 19, key: 'Performing Arts', value: false},
  {id: 17, key: 'Sport', value: false},
  {id: 6, key: 'Still Life', value: false},
  {id: 21, key: 'Street', value: false},
  {id: 26, key: 'Transportation', value: false},
  {id: 13, key: 'Travel', value: false},
  {id: 22, key: 'Underwater', value: false},
  {id: 27, key: 'Urban Exploration', value: false},
  {id: 25, key: 'Wedding', value: false},
];

const expected = [
  {id: 0, key: 'Uncategorized', value: true},
  {id: 10, key: 'Abstract', value: false},
  {id: 29, key: 'Aerial', value: false},
  {id: 11, key: 'Animals', value: false},
  {id: 5, key: 'Black and White', value: false},
  {id: 1, key: 'Celebrities', value: false},
  {id: 9, key: 'City and Architecture', value: false},
  {id: 15, key: 'Commercial', value: false},
  {id: 16, key: 'Concert', value: false},
  {id: 20, key: 'Family', value: false},
  {id: 14, key: 'Fashion', value: false},
  {id: 2, key: 'Film', value: false},
  {id: 24, key: 'Fine Art', value: false},
  {id: 23, key: 'Food', value: false},
  {id: 3, key: 'Journalism', value: false},
  {id: 8, key: 'Landscapes', value: false},
  {id: 12, key: 'Macro', value: false},
  {id: 18, key: 'Nature', value: false},
  {id: 30, key: 'Night', value: false},
  {id: 4, key: 'Nude', value: false},
  {id: 7, key: 'People', value: false},
  {id: 19, key: 'Performing Arts', value: false},
  {id: 17, key: 'Sport', value: false},
  {id: 6, key: 'Still Life', value: false},
  {id: 21, key: 'Street', value: false},
  {id: 26, key: 'Transportation', value: false},
  {id: 13, key: 'Travel', value: false},
  {id: 22, key: 'Underwater', value: false},
  {id: 27, key: 'Urban Exploration', value: false},
  {id: 25, key: 'Wedding', value: false},
];

describe('SearchCategory', () => {
  test('can render', () => {
    const wrapper = shallow(
      <SearchCategory
        onChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('filter toggle will show categories', () => {
    const wrapper = shallow(
      <SearchCategory
        onChange={jest.fn()}
      />
    );

    wrapper.instance().handleFilterToggle({target: {checked: true}});

    expect(wrapper).toMatchSnapshot();
  });

  test('checking a category triggers state change and callback', () => {
    const wrapper = shallow(
      <SearchCategory
        onChange={jest.fn()}
      />
    );

    expect(wrapper.state().categories).toEqual(before);

    wrapper.instance().handleCategoryCheck({
      target: {name: '0', checked: true},
    });

    expect(wrapper.state().categories).toEqual(expected);
  });

  test('handles checking a category that doesn\'t exist', () => {
    const wrapper = shallow(
      <SearchCategory
        onChange={jest.fn()}
      />
    );

    expect(wrapper.state().categories).toEqual(before);

    wrapper.instance().handleCategoryCheck({
      target: {name: 'invalidId', checked: true},
    });

    expect(wrapper.state().categories).toEqual(before);
  });
});
