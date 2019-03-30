Rails.application.routes.draw do
  devise_for :users

  root 'site#index'

  namespace :api do
    resources :matches, only: %i[index show]
    resource :current_user, only: :show
  end
end
