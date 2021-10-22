class SessionController < ApplicationController
    wrap_parameters format:[]
    skip_before_action :confirm_authentication, only:[:create]

    def create
        new_user_session = User.find_by_username(params[:username])
        if new_user_session&.authenticate(params[:password])
            session[:user_id] = new_user_session.id
            render json: new_user_session, status: :created
        else
            render json: {errors: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
