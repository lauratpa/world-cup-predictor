import React from "react";
import PropTypes from "prop-types";
import { Input, Card, Flag, Icon, Grid } from "semantic-ui-react";

const MatchContent = ({ homeTeam, awayTeam }) => (
  <Card.Content>
    <Grid textAlign="center" columns={7}>
      <Grid.Row>
        <Grid.Column width={4}>
          {homeTeam.attributes.name}
          <Flag name={homeTeam.attributes.code} />
        </Grid.Column>
        <Grid.Column width={2}>
          <Input fluid type="number" min={0} max={99} />
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon fitted name="futbol" />
        </Grid.Column>
        <Grid.Column width={2}>
          <Input fluid type="number" min={0} max={99} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Flag name={awayTeam.attributes.code} />
          {awayTeam.attributes.name}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Content>
);

MatchContent.propTypes = {
  homeTeam: PropTypes.shape({ id: PropTypes.string }).isRequired,
  awayTeam: PropTypes.shape({ id: PropTypes.string }).isRequired
};

export default MatchContent;
