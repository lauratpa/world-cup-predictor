import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Logout extends React.Component {
  handleLogout = () => {
    const { onUpdateCurrentUser } = this.props;

    axios
      .delete("/users/sign_out.json", {})
      .then(response => {
        if (response.status === 204) {
          onUpdateCurrentUser(null);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

Logout.propTypes = {
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Logout;
