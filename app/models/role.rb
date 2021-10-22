class Role < ApplicationRecord
    has_many :character_roles
    has_many :characters, through: :character_roles
end
