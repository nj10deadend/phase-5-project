class CharactersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication


    def index 
        users = User.all 
        render json: users, status: :ok
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


    private


    def character_params
        params.permit(:name, :lvl, :current_exp, :next_lvl_exp)
    end
end
