class PostsController < ApplicationController
  include JSONAPI::ActsAsResourceController
  before_action :authenticate_user
end
