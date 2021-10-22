Rails.application.routes.draw do
  resources :character_roles, only: [:index, :show, :create]
  resources :roles, only: [:index, :show]
  resources :character_scripts, only: [:index, :show, :create]
  resources :characters, only: [:index, :show, :create]
  resources :options, only: [:index]
  resources :scripts, only: [:index, :create]
  resources :users, only: [:index, :show, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "users#show"
  get "/mycharacter", to: "characters#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  ### New PRoj
end
