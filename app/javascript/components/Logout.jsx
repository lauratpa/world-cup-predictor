import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Logout extends React.Component {
  handleLogout = () => {
    const { onUpdateCurrentUser } = this.props;

    axios
      .delete("/api/logout", {})
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
