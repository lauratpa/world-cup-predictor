Rails.application.routes.draw do
  root "site#index"

  resources :users, only: %i[create]

  post "login", to: "authentication#create"
  delete "logout", to: "authentication#destroy"

  namespace :api do
    get "current_user", to: "current_user#show"
    resources :matches, only: %i[index show]
    resources :match_predictions, only: %i[create update]
  end
end
