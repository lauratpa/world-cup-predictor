class Users < ROM::Relation[:sql]
  schema(:users, infer: true)

  def by_id(id)
    where(id: id)
  end

  def by_email(email)
    where(email: email)
  end
end
