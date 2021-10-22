class CreateCharacterRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :character_roles do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.belongs_to :role, null: false, foreign_key: true

      t.timestamps
    end
  end
end
