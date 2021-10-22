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
As you descend the confines of everything around you crumble before you. This is the end.", img: "https://www.ubackground.com/_ph/12/904444632.jpg", img2: "https://cutewallpaper.org/21/falling-wallpaper/Best-60-Guy-Falling-into-Dreams-Wallpaper-on-HipWallpaper-.jpg")

startStoryScript = Script.create(choice: "Remain in the dream", prompt: "You step away from the abyss and press on past the field of bodies leaving your family behind. 
As you continue on you notice that the fog in front of you dissipates revealing an enormous castle engulfed in flames. You see that there are two paths to get into the city.", 
img: "https://static01.nyt.com/images/2019/07/18/world/xxdropping-04/xxdropping-04-jumbo.jpg", img2: "https://cdn.abcotvs.com/dip/images/2560041_102317-kgo-sewer-2-img_Image_00-00-00,10.jpg")

option1 = Option.create(choice_value: "Enter sewer", script: startStoryScript)
option2 = Option.creae(choice_value: "Enter woods", script: startStoryScript)
option3 = Option.create(choice_value: "Find a boat by the beach", script: startStoryScript)

#### Sewer Path ########

sewerPathScript = Script.create(choice: "Enter sewer", prompt: `"You enter the sewers to sneak into the city from below. Two strange men approach you. Man1: "Those are some nice clothes you have there. You must have alot of money. Why don't you just hand those over and we'll be on our way."`)
sewerOption1 = Option.create(choice_value: `"Are you real?"`, script: sewerPathScript)
sewerOption2 = Option.create(choice_value: `"I don't have anything for you."`, script: sewerPathScript)
sewerOption3 = Option.create(choice_value: "Negotiate: Give family amulet in exchange for path to the town.", script: sewerPathScript)

denyMoneyScript = Script.create(choice: `"I don't have anything for you."`, prompt: `"[combat] You must want to die then. Very well! "`, img: "", img2: "")
winBattleOption = Option.create(choice_value: "Battle won", script: denyMoneyScript)

postBattle1Script = Script.create(choice: "Battle won", prompt: "The other man drops to the ground in fear as he watches you slay the other. ")

negotiateScript = Script.create(choice: "Negotiate: Give family amulet in exchange for path to the town.", prompt: `"Oooo that certainly looks mighty expensive. Fine (he sheaths his dagger). Best I can do is get you near the rear of the city. I don't know what kind of fool would want to go back there anyway."`, img: "", img2: "")
negotiationDialogueOption1 = Option.create(choice: "Fine", script: negotiateScript)
negotiationDialogueOption2 = Option.create(choice: `"What happened?"`, script: negotiateScript)

endofNegotiationScript1 = Script.create(choice: "Fine", prompt: "The man keeps to his word and guides you to the other end of the city. You leave the sewers to find a group of soldiers in battle. The smaller force wore the same colors as the soldiers on the field where your family was killed.", img: "", img2: "")
outOfSewerBattle1 = Option.create(choice_value: "Help weaker force", script: endofNegotiationScript1)
outOfSewerBattle2 = Option.create(choice_value: "Ignore them and sneak into the castle")


sewerPQuestionRealityScript = Script.create(choice: `"Are you real?"`, prompt: `"Am I real he says...(Both men laugh until the first one pulls out a dagger). How about this is this real enough for you? Hand it all over.`, img: "")
qRealityOption1 = Option.create(choice_value: "Fight them off", script: sewerPQuestionRealityScript)
qRealityOption2 = Option.create(choice_value: "Run away", script: sewerPQuestionRealityScript)

questionRealityintoCombat = Script.create(choice: "Fight them off", prompt: "(combat) You must not value your life. Die!", img: "", img2: "")
qRealCombatWonOption = Option.create(choice_value: "Enemy 1 slain", script: questionRealityintoCombat)

getInfoFromOtherGuy = Script.create(choice: "Enemy 1 slain", prompt: "The other man is paralyzed with fear after you killed the other. He attempts to run.", img: "", img2: "")
interrogateOption = Option.create(choice_value: "Interrogate", script: getInfoFromOtherGuy)
letGoOption = Option.create(choice_value: "Let him go", script: getInfoFromOtherGuy)
killScaredGuyOption = Option.create(choice_value: "Kill him", script: getInfoFromOtherGuy)


boatPathScript = Script.create(choice: "Find a boat by the beach", prompt: "")


########## Woods Path #####################################
woodsPathScript = Script.create(choice: "Enter woods", prompt: "As you walk through the woods you start to hear voices. One tells you to take the left path while another tells you to go right. You hear another voice that sounds more real and is crying for help. ", img: "", img2: "")



########### Boat path #####################################


puts "Done seeding!"
