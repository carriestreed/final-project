# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Photo.delete_all

Photo.create!([
  {
    id: 1,
    url: 'https://www.newscientist.com/blogs/shortsharpscience/assets_c/2011/06/00130493-thumb-600x400-128963.jpg',
    title: 'Salt Flats',
    description: 'Trippin screening phone calls parting your hair down the middle the Truman Show. Dolly the Sheep flip flops Fresh Prince of Bel-Air sideburns gangsta’s paradise, Air Jordans cargo pants Geo Metro incididunt Oakleys. Michael Jordan Spice Girls animated GIFs Sublime frosted tips gettin’ jiggy wit it. Choker necklace Nirvana laborum Kazaa Saved by the Bell. As I lay me down to sleep Roseanne Hush Puppies nylon windbreaker Tommy Hilfiger duis.',
    author: 'Eustace',
    date: 'April 9',
    location: 'Bolivia',
  },
  {
    id: 2,
    url: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/08/Greenland-Huts-Wallpapers.jpg',
    title: 'Greenland Huts',
    description: 'Minesweeper Deep Blue Ford Explorer turtlenecks occaecat renting movies at a store. Tae Bo VCR end of the road incididunt voluptate Central Perk. I don’t want no scrubs sports utility vehicles do ripped jeans, Cory Matthews Toni Braxton exercitation visor New Kids on the Block. Keepin’ it real Keanu Reeves quis you’ve got mail Steve Urkel Union Jack. New Jack City pogs zebra stripes AC Slater. Boombox Napster khaki discovery zone accent braids.',
    author: 'Archibald',
    date: 'December 24',
    location: 'Greenland',
  },
  {
    id: 3,
    url: 'http://cdn.shopify.com/s/files/1/0326/7189/products/amazon_animal.png?v=1437489816',
    title: 'Vibrant',
    description: 'Ring pops bop it Sugar Ray leotards. Turquoise internet beepers renting movies at a store Im king of the world velit, in biker shorts Jonathan Taylor Thomas Lunchables Encarta.',
    author: 'Rupert',
    date: 'April 9',
    location: 'Amazon',
  },
  {
    id: 4,
    url: 'http://www.thebeautyoftravel.com/wp-content/uploads/2015/05/Lake-Retba-Senegal.jpg',
    title: 'Pink Lake',
    description: 'Overalls dope Mr. Jones and me tell each other fairy tales New Kids on the Block pop punk qui. PlayStation Tupac Shakur aviators Eminem, cassette tape Apollo 13 West Wing Destiny’s Child. Macaulay Culkin the Macarena Pixar baby got back the more you know. Enim Rodney King riots exercitation carpenter pants, Nike Speed catsuit Miss Cleo. End of the road turtlenecks leopard print Game Boy Color.',
    author: 'Gertrude',
    date: 'January 2',
    location: 'Senegal',
  },
  {
    id: 5,
    url: 'http://maldivesholidayoffers.com/assets/resorts/db4ed-baros-maldives.jpg',
    title: "Let's get away",
    description: 'Bomber jacket pogs instant messaging don’t ask don’t tell laboris mollit, Chronic Patti Mayonnaise Destiny’s Child Beanie Babies Airwalk. Skate tees dope bandanas Oasis, Fila digital pets piercings millenials. Labore Ford Explorer Air Jordans Kurt Cobain Oakleys incididunt. Alternative rock velit leotards est. Mad props home skillet Nirvana Mr. Jones and me tell each other fairy tales minim.',
    author: 'Waldo',
    date: 'May 31',
    location: 'Maldives',
  },
])
