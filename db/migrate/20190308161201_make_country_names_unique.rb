class MakeCountryNamesUnique < ActiveRecord::Migration[5.2]
  def change
    add_index(:countries, :name, unique: true)
  end
end
