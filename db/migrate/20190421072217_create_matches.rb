ROM::SQL.migration do
  change do
    create_table :matches do
      primary_key :id, type: :Bignum

      foreign_key :home_team_id, :teams, type: :Bignum, null: false
      foreign_key :away_team_id, :teams, type: :Bignum, null: false

      column :home_team_goals, Integer
      column :away_team_goals, Integer

      column :kick_off, DateTime, null: false
    end
  end
end
