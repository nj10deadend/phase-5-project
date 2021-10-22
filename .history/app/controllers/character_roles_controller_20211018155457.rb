class CharacterRolesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index 
    end

    def show 
    end

    def create 
        newcharacter_role = CharacterRole.create()
    end

    private

    def character_role_params
        params.permit(:character, :role)
    end
    
end
