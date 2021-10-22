class CharactersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication


    def index 
        characters = Character.all 
        render json: characters, status: :ok
    end


    def show 
      # byebug
      your_character = Character.find_by(id: params[:id])  
      if your_character
        render json: your_character, status: :found
      else
        render json: {error: "Character not found"}
      end
    end



    def create

        # new_character = Character.create(new_character_params)
        new_character = Character.create(name: params[:name], lvl: 1, current_exp: 0, next_lvl_exp: 50, user: current_user)
        # byebug
        
        ##CharacterItem.create()
        if new_character.valid?
          # byebug
          new_character_role = CharacterRole.create(character: new_character, role_id: params[:role][:id])
          # new_character_script = CharacterScript.create(character: new_character, script: params[:script].id)
          # CharacterRole.create(character_params)

          render json: new_character, status: :created
        else
          render json: new_character.errors.full_messages, status: :unprocessable_entity
        end
    end


    private


    # def new_character_params
    #   params.permit(:name, :lvl, :current_exp, :next_lvl_exp, :user)
    # end

    def character_roles_params
      
    end
end
