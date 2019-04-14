module Api
  class CurrentUserController < ApiController
    def show
      if current_user
        render json: {name: current_user.name}, status: 201
      else
        render json: {}, status: :unauthorized
      end
    end
  end
end
