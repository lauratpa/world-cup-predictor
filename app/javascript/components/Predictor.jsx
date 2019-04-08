import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import Title from "./Title";
import MatchList from "./MatchList";
import HeaderMenu from "./HeaderMenu";

class Predictor extends React.Component {
  state = {
    matches: null,
    countries: null
  };

  componentDidMount() {
    axios
      .get("/api/matches", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("abc")).accessToken
        }
      })
      .then(response =>
        this.setState({
          matches: response.data.data,
          countries: response.data.included
        })
      )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { matches, countries } = this.state;
    const { email, onUpdateCurrentUser } = this.props;

    if (matches === null) return null;

    return (
      <Container>
        <HeaderMenu email={email} onUpdateCurrentUser={onUpdateCurrentUser} />
        <Title />
        <MatchList matches={matches} countries={countries} />
      </Container>
    );
  }
}

Predictor.propTypes = {
  email: PropTypes.string.isRequired,
  onUpdateCurrentUser: PropTypes.func.isRequired
};

export default Predictor;
