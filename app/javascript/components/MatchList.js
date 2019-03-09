import React from 'react';
import PropTypes from 'prop-types';

class MatchList extends React.Component {
  findCountry(id) {
    const { countries } = this.props;

    return countries.find(country => country.id == id)
  }

  renderMatches() {
    const { matches } = this.props;

    return matches.map(match => (
      <li key={match.id}>
        {this.findCountry(match.relationships.homeTeam.data.id).attributes.name}
        {' - '}
        {this.findCountry(match.relationships.awayTeam.data.id).attributes.name}
      </li>
    ));
  }

  render() {
    return (
      <section>
        <h2>Matches</h2>
        <ul>{this.renderMatches()}</ul>
      </section>
    );
  }
}

MatchList.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object),
};

MatchList.defaultProps = {
  matches: [],
};

export default MatchList;
