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


#### Roles #################################



#### Script #################################

start = Script.create(choice: "Start", prompt: "The air is cold and your vision hazy. You walk in what appears to be an endless expanse of fog amongst the plains. After what 
felt like hours you eventually reach the end of the seemingly endless path only to see countless bodies before you
. Your family is amongst the many. This must be a dream. If you find a way to wake up it'll all be over and
you'll be with them again. You grab one of the many weapons scattered across the field of countless bodies.", img: "https://sciencefictionbulletin.files.wordpress.com/2019/12/expanse-407.jpg?w=1200", img2: "https://static.tvtropes.org/pmwiki/pub/images/89507_1003.jpg")

endLifeOp = Option.create(choice_value: "Escape the dream", script: start)
startStory = Option.create(choice_value: "Remain in the dream", script: start)

endOfLifeScript = Script.create(choice: "Escape the dream", prompt: "You use the weapon to end your own life. 
You feel no pain from the initial blow and witness the confines of everything around you crumbling in your 
last moments. This is the end.", img: "", img2: "")

startStoryScript = Script.create(choice: "Remain in the dream", prompt: "You remove the weapon from your neck and press on past the field of bodies leaving your family behind. 
As you continue on you notice that the fog in front of you dissipates revealing an enormous castle engulfed in flames.", 
img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/11/18/15/498426.bin?width=1200", img2: "")

puts "Done seeding!"
