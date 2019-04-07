Rails.application.routes.draw do
  root 'site#index'


  namespace :api do
    resources :matches, only: %i[index show]

    post 'login', to: 'authentication#create'
    delete 'logout', to: 'authentication#destroy'
  end
end
