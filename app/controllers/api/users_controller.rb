module Api
  class UsersController < ActionController::API
    def create
      user = User.create(user_params)
      command = AuthenticateUser.call(user_params[:email], user_params[:password])

      if user.persisted?
        render json: {auth_token: command.result}, status: 201
      else
        render json: {error: user.errors.full_messages}, status: 422
      end
    end

    def destroy
      # Delete token from redis
      head :ok
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
end
