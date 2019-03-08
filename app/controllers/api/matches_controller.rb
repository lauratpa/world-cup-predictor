class Api::MatchesController < ApplicationController
  respond_to :json

  def index
    respond_with Match.order(:kick_off)
  end

  def show
    respond_with Match.find(params[:id])
  end
end
