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
    const baseUrl = window.location.origin;
    const api = new Kitsu({
      baseURL: baseUrl
    });

    api
      .get("/api/matches")
      .then(response => {
        this.setState({ matches: response.data });
      })
      .catch(error => {
        if (error.response.status === 401) {
          const { onUpdateCurrentUser } = this.props;

          onUpdateCurrentUser(null);
        }
      });
  }

  render() {
    const { matches } = this.state;
    const { userName, onUpdateCurrentUser } = this.props;

    if (matches === null) return null;

    return (
      <div>
        <HeaderMenu
          userName={userName}
          onUpdateCurrentUser={onUpdateCurrentUser}
        />
        <Container>
          <MatchList matches={matches} />
        </Container>
      </div>
    );
  }
}

Predictor.propTypes = {
  userName: PropTypes.string.isRequired,
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Predictor;
