class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :gamer, :body
  belongs_to :game
end
