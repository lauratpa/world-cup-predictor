class Api::MatchPredictionsController < ApiController
  def create
    match_prediction = MatchPrediction.create(attributes.merge(user_id: current_user.id))

    if match_prediction.persisted?
      render json: MatchPredictionSerializer.new(match_prediction).serialized_json,
             status: :created
    else
      render json: {error: match_prediction.errors.full_messages}, status: 422
    end
  end

  private

  def prediction_params
    params.require(:data).permit(:type, attributes: [:home_team_goals, :away_team_goals, :match_id])
  end

  def attributes
    prediction_params.fetch(:attributes)
  end
end
