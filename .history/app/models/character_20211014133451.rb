class Character < ApplicationRecord
  belongs_to :user
  has_many :character_scripts
  has_many :scripts, through: :character_scripts
end
