import "./App.css";
import { Outlet } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  uri: "/graphql", // Adjust this if necessary
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
