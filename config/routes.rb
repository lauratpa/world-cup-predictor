Rails.application.routes.draw do
  root "site#index"

  namespace :api do
    resources :matches, only: %i[index show]
    resources :match_predictions, only: %i[create update]

    post "login", to: "authentication#create"
    delete "logout", to: "authentication#destroy"
  end
end
