class ApplicationController < ActionController::Base
  def root
    render html: "", layout: true
  end
end
