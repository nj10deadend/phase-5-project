class Character < ApplicationRecord
  belongs_to :user
  has_many :character_scripts
  has_many :scripts, through: :character_scripts
  has_many :character_roles
  has_many :roles, through: :character_roles
end
