class DogsController < ApplicationController
    def index
        if session[:admin_id]
          render json: Dog.all, status: :created
        else
          render json: { errors: [] }, status: :unauthorized
        end
      end
    
      def create
        # byebug
        if session[:admin_id]
          admin = Dog.find(session[:admin_id])
          dog = admin.dogs.new(dog_params)
          if dog.valid?
            dog.save!
            render json: dog, status: :created
          else
            render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { errors: [] }, status: :unauthorized
        end
      end
    
      private
    
      def dog_params
        params.permit(:name, :breed, :image_url, :height, :weight, :life_expectancy, :family_life, :physical, :social_life, :personality)
      end
end
