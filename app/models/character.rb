class Character < ApplicationRecord
  belongs_to :user
  has_many :character_scripts, dependent: :destroy
  has_many :scripts, through: :character_scripts
  has_many :character_roles, dependent: :destroy
  has_many :roles, through: :character_roles
end
