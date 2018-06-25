class UserTokenController < Knock::AuthTokenController
  rescue_from ActiveRecord::RecordNotFound do |exception|
    render json: { error: "Email or Password is incorrect." }, status: :not_found
  end
end
