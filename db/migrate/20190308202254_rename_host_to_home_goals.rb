class RenameHostToHomeGoals < ActiveRecord::Migration[5.2]
  def change
    rename_column :matches, :host_team_goals, :home_team_goals
    rename_column :match_predictions, :host_team_goals, :home_team_goals
  end
end
