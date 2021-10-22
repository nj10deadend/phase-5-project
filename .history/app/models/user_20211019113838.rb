class User < ApplicationRecord
    has_many :characters, dependent: :destroy

    validates :username, presence: true
    validates :password, presence: true
    has_secure_password
end
