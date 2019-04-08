module Api
  class AuthenticationController < ActionController::API
    def create
      command = AuthenticateUser.call(user_params[:email], user_params[:password])

      if command.success?
        render json: { auth_token: command.result }
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end

    def destroy
      # Delete token from redis
      head :ok
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
