class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.string :choice_value
      t.belongs_to :script, null: false, foreign_key: true

      t.timestamps
    end
  end
end
