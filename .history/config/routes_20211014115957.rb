Rails.application.routes.draw do
  resources :character_scripts
  resources :characters
  resources :options
  resources :scripts, only: [:index]
  resources :users, only: [:index, :show, :create, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  ### New PRoj
end
