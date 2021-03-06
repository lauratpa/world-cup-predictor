import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import Logout from "./Logout";

const HeaderMenu = props => {
  const { userName, onUpdateCurrentUser } = props;

  return (
    <Menu attached="top">
      <Menu.Item header>Women's World Cup Predictor</Menu.Item>
      <Menu.Item position="right">{userName}</Menu.Item>
      <Menu.Item>
        <Logout onUpdateCurrentUser={onUpdateCurrentUser} />
      </Menu.Item>
    </Menu>
  );
};

HeaderMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default HeaderMenu;
