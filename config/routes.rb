Rails.application.routes.draw do
  scope "/api/v1" do
    post 'user_token' => 'user_token#create'
    jsonapi_resources :users
    jsonapi_resources :posts
  end

  get "*path", to: "root#show"
  root "root#show"
end
