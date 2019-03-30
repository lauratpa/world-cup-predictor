class ApplicationController < ActionController::Base
  respond_to :html, :json

  protect_from_forgery with: :null_session
end
