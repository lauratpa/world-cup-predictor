import React from "react";
import Predictor from "./Predictor";
import Welcome from "./Welcome";

const accessTokenName = "abc";

class App extends React.Component {
  state = {
    accessToken: JSON.parse(localStorage.getItem(accessTokenName)).accessToken,
    email: JSON.parse(localStorage.getItem(accessTokenName)).email
  };

  handleUpdateCurrentUser = (email, accessToken) => {
    localStorage.setItem(
      accessTokenName,
      JSON.stringify({ email, accessToken })
    );
    this.setState({ email });
    this.setState({ accessToken });
  };

  render() {
    const { accessToken, email } = this.state;

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
