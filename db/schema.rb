# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_17_203456) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_roles", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "role_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_roles_on_character_id"
    t.index ["role_id"], name: "index_character_roles_on_role_id"
  end

  create_table "character_scripts", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "script_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_scripts_on_character_id"
    t.index ["script_id"], name: "index_character_scripts_on_script_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "lvl"
    t.integer "current_exp"
    t.integer "next_lvl_exp"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "options", force: :cascade do |t|
    t.string "choice_value"
    t.bigint "script_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["script_id"], name: "index_options_on_script_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "img"
    t.integer "hp"
    t.integer "hp_remaining"
    t.integer "max_hp"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "scripts", force: :cascade do |t|
    t.string "choice"
    t.string "prompt"
    t.string "img"
    t.string "img2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_roles", "characters"
  add_foreign_key "character_roles", "roles"
  add_foreign_key "character_scripts", "characters"
  add_foreign_key "character_scripts", "scripts"
  add_foreign_key "characters", "users"
  add_foreign_key "options", "scripts"
end
