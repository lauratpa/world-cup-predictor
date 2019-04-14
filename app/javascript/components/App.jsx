import React from "react";
import axios from "axios";
import Predictor from "./Predictor";
import Welcome from "./Welcome";

const storageName = "worldCupStorage";

class App extends React.Component {
  state = {
    storage: JSON.parse(sessionStorage.getItem(storageName)) || {}
  };

  componentDidMount() {
    this.tryToSetCurrentUser();
  }

  handleUpdateCurrentUser = name => {
    const newStorage = { userName: name };

    sessionStorage.setItem(storageName, JSON.stringify(newStorage));
    this.setState({ storage: newStorage });
  };

  tryToSetCurrentUser = () => {
    axios
      .get("/api/current_user", { withCredentials: true })
      .then(response => {
        if (response.status === 201) {
          this.handleUpdateCurrentUser(response.data.name);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { storage } = this.state;
    const { userName } = storage;

    if (userName) {
      return (
        <div>
          <Predictor
            userName={userName}
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
