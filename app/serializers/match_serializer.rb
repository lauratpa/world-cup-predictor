class MatchSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :kick_off, :home_team_goals, :away_team_goals

  belongs_to :home_team, record_type: :team, serializer: :team
  belongs_to :away_team, record_type: :team, serializer: :team
end
