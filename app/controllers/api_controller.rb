class ApiController < ActionController::API
  before_action :authenticate_request

  private

  def authenticate_request
    render json: {error: "Not Authorized"}, status: 401 unless current_user
  end

  def current_user
    @current_user ||= AuthorizeApiRequest.call(request.headers).result
  end
end
