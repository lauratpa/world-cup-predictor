class Api::CurrentUsersController < ActionController::API
  def show
    render plain: current_user.to_json
  end
end
