class MatchPredictionsRepository < ROM::Repository[:match_predictions]
  commands :create

  def [](id)
    matches.by_id(id).one!
  end
end
