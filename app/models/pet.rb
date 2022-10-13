class Pet < ApplicationRecord
    validates :name, presence: true
    validates :breed, presence: true
     validates :height, presence: true 
     validates :weight, presence: true

    validates :body, social life: true, length: { minimum: 100 }
end
