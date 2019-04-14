import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleSignup = () => {
    const { name, email, password, passwordConfirmation } = this.state;
    const { onUpdateCurrentUser } = this.props;

    axios
      .post("/users", {
        user: {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation
        }
      })
      .then(response => {
        if (response.status === 201) {
          onUpdateCurrentUser(response.data.name);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handlePasswordConfirmationChange = e => {
    this.setState({ passwordConfirmation: e.target.value });
  };

  render() {
    const { name, email, password, passwordConfirmation } = this.state;

    return (
      <div>
        <h2>Signup</h2>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={this.handleEmailChange}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={this.handlePasswordChange}
        />
        <input
          type="text"
          value={passwordConfirmation}
          placeholder="password confirmation"
          onChange={this.handlePasswordConfirmationChange}
        />
        <button type="submit" onClick={this.handleSignup}>
          Submit
        </button>
      </div>
    );
  }
}

SignUp.propTypes = {
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default SignUp;
