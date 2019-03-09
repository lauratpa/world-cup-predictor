class MatchSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :kick_off, :home_team_goals, :away_team_goals

  belongs_to :home_team, record_type: :country, serializer: :country
  belongs_to :away_team, record_type: :country, serializer: :country
end
