class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :lvl
      t.integer :exp
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
