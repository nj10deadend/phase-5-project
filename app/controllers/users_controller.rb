class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication


    def index 
        users = User.all 
        render json: users, status: :ok
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: { user: 'not logged in' }, status: :unauthorized
        end
    end


    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end


    def update
        # byebug
        user = User.find_by(id:params[:id])
        if user.update_attribute(:username, params[:username])
          render json: user, status: :created
        else
          render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end 


     

    private

    def user_params
        params.permit(:username, :password)
    end

    def user_name
        params.permit(:username)
    end 
end
