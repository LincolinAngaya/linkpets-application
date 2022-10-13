class Pet < ApplicationRecord
    validates :name, presence: true
    validates :breed, presence: true
     validates :height, presence: true 
     validates :weight, presence: true

    # validates :social_life: true, length: { maximum: 100 }
end
