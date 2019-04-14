import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Button } from "semantic-ui-react";

class Logout extends React.Component {
  handleLogout = () => {
    const { onUpdateCurrentUser } = this.props;

    axios
      .delete("/logout", {})
      .then(response => {
        if (response.status === 200) {
          onUpdateCurrentUser(null, null);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Button type="submit" onClick={this.handleLogout}>
        Logout
      </Button>
    );
  }
}

Logout.propTypes = {
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Logout;
