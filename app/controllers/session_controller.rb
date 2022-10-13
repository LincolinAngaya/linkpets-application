class SessionsController < ApplicationController


    def create
        admin = Admin.find_by(email: params[:email])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: { error: "invalid email or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :admin_id
        head :no_content
    end

end
