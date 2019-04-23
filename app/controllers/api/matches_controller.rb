class Api::MatchesController < ApiController
  def index
    render json: MatchSerializer.new(
      matches_repository.all.to_a, include: [:home_team, :away_team]
    ).serialized_json
  end

  def show
    render json: Match.find(params[:id])
  end

  private

  def matches_repository
    @matches_repository ||= MatchesRepository.new(rom)
  end
end
