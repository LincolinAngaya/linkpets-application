class PetsController < ApplicationController
    def index
        @pets = Pet.all
        render json: @pets
    end
    
    def show
        @pets = Pet.find(params[:id])
        render json: @pets
    end
    
    def new
        @pets= Pet.new
    end
    
    def create
        @pets = Pet.new(pet_params)
    
        if @pets.save
          redirect_to @pets
        else
          render :new, status: :unprocessable_entity
        end
    end
    
    def edit
        @pets = Pet.find(params[:id])
    end
    
    def update
        @pets= Pet.find(params[:id])
    
        if @pets.update(pet_params)
          redirect_to @pets
        else
          render :edit, status: :unprocessable_entity
        end
    end
    
    def destroy
        @pets = Pet.find(params[:id])
        @pets.destroy
    
        redirect_to root_path, status: :see_other
    end
    
    private
    def pet_params
        params.require(:pet).permit(:name, :breed, :image_url, :height, :weight, :life_expectancy, :family_life, :physical, :social_life, :personality)
    end

end
