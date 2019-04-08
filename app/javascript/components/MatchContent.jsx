import React from "react";
import PropTypes from "prop-types";
import { Input, Card, Icon, Grid, Image } from "semantic-ui-react";
import "./MatchContent.css";

const MatchContent = ({ homeTeam, awayTeam }) => (
  <Card.Content>
    <Grid textAlign="center" columns={7}>
      <Grid.Row>
        <Grid.Column width={4}>
          {homeTeam.attributes.name}
          <Image
            src={`/img/flags/${homeTeam.attributes.code}.svg`}
            floated="right"
            avatar
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input type="number" min={0} max={99} />
          <Icon className="score-dash" fitted name="minus" />
          <Input type="number" min={0} max={99} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image
            src={`/img/flags/${awayTeam.attributes.code}.svg`}
            floated="left"
            avatar
          />
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
