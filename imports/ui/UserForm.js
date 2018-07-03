import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

class UserForm extends Component {
  state = {
    login: true
  };
  render() {
    const { user, client } = this.props;
    const { login } = this.state;
    if (user._id) {
      return (
        <button
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          LogOut
        </button>
      );
    }
    return (
      <div>
        {login ? (
          <LoginForm client={client} />
        ) : (
          <RegisterForm client={client} />
        )}
        <button
          onClick={() => this.setState({ login: !login })}
        >
          {login ? 'Register' : 'Login'}
        </button>
      </div>
    );
  }
}

export default UserForm;
