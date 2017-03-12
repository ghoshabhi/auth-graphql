import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from './authForm';
import mutation from '../mutations/singup';
import query from '../queries/fetchUserQuery';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [
        {
          query,
        }
      ]
    }).then(() => {
      this.setState({
        errors: [],
      });
    })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({
          errors
        });
     });
  }
  render() {
    return (
      <div>
        <AuthForm 
          formName="Sign Up"
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(SignupForm)
);
