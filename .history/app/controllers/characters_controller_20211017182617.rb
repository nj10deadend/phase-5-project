class CharactersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication


    def index 
        characters = Character.all 
        render json: characters, status: :ok
    end



    def create
        new_character = Character.create(character_params)
        ##CharacterItem.create()
        #### CharacterRole.create()
        if character.valid?
        #   session[:user_id] = user.id
          CharacterRole.create(character_params)

          render json: new_character, status: :created
        else
          render json: new_character.errors.full_messages, status: :unprocessable_entity
        end
    end


    private


    def character_params
      params.permit(:name, :lvl, :current_exp, :next_lvl_exp)
    end

    def character_roles_params
      
    end
end
