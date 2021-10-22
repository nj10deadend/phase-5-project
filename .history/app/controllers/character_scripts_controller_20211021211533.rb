class CharacterScriptsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index
        character_scripts = CharacterScript.all 
        render json: character_scripts, status: :ok
    end

    def show 
    end

    def create 
        newcharacter_script = CharacterScript.create(character_script_params)
        if newcharacter_role.valid?
            render json: newcharacter_script, status: :created
        else
            render json: newcharacter_script.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update 
        # byebug 
        character_script_to_update = CharacterScript.find_by(id: params[:id])
        if character_script_to_update.update_attribute(:script_id, params[:script_id])
            render json: character_script_to_update, status: :created
        else
            render json: character_script_to_update.errors.full_messages, status: :unprocessable_entity
        end   
    end

    private

    def character_script_params
        params.permit(:character, :script)
    end
end
