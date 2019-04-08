class Api::MatchesController < ApiController
  def index
    render json: MatchSerializer.new(
      Match.order(:kick_off), include: [:home_team, :away_team]
    ).serialized_json
  end

  def show
    render json: Match.find(params[:id])
  end
end
