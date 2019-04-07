import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { onUpdateCurrentUser } = this.props;

    axios
      .post("/api/login", {
        user: {
          email,
          password
        }
      })
      .then(response => {
        if (response.status === 200) {
          onUpdateCurrentUser(email, response.data.auth_token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>Login</h2>
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
        <button type="submit" onClick={this.handleLogin}>
          Submit
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Login;
