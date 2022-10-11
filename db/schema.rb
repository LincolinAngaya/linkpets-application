

ActiveRecord::Schema.define(version: 2022_10_11_140910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "membership"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "location"
    t.string "image_url"
    t.string "password_digest"
    t.string "contact"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.string "height"
    t.string "weight"
    t.string "life_expectancy"
    t.string "family_life"
    t.string "physical"
    t.string "social_life"
    t.string "personality"
    t.integer "admin_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
