import {MockedProvider} from '@apollo/react-testing';
import {render} from '@testing-library/react';
import React from 'react';
import UserSearch from './UserSearch';
import findUseQuery from './user-search.graphql';
it('should render loading state initially',  () => {
  const mocks = [{
    request: {
      query: findUseQuery,
      variables: {
        userName: 'abc'
      }
    },
    result: {
      loading: true
    }
  }];
  const {container} = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserSearch />
    </MockedProvider>
  );

  expect(container.getElementsByTagName('h3')[0].innerHTML).toEqual('Search for user information');
});
it('should render error', () => {

});
test('it should render user search with results', () => {

});
