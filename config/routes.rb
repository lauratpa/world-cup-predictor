Rails.application.routes.draw do
  namespace :api do
    resources :matches, only: %i[index show]
  end
end
