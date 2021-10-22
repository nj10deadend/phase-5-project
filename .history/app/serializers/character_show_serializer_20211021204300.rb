class CharacterShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :lvl, :current_exp, :next_lvl_exp, :role_data, :script_data, :just_for_reference
  # has_many :roles
  def role_data 
    role_data_object = object.roles[0]
  end

  def script_data
    script_data_object = object.scripts[0]
    formatted_script_data_object = {
      id_of_current_script: 1
    }
    # script_data_object[:id_of_current_script] = 1

  end
  def just_for_reference
    script_data_object = object.scripts[0]

  end
  # has_many :scripts
  has_one :user
end
