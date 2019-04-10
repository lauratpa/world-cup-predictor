import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import Kitsu from "kitsu";
import MatchList from "./MatchList";
import HeaderMenu from "./HeaderMenu";

class Predictor extends React.Component {
  state = {
    matches: null
  };

  componentDidMount() {
    const api = new Kitsu({
      baseURL: "http://localhost:3000"
    });

    api.headers.Authorization = JSON.parse(
      localStorage.getItem("abc")
    ).accessToken;

    api
      .get("/api/matches")
      .then(response => {
        this.setState({ matches: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { matches } = this.state;
    const { email, onUpdateCurrentUser } = this.props;

    if (matches === null) return null;

    return (
      <div>
        <HeaderMenu email={email} onUpdateCurrentUser={onUpdateCurrentUser} />
        <Container>
          <MatchList matches={matches} />
        </Container>
      </div>
    );
  }
}

Predictor.propTypes = {
  email: PropTypes.string.isRequired,
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Predictor;
