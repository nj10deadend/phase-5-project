class Script < ApplicationRecord
    has_many :user_scripts
    has_many :users, through: :user_scripts
    
end
