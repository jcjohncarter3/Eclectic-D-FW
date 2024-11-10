
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client'; // Ensure you import from the correct package
import { ApolloClient, InMemoryCache } from '@apollo/client'; // Import Apollo Client and cache

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', 
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);