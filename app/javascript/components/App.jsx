import React from "react";
import Predictor from "./Predictor";
import Welcome from "./Welcome";
import { Message } from "semantic-ui-react";

const accessTokenName = "abc";

class App extends React.Component {
  state = {
    storage: JSON.parse(localStorage.getItem(accessTokenName)) || {}
  };

  handleUpdateCurrentUser = (email, accessToken) => {
    const newStorage = { email, accessToken };

    localStorage.setItem(accessTokenName, JSON.stringify(newStorage));
    this.setState({ storage: newStorage });
  };

  render() {
    const { storage } = this.state;
    const { accessToken, email } = storage;

    if (accessToken && email) {
      return (
        <div>
          <Predictor
            email={email}
            onUpdateCurrentUser={this.handleUpdateCurrentUser}
          />
        </div>
      );
    }

    let warning;
    if (accessToken || email) {
      warning = (
        <Message warning>You have been logged out. Please login again.</Message>
      );
    }

    return (
      <div>
        {warning}
        <Welcome onUpdateCurrentUser={this.handleUpdateCurrentUser} />
      </div>
    );
  }
}

export default App;
