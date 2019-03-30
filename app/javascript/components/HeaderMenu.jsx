import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import Logout from "./Logout";

class HeaderMenu extends React.Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <div>{currentUser}</div>
        <Logout onUpdateCurrentUser={this.props.onUpdateCurrentUser} />
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  currentUser: PropTypes.string.isRequired,
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default HeaderMenu;
