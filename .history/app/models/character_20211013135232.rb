class Character < ApplicationRecord
  belongs_to :user
  has_many :user_scripts
  has_many :scripts, through: :user_scripts
end
