class MatchPredictionSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :home_team_goals, :away_team_goals

  belongs_to :match
  belongs_to :user
end
