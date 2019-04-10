import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import MatchContent from "./MatchContent";
import MatchHeader from "./MatchHeader";

const MatchItem = props => {
  const { match } = props;

  return (
    <Card fluid key={match.id}>
      <MatchHeader kickOff={match.kickOff} />
      <MatchContent match={match} />
    </Card>
  );
};

MatchItem.propTypes = {
  match: PropTypes.shape({ id: PropTypes.string }).isRequired
};

export default MatchItem;
