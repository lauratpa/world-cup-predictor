require "rails_helper"

RSpec.describe "Create match prediction", type: :request do
  let(:password) { "12345" }
  let(:user) do
    User.create!(
      email: "laura@example.com",
      password: password,
      password_confirmation: password
    )
  end
  let(:france) { Country.create!(name: "France", code: "fr") }
  let(:germany) { Country.create!(name: "Germany", code: "de") }

  let(:match) do
    Match.create!(
      home_team: france,
      away_team: germany,
      kick_off: Date.tomorrow.to_time
    )
  end

  let(:token) { AuthenticateUser.call(user.email, password).result }

  describe "POST create" do
    it "creates a prediction" do
      post "/api/match_predictions", {
        params: {
          data: {
            type: "match_predictions",
            attributes: {
              match_id: match.id,
              home_team_goals: 3,
              away_team_goals: 2,
            },
          },
        },
        headers: {"Authorization" => token},
      }

      expect(response.status).to eq(201)
      expect(JSON.parse(response.body)).to eq(
        {
          "data" =>
          {
            "id" => MatchPrediction.first.id.to_s,
            "type" => "matchPrediction",
            "attributes" => {"homeTeamGoals" => 3, "awayTeamGoals" => 2},
            "relationships" =>
            {
              "match" => {"data" => {"id" => match.id.to_s, "type" => "match"}},
              "user" => {"data" => {"id" => user.id.to_s, "type" => "user"}},
            },
          },
        }
      )
    end
  end
end
