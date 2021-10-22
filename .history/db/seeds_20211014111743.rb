# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Character.destroy_all
CharacterScript.destroy_all
Script.destroy_all
Option.destroy_all


puts "Seeding..."

# Examples:

### Users

guest = User.create(username: "guest", password: "123")
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


###### Character ####


####### Items #################################

#### Script #################################

start = Script.create(choice: "Start", prompt: "The air is cold and your vision hazy. 
In your drunken walk in what appears to be an endless expanse of fog amongst the plains. After what 
felt like hours you eventually reach the end of the seemingly endless path only to see countless bodies before you
. Your family is amongst the many. You're certain this must be a dream. You don't h   )

puts "Done seeding!"
