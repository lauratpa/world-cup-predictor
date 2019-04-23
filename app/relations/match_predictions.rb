class MatchPredictions < ROM::Relation[:sql]
  schema(:match_predictions, infer: true) do
    associations do
      belongs_to :match
    end
  end

  def by_id(id)
    where(id: id)
  end
end
