export interface SpotItem {
  name: string;
  neighborhood: string;
  description: string;
  placeUrl: string;
  mapsUrl: string;
}

export type CategoryKey = "Food & Drink" | "Parks & Outdoors" | "Sights & Culture";

export const stuffToDoData: Record<CategoryKey, SpotItem[]> = {
  "Food & Drink": [
    {
      name: "Whisler's",
      neighborhood: "East Austin",
      description: "One of Mike's favorite spots - the best smoky Old Fashioned!",
      placeUrl: "https://www.whislersatx.com",
      mapsUrl: "https://maps.app.goo.gl/hENcunwcRqbhDHTn8"
    },
    {
      name: "Terry Black's BBQ",
      neighborhood: "Barton Springs Rd",
      description: "Iconic Texas barbecue just south of the river. Worth the wait!",
      placeUrl: "https://terryblacksbbq.com",
      mapsUrl: "https://maps.app.goo.gl/nRZ4MZbjo2mw7gmWA"
    },
    {
      name: "El Chilito",
      neighborhood: "East Austin",
      description: "Jordan's go-to breakfast taco spot—get the Cherrywood!",
      placeUrl: "https://www.elchilito.com",
      mapsUrl: "https://maps.app.goo.gl/tJg66wHrkTriGTAWA"
    },
    {
      name: "Sour Duck",
      neighborhood: "East Austin",
      description: "Mike & Jordan's favorite east side dinner spot and bakery",
      placeUrl: "https://www.sourduckmarket.com",
      mapsUrl: "https://maps.app.goo.gl/H3o75phMYTY2gS9f7"
    },
    {
      name: "Meanwhile Brewing",
      neighborhood: "South Austin",
      description: "Great brewery with food trucks, massive tree canopy, and plenty of space.",
      placeUrl: "https://www.meanwhilebeer.com",
      mapsUrl: "https://maps.app.goo.gl/7RR1dZ3cpXLf5DeS9"
    }
  ],
  "Parks & Outdoors": [
    {
      name: "Barton Springs Pool",
      neighborhood: "Zilker Park",
      description: "Historic natural spring-fed pool that stays 68° year-round.",
      placeUrl: "https://www.austintexas.gov/parks/locations/about-barton-springs-pool",
      mapsUrl: "https://maps.app.goo.gl/2Pm23iBdrNsgMMR37"
    },
    {
      name: "Lady Bird Lake",
      neighborhood: "Downtown",
      description: "Ideal spot for kayaking, paddleboarding, or a stroll along the Ann & Roy Butler Hike-and-Bike Trail.",
      placeUrl: "https://www.austintexas.gov/parks/locations/lady-bird-lake",
      mapsUrl: "https://maps.app.goo.gl/3iccE6WRLtp7NJrx7"
    }
  ],
  "Sights & Culture": [
    {
      name: "Blanton Museum of Art",
      neighborhood: "UT Campus",
      description: "Iconic art museum featuring Ellsworth Kelly's Austin.",
      placeUrl: "https://blantonmuseum.org",
      mapsUrl: "https://maps.app.goo.gl/dzof1RKfw7CitYq66"
    },
    {
      name: "The Thinkery",
      neighborhood: "Mueller",
      description: "Interactive discovery museum surrounded by great food and park space.",
      placeUrl: "https://thinkeryaustin.org",
      mapsUrl: "https://maps.app.goo.gl/C8gsgnBBM6NP5RK9A"
    },
    {
      name: "Bats at Congress Ave Bridge",
      neighborhood: "South Congress",
      description: "Watch over 1M Mexican free-tailed bats take flight at sunset.",
      placeUrl: "https://www.austinbats.org",
      mapsUrl: "https://maps.app.goo.gl/3wsqpgujsk5LN8Mm9"
    },
    {
      name: "Austin Moontowers",
      neighborhood: "Citywide",
      description: "The only remaining historic moonlight towers in the world.",
      placeUrl: "https://savingplaces.org/stories/austin-moontowers-by-the-numbers",
      mapsUrl: "https://maps.app.goo.gl/rFXCBEriNFGkaVyDA"
    }
  ]
};

