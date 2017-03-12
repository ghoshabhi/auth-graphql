import gql from 'graphql-tag';

export default gql`
  mutation SignUp($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;
