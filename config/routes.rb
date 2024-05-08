Rails.application.routes.draw do
  resources :videos
  root 'base#index'

  resources :users
end
