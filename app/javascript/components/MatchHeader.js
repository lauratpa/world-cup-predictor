import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import moment from "moment";

const MatchHeader = ({ kickOff }) => (
  <Card.Header textAlign="center">{moment(kickOff).format("LLL")}</Card.Header>
);

MatchHeader.propTypes = {
  kickOff: PropTypes.string.isRequired
};

export default MatchHeader;
