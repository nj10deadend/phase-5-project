class CharacterRolesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index 
    end

    def show 
    end

    def create 
        newcharacter_role = CharacterRole.create(character_role_params)
        if newcharacter_role.valid?
            render json: newcharacter_role, status: :created
        else
            render json: newcharacter_role.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def character_role_params
        params.permit(:character, :role)
    end
    
end
