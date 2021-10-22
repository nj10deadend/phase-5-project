class ScriptSerializer < ActiveModel::Serializer
  attributes :id, :choice, :prompt, :img, :img2
  has_many :options
end
