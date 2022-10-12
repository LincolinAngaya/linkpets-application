class Dog < ApplicationRecord
    belongs_to :admin
    validates :social_life, length: { maximum: 500 }
    validates :family_life, length: { maximum: 500 }
    validates :personality, length: { maximum: 500 }
    validates :physical, length: { maximum: 500 }

end
