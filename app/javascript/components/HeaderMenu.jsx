import React from "react";
import PropTypes from "prop-types";
import Logout from "./Logout";

const HeaderMenu = props => {
  const { email, onUpdateCurrentUser } = props;

  return (
    <div>
      <div>{email}</div>
      <Logout onUpdateCurrentUser={onUpdateCurrentUser} />
    </div>
  );
};

HeaderMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default HeaderMenu;
