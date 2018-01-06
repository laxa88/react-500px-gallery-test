import React from 'react';
import 'jest';
import 'enzyme';

import Gallery from './gallery';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Gallery', () => {
  test('Can render', () => {
    const wrapper = shallow(
      <Gallery
        photos={[
          {id: 1, image_url: 'dummyUrl1', name: 'item 1'},
          {id: 2, image_url: 'dummyUrl2', name: 'item 2'},
          {id: 3, image_url: 'dummyUrl3', name: 'item 3'},
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Shows message when no photos are provided', () => {
    const wrapper = shallow(
      <Gallery
        photos={null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
