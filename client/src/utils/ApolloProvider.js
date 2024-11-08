import React from 'react';
import { ApolloProvider as Provider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({ uri: '/graphql', credentials: 'same-origin' }),
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => <Provider client={client}>{children}</Provider>;

export default ApolloProvider;
