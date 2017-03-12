import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  dataIdFromObject: o => o.id, //used to identify data by id to tell react which components to rerender
});

const Root = () => {
  return (
    <ApolloProvider client={client} >
      <div>
        Auth Starter
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
