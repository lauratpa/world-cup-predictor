france       = Country.find_or_create_by!(name: "France", code: "fr")
south_korea  = Country.find_or_create_by!(name: "South Korea", code: "kr")
germany      = Country.find_or_create_by!(name: "Germany", code: "de")
china        = Country.find_or_create_by!(name: "China", code: "cn")
spain        = Country.find_or_create_by!(name: "Spain", code: "es")
south_africa = Country.find_or_create_by!(name: "South Africa", code: "za")
norway       = Country.find_or_create_by!(name: "Norway", code: "no")
nigeria      = Country.find_or_create_by!(name: "Nigeria", code: "ng")
australia    = Country.find_or_create_by!(name: "Australia", code: "au")
italy        = Country.find_or_create_by!(name: "Italy", code: "it")
brazil       = Country.find_or_create_by!(name: "Brazil", code: "br")
jamaica      = Country.find_or_create_by!(name: "Jamaica", code: "jm")
england      = Country.find_or_create_by!(name: "England", code: "gb-eng")
scotland     = Country.find_or_create_by!(name: "Scotland", code: "gb-sct")
argentina    = Country.find_or_create_by!(name: "Argentina", code: "ar")
japan        = Country.find_or_create_by!(name: "Japan", code: "jp")
canada       = Country.find_or_create_by!(name: "Canada", code: "ca")
cameroon     = Country.find_or_create_by!(name: "Cameroon", code: "cm")

# Real games
Match.find_or_create_by!(home_team: france, away_team: south_korea, kick_off: "2019-06-07 18:00:00 +1")
Match.find_or_create_by!(home_team: germany, away_team: china, kick_off: "2019-06-08 15:00:00 +1")
Match.find_or_create_by!(home_team: spain, away_team: south_africa, kick_off: "2019-06-08 18:00:00 +1")
Match.find_or_create_by!(home_team: norway, away_team: nigeria, kick_off: "2019-06-08 21:00:00 +1")
Match.find_or_create_by!(home_team: australia, away_team: italy, kick_off: "2019-06-09 13:00:00 +1")
Match.find_or_create_by!(home_team: brazil, away_team: jamaica, kick_off: "2019-06-09 15:30:00 +1")
Match.find_or_create_by!(home_team: england, away_team: scotland, kick_off: "2019-06-09 18:00:00 +1")
Match.find_or_create_by!(home_team: argentina, away_team: japan, kick_off: "2019-06-10 18:00:00 +1")
Match.find_or_create_by!(home_team: canada, away_team: cameroon, kick_off: "2019-06-10 21:00:00 +1")

Match.find_or_create_by!(home_team: canada, away_team: cameroon, kick_off: 10.minutes.from_now.utc)

# Dev games
countries = Country.all
now = Time.now.beginning_of_hour
time_range = ((now - 2.days).to_i..(now + 2.days).to_i).to_a

10.times do |i|
  home_team, away_team = countries.sample(2)
  kick_off = Time.at(time_range.sample)

  home_team_goals, away_team_goals = [rand(0..10), rand(0..10)] if kick_off < now

  Match.find_or_create_by!(
    home_team: home_team,
    home_team_goals: home_team_goals,
    away_team: away_team,
    away_team_goals: away_team_goals,
    kick_off: kick_off
  )
end

User.create!(name: "Example User", email: "example@example.com", password: "12345", password_confirmation: "12345")
