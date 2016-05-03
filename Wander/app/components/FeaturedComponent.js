'use strict'

import React, {
  Component,
  Text,
  StyleSheet,
} from 'react-native'


const hpFeaturedData = [
  {
    id: 1,
    url: "https://www.newscientist.com/blogs/shortsharpscience/assets_c/2011/06/00130493-thumb-600x400-128963.jpg",
    title: "Salt Flats",
    description: "Trippin screening phone calls parting your hair down the middle the Truman Show. Dolly the Sheep flip flops Fresh Prince of Bel-Air sideburns gangsta’s paradise, Air Jordans cargo pants Geo Metro incididunt Oakleys. Michael Jordan Spice Girls animated GIFs Sublime frosted tips gettin’ jiggy wit it. Choker necklace Nirvana laborum Kazaa Saved by the Bell. As I lay me down to sleep Roseanne Hush Puppies nylon windbreaker Tommy Hilfiger duis.",
    author: "Eustace",
    date: "April 9",
    location: "Bolivia",
    created_at: "2016-05-01T20:46:15.497Z",
    updated_at: "2016-05-01T20:46:15.497Z"
  }
]


class FeaturedComponent extends Component {

  render(){
    return(
      <Text style={styles.temp}>
        Pixar home skillet lorem Umbro shorts, Fargo hoodies ain’t no thang your mom. Cornrows eu Beanie Babies rollerblades Sugar Ray, Nickelodeon officia world wide web Ghost pottery scene. Veniam nisi Taco Bell chihuahua LA Gear cut-off jean shorts hoop earrings, turquoise sunt Hot Pockets laborum. Eiusmod bare midriffs yin yang zebra stripes.
        Game Boy Color Savage Garden Ford Taurus Dolly the Sheep. I will be your father figure Snoop Dogg Umbro shorts Hot Pockets, aliqua personal computer beepers bowl cut Alta Vista accent braids. Seattle Supersonics VCR coral crib Street Fighter II inflatable furniture, Oasis Courtney Love turtlenecks valley girl Independence Day grunge. Taco Bell chihuahua wallet chains yo quiero Taco Bell Toyota Previa super soaker scrolling text.
        Hot pink choker necklace dope Britpop cassette tape, in trippin’ your mom ut. Digital pets smells like teen spirit dial-up Sublime Seattle Supersonics, Encarta Green Day Hush Puppies Seinfeld my heart will go on. Julia Roberts Cory Matthews crimped hair Aerosmith. Cable modem vertically striped shirts rad biker shorts.
        Roseanne New Kids on the Block dolor trainers. Lunchables Warheads Braveheart as I lay me down to sleep, yin yang scrolling text pop punk gangsta’s paradise animated GIFs. Millenials reprehenderit Seattle Supersonics parting your hair down the middle necklaces with your name on a grain of rice officia, Netscape Navigator Moby track jackets ullamco. Velit trippin’ playa Uncle Phil Giga Pets.
      </Text>
    )
  }
}


const styles=StyleSheet.create({
  temp: {
    backgroundColor: 'transparent',
  },
});


export default FeaturedComponent;
