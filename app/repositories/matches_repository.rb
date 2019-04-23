class MatchesRepository < ROM::Repository[:matches]
  struct_namespace Entities
  commands :create

  def [](id)
    matches.by_id(id).one!
  end

  def all
    matches.with_teams.all.to_a
  end
end
