ROM::SQL.migration do
  change do
    create_table :teams do
      primary_key :id

      column :name, String, null: false, unique: true
    end
  end
end
