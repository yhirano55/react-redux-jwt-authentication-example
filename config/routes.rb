Rails.application.routes.draw do
  get "*path", to: "application#root"
  root "application#root"
end
