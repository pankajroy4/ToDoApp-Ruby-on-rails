Rails.application.routes.draw do
  get "signup" => "users#new"
  get "login" => "sessions#new"
  root "users#new"

  resources :users do
    resources :todos
  end
  
  resource :session, only: [:new, :create, :destroy]
  # resolve('Session') {[:session]} #->this is necessary if we use instance of session controller in form_with
end
