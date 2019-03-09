class RenameHostToHomeTeam < ActiveRecord::Migration[5.2]
  def change
    rename_column :matches, :host_team_id, :home_team_id
  end
end
