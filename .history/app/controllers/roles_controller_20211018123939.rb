class RolesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index 
        roles = Role.all
        render json: roles, status: :ok
    end


end
