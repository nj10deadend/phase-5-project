class OptionsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index  
        options = Option.all 
        render json: options, status: :ok  
    end
end
