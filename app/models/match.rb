class Match < ApplicationRecord
  belongs_to :home_team, class_name: "Country"
  belongs_to :away_team, class_name: "Country"
end
