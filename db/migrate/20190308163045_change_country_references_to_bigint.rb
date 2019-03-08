class ChangeCountryReferencesToBigint < ActiveRecord::Migration[5.2]
  def change
    change_column(:matches, :host_team_id, :bigint)
    change_column(:matches, :away_team_id, :bigint)
  end
end