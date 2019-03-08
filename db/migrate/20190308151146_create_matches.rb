class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :host_team_id
      t.integer :away_team_id

      t.integer :host_team_goals
      t.integer :away_team_goals

      t.datetime :kick_off, null: false

      t.timestamps
    end

    add_foreign_key :matches, :countries, column: :host_team_id
    add_foreign_key :matches, :countries, column: :away_team_id
  end
end
