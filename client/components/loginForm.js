import React, { Component } from 'react';
import AuthForm from './authForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/loginUser';
import query from '../queries/fetchUserQuery';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
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
          query
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
          formName="Login"
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
