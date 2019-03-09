import React from 'react';
import axios from 'axios';
import Header from './Header';
import MatchList from './MatchList';

class Predictor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: null,
      countries: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/matches.json')
      .then(response => this.setState(
        { matches: response.data.data, countries: response.data.included }
      ))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { matches, countries } = this.state;
    if (matches === null) return null;

    return (
      <div>
        <Header />
        <MatchList matches={matches} countries={countries} />
      </div>
    );
  }
}

export default Predictor;
