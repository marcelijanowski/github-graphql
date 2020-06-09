import {MockProvider} from '@apollo/react-testing';
import {render} from '@testing-library/react';
import React from 'react';
import UserSearch from './UserSearch';
import findUseQuery from './user-search.graphql';
it('should render loading state initially', () => {
  const mocks = [{
    request: {
      query: findUseQuery,
      variables: {
        userName: 'abc'
      }
    },
    result: {
      data: {}
    }
  }];
  const component = render(
    <MockProvider mocks={mocks} addTypename={false}>
      <UserSearch />
    </MockProvider>
  );
  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});
it('should render error', () => {

});
test('it should render user search with results', () => {

});
