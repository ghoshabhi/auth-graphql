import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <h3>{this.props.formName}</h3>
        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
            placeholder="Email"
              value={this.state.email}
              onChange={(e) => {this.setState({email: e.target.value})}}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={(e) => {this.setState({password: e.target.value})}}
            />
          </div>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    );
  }
}

AuthForm.propTypes = {
  formName: React.PropTypes.string
}

export default AuthForm;

