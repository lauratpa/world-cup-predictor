class UsersController < ApplicationController
  def create
    user = User.create(user_params)

    if user.persisted?
      token = JsonWebToken.encode(user_id: user.id)

      cookies.encrypted[:jwt] = {
        value: token,
        httponly: true,
        expires: 1.week.from_now.utc,
      }

      render json: {name: user.name}, status: 201
    else
      render json: {error: user.errors.full_messages}, status: 422
    end
  end

  def destroy
    # Delete cookie
    head :ok
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
