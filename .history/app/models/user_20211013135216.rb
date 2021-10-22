class User < ApplicationRecord
    has_many :characters

    validates :username, presence: true
    validates :password, presence: true
    has_secure_password
end
