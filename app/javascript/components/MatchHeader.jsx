import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import moment from "moment";

class MatchHeader extends React.Component {
  constructor(props) {
    super(props);
    const { kickOff } = props;

    this.state = { fromNow: moment(kickOff).fromNow() };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const { kickOff } = this.props;

    this.setState({ fromNow: moment(kickOff).fromNow() });
  }

  render() {
    const { kickOff } = this.props;
    const { fromNow } = this.state;

    return (
      <Card.Header textAlign="center">
        {moment(kickOff).format("LLL")} - {fromNow}
      </Card.Header>
    );
  }
}

MatchHeader.propTypes = {
  kickOff: PropTypes.string.isRequired
};

export default MatchHeader;
