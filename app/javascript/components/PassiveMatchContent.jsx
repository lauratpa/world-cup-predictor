import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Grid, Icon, Image } from "semantic-ui-react";
import "./MatchContent.css";

class PassiveMatchContent extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;

    this.state = {
      homeTeam,
      awayTeam,
      homeTeamGoals: homeTeamGoals || "",
      awayTeamGoals: awayTeamGoals || ""
    };
  }

  render() {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = this.state;

    return (
      <Card.Content>
        <Grid textAlign="center" columns={7}>
          <Grid.Row>
            <Grid.Column width={4}>
              {homeTeam.name}
              <Image
                src={`/img/flags/${homeTeam.code}.svg`}
                floated="right"
                avatar
              />
            </Grid.Column>
            <Grid.Column width={5}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field>{homeTeamGoals}</Form.Field>
                  <Icon className="score-dash" fitted name="minus" />
                  <Form.Field>{awayTeamGoals}</Form.Field>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image
                src={`/img/flags/${awayTeam.code}.svg`}
                floated="left"
                avatar
              />
              {awayTeam.name}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    );
  }
}

PassiveMatchContent.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string.isRequired,
    homeTeamGoals: PropTypes.number,
    awayTeamGoals: PropTypes.number,
    homeTeam: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    }).isRequired,
    awayTeam: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PassiveMatchContent;
