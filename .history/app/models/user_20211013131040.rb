class User < ApplicationRecord
    has_many :user_scripts
    has_many :scripts, through: :user_scripts

    validates :username, presence: true
    validates :password, presence: true
    has_secure_password
end
