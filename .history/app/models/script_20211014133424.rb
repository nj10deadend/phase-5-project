class Script < ApplicationRecord
    has_many :character_scripts
    has_many :characters, through: :character_scripts
    
end
