import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import moment from "moment";

const MatchHeader = props => {
  const { kickOff, fromNow } = props;

  return (
    <Card.Header textAlign="center">
      {moment(kickOff).format("LLL")} - {fromNow}
    </Card.Header>
  );
};

MatchHeader.propTypes = {
  kickOff: PropTypes.string.isRequired,
  fromNow: PropTypes.string.isRequired
};

export default MatchHeader;
