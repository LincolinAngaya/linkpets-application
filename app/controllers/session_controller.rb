class SessionController < ApplicationController


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

    # def create
    #     user = User.find_by(username: params[:username])
    #     if user&.authenticate(params[:password])
    #       session[:user_id] = user.id
    #       render json: user, status: :created
    #     else
    #       render json: { error: "Invalid username or password" }, status: :unauthorized
    #     end
    #   end

    # def create
    #     admin = Admin.find_by(password: params[:password])
    #     session[:admin_id] = admin.id
    #     render json: admin
    # end


    # def destroy
    #     session.delete :admin_id
    #     head :no_content
    # end
end
