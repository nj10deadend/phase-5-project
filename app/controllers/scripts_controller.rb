class ScriptsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication

    def index 
        scripts = Script.all
        render json: scripts, status: :ok
    end

    def show 
        # byebug
        your_script = Script.find_by(id: params[:id])  
        if your_script
            render json: your_script, status: :found
        else
            render json: {error: "Script not found"}
        end
    end

    # def create
    #     byebug
        
    #     scripts = Script.all 
    #     render json: scripts, status: :ok
    # end
    
end
