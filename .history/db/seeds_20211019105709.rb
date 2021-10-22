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


###### Characters ####

guestCharacter = Character.create(name: "Guest", lvl: 1, current_exp: 0, next_lvl_exp: 50, user: guest)


####### Items #################################

### ----starter items----- ###
# item1 = Item.create(name: "Broadsword", img: "https://pics.knifecenter.com/knifecenter/united/images/UC3265_1.jpg", damage: 20)




#### Roles #################################

soldier = Role.create(name: "Soldier", img:"https://i.pinimg.com/originals/d8/5a/81/d85a810820b7ba00122476110223de70.jpg", hp: 200, bio: "Strong defense and decent damage. Good starter class for beginners.")
mage = Role.create(name: "Mage", img: "https://s-media-cache-ak0.pinimg.com/564x/d0/b9/f2/d0b9f2bca2b4f6d4b94d3573056d8dc1.jpg", hp: 100, bio: "Weak defense with excellent destructive power. Not recommended for beginners.")
assassin = Role.create(name: "Assassin", img: "https://wallpaperaccess.com/full/2553151.jpg", hp: 130, bio: "Decent defense with above average damage")



#### Script #################################

start = Script.create(choice: "Start", prompt: "The air is cold and your vision hazy. You walk in what appears to be an endless expanse of fog amongst the plains. After what 
felt like hours you eventually reach the end of the seemingly endless path only to see countless bodies before you
. Your family is amongst the many. This must be a dream. If you find a way to wake up it'll all be over and
you'll be with them again. You approach a nearby cliff and gaze into the abyss. This must be the way.", img: "https://sciencefictionbulletin.files.wordpress.com/2019/12/expanse-407.jpg?w=1200", img2: "https://static.tvtropes.org/pmwiki/pub/images/89507_1003.jpg")

endLifeOp = Option.create(choice_value: "Escape the dream", script: start)
startStory = Option.create(choice_value: "Remain in the dream", script: start)

endOfLifeScript = Script.create(choice: "Escape the dream", prompt: "You slowly walk to the past the edge and plummet to it's depths. 
As you descend you witness the confines of everything around you crumble before you. This is the end.", img: "https://www.ubackground.com/_ph/12/904444632.jpg", img2: "https://cutewallpaper.org/21/falling-wallpaper/Best-60-Guy-Falling-into-Dreams-Wallpaper-on-HipWallpaper-.jpg")

startStoryScript = Script.create(choice: "Remain in the dream", prompt: "You remove the weapon from your neck and press on past the field of bodies leaving your family behind. 
As you continue on you notice that the fog in front of you dissipates revealing an enormous castle engulfed in flames.", 
img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/11/18/15/498426.bin?width=1200", img2: "")

puts "Done seeding!"
