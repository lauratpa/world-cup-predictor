import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  Button,
  Card,
  Form,
  Grid,
  Icon,
  Input,
  Image,
  Transition
} from "semantic-ui-react";
import "./MatchContent.css";

class MatchContent extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;

    this.state = {
      match,
      homeTeam,
      awayTeam,
      homeTeamGoals: homeTeamGoals === undefined ? "" : homeTeamGoals,
      awayTeamGoals: awayTeamGoals === undefined ? "" : awayTeamGoals,
      showSubmit: false
    };
  }

  handleHomeTeamGoalsChange = e =>
    this.setState({ homeTeamGoals: e.target.value, showSubmit: true });

  handleAwayTeamGoalsChange = e =>
    this.setState({ awayTeamGoals: e.target.value, showSubmit: true });

  handleSubmit = () => {
    const { match, homeTeamGoals, awayTeamGoals } = this.state;

    axios
      .post(
        "/api/match_predictions",
        {
          data: {
            type: "prediction",
            attributes: {
              home_team_goals: homeTeamGoals,
              away_team_goals: awayTeamGoals,
              match_id: match.id
            }
          }
        },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("abc")).accessToken
          }
        }
      )
      .then(response => {
        console.log(response);
        this.setState({ showSubmit: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      showSubmit
    } = this.state;

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
                  <Form.Field>
                    <Input
                      type="number"
                      value={homeTeamGoals}
                      onChange={this.handleHomeTeamGoalsChange}
                      min={0}
                      max={99}
                    />
                  </Form.Field>
                  <Icon className="score-dash" fitted name="minus" />
                  <Form.Field>
                    <Input
                      type="number"
                      value={awayTeamGoals}
                      onChange={this.handleAwayTeamGoalsChange}
                      min={0}
                      max={99}
                    />
                  </Form.Field>
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
          <Transition
            visible={showSubmit}
            animation="slide down"
            duration={500}
          >
            <Grid.Row centered>
              <Button type="submit" onClick={this.handleSubmit}>
                Submit
              </Button>{" "}
            </Grid.Row>
          </Transition>
        </Grid>
      </Card.Content>
    );
  }
}

MatchContent.propTypes = {
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

export default MatchContent;
