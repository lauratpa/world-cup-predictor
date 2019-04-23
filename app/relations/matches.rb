class Matches < ROM::Relation[:sql]
  schema(:matches, infer: true) do
    associations do
      belongs_to :teams, as: :home_team, foreign_key: :home_team_id
      belongs_to :teams, as: :away_team, foreign_key: :away_team_id
    end
  end

  def by_id(id)
    where(id: id)
  end

  def all
    order(:kick_off)
  end

  def with_teams
    combine(:home_team, :away_team)
      .node(:home_team) { |relation| relation.select(:id, :name) }
      .node(:away_team) { |relation| relation.select(:id, :name) }
  end
end
