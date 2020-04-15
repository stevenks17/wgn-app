class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :developer, :cover
  has_many :reviews
end
