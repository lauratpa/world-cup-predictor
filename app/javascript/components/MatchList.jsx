import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Header } from "semantic-ui-react";
import MatchItem from "./MatchItem";

class MatchList extends React.Component {
  renderMatches() {
    const { matches, countries } = this.props;

    return matches.map(match => (
      <MatchItem key={match.id} match={match} countries={countries} />
    ));
  }

  render() {
    return (
      <Container text>
        <Header>Matches</Header>
        <Card.Group>{this.renderMatches()}</Card.Group>
      </Container>
    );
  }
}

MatchList.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object),
  countries: PropTypes.arrayOf(PropTypes.object)
};

MatchList.defaultProps = {
  matches: [],
  countries: []
};

export default MatchList;
