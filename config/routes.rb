Rails.application.routes.draw do
  
  resources :dogs
 # resources :admins
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'admins#create'
  get '/me', to: 'admins#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

 
end
