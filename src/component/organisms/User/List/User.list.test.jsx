import {shallow} from 'enzyme';
import UserList from './Userlist';
import React from 'react';
it('should render loading state initially', () => {
  const props = {
    loading: true
  };
  const wrapper = shallow(<UserList {...props} />);
  expect(wrapper.find('div').length).toEqual(2);
  expect(wrapper.text()).toMatch('Loading');
});

it('should render error', () => {
  const props = {
    error: true
  };
  const wrapper = shallow(<UserList {...props} />);
  expect(wrapper.find('div').length).toEqual(2);
  expect(wrapper.text()).toMatch('Error');
});
it('should render data', () => {
  const props = {
    data: {
      search: {
        userCount: 1,
        edges: [{
          node: {
            login: 'test',
            avatarUrl: 'http://',
            commitComments: {
              edges: [{
                node: {
                  createdAt: '00-00-00',
                  bodyText: 'bodyTextTest'
                }
              }]
            }
          }
        }]
      }
    }
  };
  const wrapper = shallow(<UserList {...props} />);
  expect(wrapper.find('h3').text()).toEqual('Total number: 1');
  expect(wrapper.find('img').props().src).toEqual('http://');
  expect(wrapper.find('img').props().height).toEqual(50);
  expect(wrapper.find('p').text()).toEqual('00-00-00 - bodyTextTest');
});
