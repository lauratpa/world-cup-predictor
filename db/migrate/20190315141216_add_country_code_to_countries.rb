class AddCountryCodeToCountries < ActiveRecord::Migration[5.2]
  def change
    add_column :countries, :code, :string
  end
end
