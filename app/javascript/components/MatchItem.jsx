import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Card } from "semantic-ui-react";
import MatchContent from "./MatchContent";
import PassiveMatchContent from "./PassiveMatchContent";
import MatchHeader from "./MatchHeader";

class MatchItem extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props;
    const { kickOff } = match;

    this.state = {
      kickOff,
      fromNow: moment(kickOff).fromNow()
    };
  }

  componentDidMount() {
    if (this.live()) {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  live() {
    const { kickOff } = this.state;

    return Date.now() < Date.parse(kickOff);
  }

  tick() {
    const { kickOff } = this.state;

    this.setState({ fromNow: moment(kickOff).fromNow() });
  }

  render() {
    const { match } = this.props;
    const { fromNow } = this.state;
    let content;

    if (this.live()) {
      content = <MatchContent match={match} />;
    } else {
      content = <PassiveMatchContent match={match} />;
    }

    return (
      <Card fluid key={match.id}>
        <MatchHeader kickOff={match.kickOff} fromNow={fromNow} />
        {content}
      </Card>
    );
  }
}

MatchItem.propTypes = {
  match: PropTypes.shape({ id: PropTypes.string }).isRequired
};

export default MatchItem;
