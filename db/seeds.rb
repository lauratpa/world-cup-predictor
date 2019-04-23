# france       = TeamsRepository.create(name: "France", code: "fr")
# south_korea  = TeamsRepository.create(name: "South Korea", code: "kr")
# germany      = TeamsRepository.create(name: "Germany", code: "de")
# china        = TeamsRepository.create(name: "China", code: "cn")
# spain        = TeamsRepository.create(name: "Spain", code: "es")
# south_africa = TeamsRepository.create(name: "South Africa", code: "za")
# norway       = TeamsRepository.create(name: "Norway", code: "no")
# nigeria      = TeamsRepository.create(name: "Nigeria", code: "ng")
# australia    = TeamsRepository.create(name: "Australia", code: "au")
# italy        = TeamsRepository.create(name: "Italy", code: "it")
# brazil       = TeamsRepository.create(name: "Brazil", code: "br")
# jamaica      = TeamsRepository.create(name: "Jamaica", code: "jm")
# england      = TeamsRepository.create(name: "England", code: "gb-eng")
# scotland     = TeamsRepository.create(name: "Scotland", code: "gb-sct")
# argentina    = TeamsRepository.create(name: "Argentina", code: "ar")
# japan        = TeamsRepository.create(name: "Japan", code: "jp")
# canada       = TeamsRepository.create(name: "Canada", code: "ca")
# cameroon     = TeamsRepository.create(name: "Cameroon", code: "cm")

# teams_repo = TeamsRepository.new(ROM.env)

# france       = teams_repo.create(name: "France")
# south_korea  = teams_repo.create(name: "South Korea")
# germany      = teams_repo.create(name: "Germany")
# china        = teams_repo.create(name: "China")
# spain        = teams_repo.create(name: "Spain")
# south_africa = teams_repo.create(name: "South Africa")
# norway       = teams_repo.create(name: "Norway")
# nigeria      = teams_repo.create(name: "Nigeria")
# australia    = teams_repo.create(name: "Australia")
# italy        = teams_repo.create(name: "Italy")
# brazil       = teams_repo.create(name: "Brazil")
# jamaica      = teams_repo.create(name: "Jamaica")
# england      = teams_repo.create(name: "England")
# scotland     = teams_repo.create(name: "Scotland")
# argentina    = teams_repo.create(name: "Argentina")
# japan        = teams_repo.create(name: "Japan")
# canada       = teams_repo.create(name: "Canada")
# cameroon     = teams_repo.create(name: "Cameroon")

# Real games
matches_repo = MatchesRepository.new(ROM.env)

matches_repo.create(
  home_team_id: france.id,
  away_team_id: south_korea.id,
  kick_off: DateTime.parse("2019-06-07 18:00:00 +1").utc
)
# Match.find_or_create_by!(home_team: germany, away_team: china, kick_off: "2019-06-08 15:00:00 +1")
# Match.find_or_create_by!(home_team: spain, away_team: south_africa, kick_off: "2019-06-08 18:00:00 +1")
# Match.find_or_create_by!(home_team: norway, away_team: nigeria, kick_off: "2019-06-08 21:00:00 +1")
# Match.find_or_create_by!(home_team: australia, away_team: italy, kick_off: "2019-06-09 13:00:00 +1")
# Match.find_or_create_by!(home_team: brazil, away_team: jamaica, kick_off: "2019-06-09 15:30:00 +1")
# Match.find_or_create_by!(home_team: england, away_team: scotland, kick_off: "2019-06-09 18:00:00 +1")
# Match.find_or_create_by!(home_team: argentina, away_team: japan, kick_off: "2019-06-10 18:00:00 +1")
# Match.find_or_create_by!(home_team: canada, away_team: cameroon, kick_off: "2019-06-10 21:00:00 +1")
#
# Match.find_or_create_by!(home_team: canada, away_team: cameroon, kick_off: 10.minutes.from_now.utc)
#
# # Dev games
teams = teams_repo.all
now = Time.now.beginning_of_hour
time_range = ((now - 2.days).to_i..(now + 2.days).to_i).to_a

10.times do |i|
  home_team, away_team = teams.sample(2)
  kick_off = Time.at(time_range.sample)

  home_team_goals, away_team_goals = [rand(0..10), rand(0..10)] if kick_off < now

  matches_repo.create(
    home_team_id: home_team.id,
    home_team_goals: home_team_goals,
    away_team_id: away_team.id,
    away_team_goals: away_team_goals,
    kick_off: kick_off
  )
end

users_repo = UsersRepository.new(ROM.env)
user = users_repo.create(
  name: "Example User",
  email: "example@example.com",
  password_digest: BCrypt::Password.create("12345")
)

match_predictions_repo = MatchPredictionsRepository.new(ROM.env)
match_predictions_repo.create(
  user_id: user.id,
  match_id: matches_repo.all.to_a.first.id,
  home_team_goals: 3,
  away_team_goals: 4
)
