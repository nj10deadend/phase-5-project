class CharactersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication


    def index 
        characters = Character.all 
        render json: characters, status: :ok
    end



    def create
        new_character = Character.create(new_character_params)
        byebug
        ##CharacterItem.create()
        #### CharacterRole.create()
        if new_character.valid?
        #   session[:user_id] = user.id
          # CharacterRole.create(character_params)

          render json: new_character, status: :created
        else
          render json: new_character.errors.full_messages, status: :unprocessable_entity
        end
    end


    private


    def new_character_params
      params.permit(name: "Naseer", lvl: 1, current_exp: 0, next_lvl_exp: 50, user: @current_user)
    end

    def character_roles_params
      
    end
end
