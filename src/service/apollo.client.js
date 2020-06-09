import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink, concat} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';

export default function createClient(token) {
  const uri = 'https://api.github.com/graphql';
  if (!token) {
    throw new Error('token was not provided');
  }
  const httpLink = new HttpLink({uri});
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return forward(operation);
  });
  return new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
  });
}
