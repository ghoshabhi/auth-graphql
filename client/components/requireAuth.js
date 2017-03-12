import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router'
import fetchUser from '../queries/fetchUserQuery';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user){
        hashHistory.push('/login');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(fetchUser)(RequireAuth);
};
