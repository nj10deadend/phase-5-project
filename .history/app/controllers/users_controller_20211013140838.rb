class UsersController < ApplicationController
    wrap_parameters format: []
    before_action :confirm_authentication

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: { user: 'not logged in' }, status: :unauthorized
        end
    end


    def create
    end
end
