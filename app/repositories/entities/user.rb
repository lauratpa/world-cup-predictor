module Entities
  class User < ROM::Struct
    def authenticate(password)
      BCrypt::Password.new(password_digest) == password
    end
  end
end
