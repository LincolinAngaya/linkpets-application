class PetSerializer < ActiveModel::Serializer
  attributes :id,:name, :breed, :image_url, :height, :weight, :life_expectancy, :family_life, :physical, :social_life, :personality
end
