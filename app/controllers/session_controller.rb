class SessionController < ApplicationController

    def create
        admin = Admin.find_by(password: params[:password])
        session[:admin_id] = admin.id
        render json: admin
    end


    def destroy
        session.delete :user_id
        head :no_content
    end
end
