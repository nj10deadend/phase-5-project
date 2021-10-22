class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.string :name
      t.string :img
      t.integer :hp
      t.integer :hp_remaining
      t.integer :max_hp
      t.string :bio

      t.timestamps
    end
  end
end
