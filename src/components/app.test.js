import React from 'react';
import 'jest';
import 'enzyme';
import App from './app';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as C from '../constants';

configure({adapter: new Adapter()});

const mockStore = configureStore();

describe('App', () => {
  test('Can render', () => {
    const wrapper = shallow(
      <App store={mockStore({
        galleryType: C.DEFAULT,
        pageNumber: 1,
        categories: [],
        keyword: '',
        isLoading: false,
        galleryJson: {},
      })}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
