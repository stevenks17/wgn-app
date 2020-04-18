# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.destroy_all
Review.destroy_all

puts "Entering the data into the MATRIX!!!"

g1 = Game.create(title: "Final Fantasy 7 Remake", developer: "Square Enix", cover: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png")
g2 = Game.create(title: "World of Warcraft", developer: "Blizzard Entertainment", cover: "https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg")
g3 = Game.create(title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", cover: "https://cdn.cdkeys.com/500x706/media/catalog/product/t/h/the_legend_of_zelda_-_breath_of_the_wild_switch_cover.png")
g4 = Game.create(title: "Fallout 4", developer: "Bethesda", cover: "https://s3.gaming-cdn.com/images/products/755/orig/fallout-4-cover.jpg")
g5 = Game.create(title: "Evil Box Shooter", developer: "Enoch G.", cover: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png")
g6 = Game.create(title: "Witcher 3", developer: "CD Projekt Red", cover: "https://m.media-amazon.com/images/I/510RHE9vePL.jpg")
g7 = Game.create(title: "God Of War", developer: "Santa Monica Studio", cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg")
g8 = Game.create(title: "Resident Evil 2", developer: "Capcom", cover: "https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_2_Remake.jpg")
g9 = Game.create(title: "Star Wars: Jedi Fallen Order", developer: "EA Games", cover: "https://upload.wikimedia.org/wikipedia/en/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg")
g10 = Game.create(title: "Monster Hunter: World", developer: "Capcom", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg")




