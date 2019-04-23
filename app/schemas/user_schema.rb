UserSchema = Dry::Validation.Schema {
  required(:name).filled
  required(:email).filled(format?: URI::MailTo::EMAIL_REGEXP)
  required(:password).filled
}
