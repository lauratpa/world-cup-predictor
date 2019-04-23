ROM::SQL.migration do
  change do
    create_table :users do
      primary_key :id, type: :Bignum

      column :name, String, null: false
      column :email, String, null: false, unique: true
      column :password_digest, String, null: false
    end
  end
end
