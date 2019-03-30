import React from "react";
import axios from "axios";
import Predictor from "./Predictor";
import Welcome from "./Welcome";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    axios
      .get("/api/current_user", {})
      .then(response => {
        console.log(response);

        if (response.data) {
          this.setState({
            currentUser: response.data.email
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleUpdateCurrentUser = email => {
    this.setState({
      currentUser: email
    });
  };

  render() {
    const { currentUser } = this.state;

    if (currentUser) {
      return (
        <div>
          <Predictor
            currentUser={currentUser}
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
