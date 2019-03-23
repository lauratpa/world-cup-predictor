import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import MatchContent from "./MatchContent";
import MatchHeader from "./MatchHeader";

class MatchItem extends React.Component {
  findCountry(id) {
    const { countries } = this.props;

    return countries.find(country => country.id === id);
  }

  render() {
    const { match } = this.props;

    return (
      <Card fluid key={match.id}>
        <MatchHeader kickOff={match.attributes.kickOff} />
        <MatchContent
          homeTeam={this.findCountry(match.relationships.homeTeam.data.id)}
          awayTeam={this.findCountry(match.relationships.awayTeam.data.id)}
        />
      </Card>
    );
  }
}

MatchItem.propTypes = {
  match: PropTypes.shape({ id: PropTypes.string }).isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MatchItem;
