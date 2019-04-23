class UsersRepository < ROM::Repository[:users]
  struct_namespace Entities
  commands :create

  def [](id)
    users.by_id(id).one!
  end

  def find_by_email(email)
    users.by_email(email).one!
  end
end
