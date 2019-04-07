import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
// import SignUp from "./SignUp";
import Login from "./Login";

const Welcome = props => {
  const { onUpdateCurrentUser } = props;

  return (
    <Container>
      <h1>Welcome</h1>
      {/* <SignUp onUpdateCurrentUser={this.props.onUpdateCurrentUser} /> */}
      <Login onUpdateCurrentUser={onUpdateCurrentUser} />
    </Container>
  );
};

Welcome.propTypes = {
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Welcome;
