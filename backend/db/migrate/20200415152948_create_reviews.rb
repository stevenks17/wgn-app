class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :gamer
      t.text :body
      t.belongs_to :game, foreign_key: true

      t.timestamps
    end
  end
end
