import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchUserQuery';

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isAuthenticated: false
    // }
  }

  // componentDidMount() {
  //   if (this.props.data.user){
  //     this.setState({
  //       isAuthenticated: true,
  //     });
  //   }
  // }

  renderButtons() {
    const {
      loading,
      user
    } = this.props.data;

    if (loading) {
      return <div/>;
    }
    if (user) {
      return <div>Logout</div>;
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Singup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    // const {
    //   isAuthenticated
    // } = this.state;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);
