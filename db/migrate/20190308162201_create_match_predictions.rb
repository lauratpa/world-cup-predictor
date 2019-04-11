class CreateMatchPredictions < ActiveRecord::Migration[5.2]
  def change
    create_table :match_predictions do |t|
      t.bigint :match_id

      t.integer :home_team_goals
      t.integer :away_team_goals

      t.timestamps
    end

    add_foreign_key :match_predictions, :matches, column: :match_id
  end
end
