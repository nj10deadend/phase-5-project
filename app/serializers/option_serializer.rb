class OptionSerializer < ActiveModel::Serializer
  attributes :id, :choice_value
  has_one :script
end
