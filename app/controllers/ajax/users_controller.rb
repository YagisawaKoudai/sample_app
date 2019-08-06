module Ajax
  class UsersController < ApplicationController
    def index
      render json: User.all.select(:id, :name, :email)
    end
  end
end
