class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :lvl, :current_exp, :next_lvl_exp, :role_data , :last_lvl
  # has_many :roles
  def role_data 
    object.roles[0]
  end

  def last_lvl
    object.scripts[0]
  end
  # has_many :scripts
  has_one :user
end
