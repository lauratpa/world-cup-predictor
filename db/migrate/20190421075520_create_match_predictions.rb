ROM::SQL.migration do
  change do
    create_table(:match_predictions) do
      primary_key :id, type: :Bignum

      foreign_key :match_id, :matches, type: :Bignum, null: false, on_delete: :cascade
      foreign_key :user_id, :users, type: :Bignum, null: false, on_delete: :cascade

      unique [:match_id, :user_id]

      column :home_team_goals, Integer
      column :away_team_goals, Integer
    end
  end
end
