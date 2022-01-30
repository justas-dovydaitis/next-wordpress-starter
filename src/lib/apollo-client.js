import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

import { removeLastTrailingSlash } from 'lib/util';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    const token = process.env.WORDPRESS_AUTH_REFRESH_TOKEN;

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
    // Call the next link in the middleware chain.
    return forward(operation);
  });

  const httpLink = new HttpLink({
    uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
