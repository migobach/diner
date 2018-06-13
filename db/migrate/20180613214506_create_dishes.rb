class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :title
      t.string :description
      t.float :price

      t.timestamps
    end
  end
end