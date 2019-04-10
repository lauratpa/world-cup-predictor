class AddUserToPredictions < ActiveRecord::Migration[5.2]
  def change
    change_table(:match_predictions) do |t|
      t.bigint :user_id
    end

    add_foreign_key :match_predictions, :users, column: :user_id
  end
end
