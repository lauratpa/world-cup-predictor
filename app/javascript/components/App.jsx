import React from "react";
import Predictor from "./Predictor";
import Welcome from "./Welcome";
import { Message } from "semantic-ui-react";

const accessTokenName = "abc";

class App extends React.Component {
  state = {
    storage: JSON.parse(localStorage.getItem(accessTokenName)) || {}
  };

  handleUpdateCurrentUser = name => {
    const newStorage = { name };

    localStorage.setItem(accessTokenName, JSON.stringify(newStorage));
    this.setState({ storage: newStorage });
  };

  render() {
    const { storage } = this.state;
    const { name } = storage;

    if (name) {
      return (
        <div>
          <Predictor
            email={name}
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
