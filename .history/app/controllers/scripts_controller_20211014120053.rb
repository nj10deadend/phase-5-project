class ScriptsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index 
        scripts = Script.all
        render json: scripts, status: :ok
    end
end
