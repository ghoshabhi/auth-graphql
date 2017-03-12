import React, { Component } from 'react';
import { graphql } from 'react-apollo';
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
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
