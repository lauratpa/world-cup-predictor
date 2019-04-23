class UsersController < ApplicationController
  def create
    validation = UserSchema.call(user_params)

    if validation.success?
      user = users_repository
        .create(
          user_params.merge(
            password_digest: BCrypt::Password.create(user_params.fetch(:password))
          )
        )
      token = JsonWebToken.encode(user_id: user.id)

      cookies.encrypted[:jwt] = {
        value: token,
        httponly: true,
        expires: 1.week.from_now.utc,
      }

      render json: {name: user.name}, status: 201
    else
      render json: {error: user.messages(full: true).values}, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password).to_h
  end

  def users_repository
    @users_repository ||= UsersRepository.new(rom)
  end
end
