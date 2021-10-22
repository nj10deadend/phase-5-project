class CharactersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication


    def index 
        characters = Character.all 
        render json: users, status: :ok
    end



    def create
        new_character = Character.create(user_params)
        if character.valid?
        #   session[:user_id] = user.id
          render json: new_character, status: :created
        else
          render json: new_character.errors.full_messages, status: :unprocessable_entity
        end
    end


    private


    def character_params
        params.permit(:name, :lvl, :current_exp, :next_lvl_exp)
    end
end
