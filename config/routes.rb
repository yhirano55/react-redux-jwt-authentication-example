Rails.application.routes.draw do
  scope "/api/v1" do
    jsonapi_resources :posts
  end

  get "*path", to: "application#root"
  root "application#root"
end
