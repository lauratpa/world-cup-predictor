Rails.application.routes.draw do
  root 'site#index'

  namespace :api do
    resources :matches, only: %i[index show]
  end
end
