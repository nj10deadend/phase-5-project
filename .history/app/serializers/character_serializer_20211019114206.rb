class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :lvl, :current_exp, :next_lvl_exp
  # has_many :roles
  has_many :scripts
  has_one :user
end
