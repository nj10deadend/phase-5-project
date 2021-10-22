class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :lvl, :exp
  has_one :user
end
