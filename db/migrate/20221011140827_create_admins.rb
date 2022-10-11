class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :membership
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :location
      t.string :image_url
      t.string :password_digest
      t.string :contact
      t.timestamps
    end
  end
end
