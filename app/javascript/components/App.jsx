import React from "react";
import Predictor from "./Predictor";
import Welcome from "./Welcome";

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
    const { accessToken, email } = this.state.storage;

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

    return (
      <div>
        <Welcome onUpdateCurrentUser={this.handleUpdateCurrentUser} />
      </div>
    );
  }
}

export default App;
