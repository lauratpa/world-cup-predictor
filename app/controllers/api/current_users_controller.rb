class Api::CurrentUsersController < ApiController
  def show
    render plain: current_user.to_json
  end
end
