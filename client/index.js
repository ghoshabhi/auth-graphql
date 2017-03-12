import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './components/app';

const client = new ApolloClient({
  dataIdFromObject: o => o.id, //used to identify data by id to tell react which components to rerender
});

const Root = () => {
  return (
    <ApolloProvider client={client} >
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
