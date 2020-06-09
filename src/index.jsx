import {hot} from 'react-hot-loader/root';
import React from 'react';
import {render} from 'react-dom';
import App from './container/App/App';
import createClient from './service/apollo.client';
import {ApolloProvider} from '@apollo/react-hooks';
const HotApp = hot(App);

const client = createClient(process.env.GITHUB_TOKEN);

export const mount = async function () {
  render(
    <ApolloProvider client={client}>
      <HotApp JSON={JSON} />
    </ApolloProvider>,
    document.getElementById('root')
  );
};

mount();

