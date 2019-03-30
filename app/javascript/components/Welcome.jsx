import React from "react";
import { Container } from "semantic-ui-react";
import SignUp from "./SignUp";
import Login from "./Login";

class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <h1>Welcome</h1>
        <SignUp onUpdateCurrentUser={this.props.onUpdateCurrentUser} />
        <Login onUpdateCurrentUser={this.props.onUpdateCurrentUser} />
      </Container>
    );
  }
}

export default Welcome;
