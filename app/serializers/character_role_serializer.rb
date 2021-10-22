class CharacterRoleSerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
  has_one :role
end
