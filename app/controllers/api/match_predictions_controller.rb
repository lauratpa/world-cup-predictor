class Api::MatchPredictionsController < ApiController
  def create
    if match.kick_off > Time.now
      match_prediction = match_predictions_repo.create(
        attributes.merge(user_id: current_user.id)
      )

      render json: MatchPredictionSerializer.new(match_prediction).serialized_json,
             status: :created
    else
      render json: {error: "Cannot predict on an ongoing match"}, status: 422
    end
  end

  private

  def prediction_params
    params.require(:data).permit(:type, attributes: [:home_team_goals, :away_team_goals, :match_id])
  end

  def attributes
    prediction_params.fetch(:attributes).to_h
  end

  def match_predictions_repo
    @match_predictions_repo ||= MatchPredictionsRepository.new(rom)
  end

  def match
    @match ||= MatchesRepository.new(rom)[prediction_params.fetch(:attributes).fetch(:match_id)]
  end
end
