class Teams < ROM::Relation[:sql]
  schema(:teams, infer: true)

  def by_id(id)
    where(id: id)
  end

  def all
    order(:id)
  end
end
