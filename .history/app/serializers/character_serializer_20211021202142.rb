class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :lvl, :current_exp, :next_lvl_exp, :role_data #, :script_data
  # has_many :roles
  def role_data 
    object.roles[0]
  end

  def script_data
    object.scripts
  end
  # has_many :scripts
  has_one :user
end
