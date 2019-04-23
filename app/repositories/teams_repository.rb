class TeamsRepository < ROM::Repository[:teams]
  # struct_namespace Entities
  commands :create

  def [](id)
    teams.by_id(id).one!
  end

  def all
    teams.all.to_a
  end
end
