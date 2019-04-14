### Deploy

Deploy with eb cli https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html

Set `RAILS_MASTER_KEY` to what's in your config/master.key
`eb setenv RAILS_MASTER_KEY=xxxxx`

Set static files
`RAILS_SERVE_STATIC_FILES = enabled`

Create database and set database url
`DATABASE_URL = postgres://user:password@endpoint:port/database`

Deploy
`eb deploy env-name`

Seed database
```
eb ssh
cd /var/app/current/
sudo env PATH=$PATH DATABASE_URL=$DATABASE_URL RAILS_ENV=production bundle exec rake db:seed
```

### Other

Flags by courtesy of <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
