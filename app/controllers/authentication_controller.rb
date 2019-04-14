class AuthenticationController < ApplicationController
  def create
    user = User.find_by!(email: email)

    if user.authenticate(password)
      token = JsonWebToken.encode(user_id: user.id)

      cookies.signed[:jwt] = {
        value: token,
        httponly: true,
        expires: 1.week.from_now.utc,
      }

      render json: {name: user.name}, status: 201
    else
      render json: {}, status: :unauthorized
    end
  end

  def destroy
    cookies.delete(:jwt)
    head :ok
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def email
    user_params[:email]
  end

  def password
    user_params[:password]
  end
end
