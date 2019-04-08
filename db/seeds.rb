france      = Country.find_or_create_by!(name: "France", code: 'fr')
south_korea = Country.find_or_create_by!(name: "South Korea", code: 'kr')
germany     = Country.find_or_create_by!(name: "Germany", code: 'de')
china       = Country.find_or_create_by!(name: "China", code: 'cn')

Match.find_or_create_by!(home_team: france, away_team: south_korea, kick_off: "2019-06-07 18:00:00 +1")
Match.find_or_create_by!(home_team: germany, away_team: china, kick_off: "2019-06-08 15:00:00 +1")

Match.all.each do |match|
  MatchPrediction.create!(match: match)
end
