import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { getAccessToken } from "./accessToken.ts";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphQl",
  credentials: "include",
});

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();

  console.log("accessToken");
  console.log(accessToken);
  if (accessToken) {
    operation.setContext({
      headers: {
        authorization: "Bearer " + accessToken,
      },
    });
  }

  return forward(operation);
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, httpLink]),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
