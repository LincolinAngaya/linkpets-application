class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.string :image_url
      t.string :height
      t.string :weight
      t.string :life_expectancy
      t.string :family_life
      t.string :physical
      t.string :social_life
      t.string :personality
      t.timestamps
    end
  end
end
