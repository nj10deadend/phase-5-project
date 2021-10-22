class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :lvl, :current_exp, :next_lvl_exp, :name_again
  # has_many :roles
  def name_again 
    object.name
  end
  has_many :scripts
  has_one :user
end
