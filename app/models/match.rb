class Match < ApplicationRecord
  belongs_to :host_team, class_name: 'Country'
  belongs_to :away_team, class_name: 'Country'
end
