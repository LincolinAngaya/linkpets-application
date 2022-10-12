class AdminsController < ApplicationController
    def create
        admin = Admin.create(admin_params)
        if admin.valid?
          session[:admin_id] = admin.id
          render json: admin, status: :created
        else
          render json: { error: admin.errors.full_messages }, status: :unprocessable_entity
        end
      end
end
