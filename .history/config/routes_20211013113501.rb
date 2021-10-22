Rails.application.routes.draw do
  resources :options
  resources :user_scripts
  resources :scripts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "users#show"
end