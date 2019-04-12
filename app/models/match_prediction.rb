class MatchPrediction < ApplicationRecord
  belongs_to :match

  validate :match_has_begun

  def match_has_begun
    if match.kick_off < Time.current
      errors.add(:match, "has already begun")
    end
  end
end
