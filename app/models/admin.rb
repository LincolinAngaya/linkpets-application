class Admin < ApplicationRecord
    has_many :dogs
    has_secure_password
    validates :email, uniqueness: true
    # validates :password, length: { in: 6..20 }
    validates :membership, inclusion: {in: ['individual membership','family membership']}
end
