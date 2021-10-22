class CharacterScriptSerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
  has_one :script
end
