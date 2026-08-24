export interface SpotItem {
  name: string;
  neighborhood: string;
  description: string;
  placeUrl: string;
  mapsUrl: string;
}

export type CategoryKey = "Parks & Outdoors" | "Sights & Culture";

export const stuffToDoData: Record<CategoryKey, SpotItem[]> = {
  "Parks & Outdoors": [
    {
      name: "Barton Springs Pool",
      neighborhood: "Zilker Park",
      description: "68° spring-fed pool year-round. An Austin essential.",
      placeUrl: "https://www.austintexas.gov/parks/locations/about-barton-springs-pool",
      mapsUrl: "https://maps.app.goo.gl/2Pm23iBdrNsgMMR37"
    },
    {
      name: "Ann & Roy Butler Hike-and-Bike Trail",
      neighborhood: "Lady Bird Lake",
      description: "10 miles of trail looping the river right next to downtown.",
      placeUrl: "https://www.austintexas.gov/parks/locations/lady-bird-lake",
      mapsUrl: "https://maps.app.goo.gl/3iccE6WRLtp7NJrx7"
    }
  ],
  "Sights & Culture": [
    {
      name: "Blanton Museum of Art",
      neighborhood: "UT Campus",
      description: "Worth the trip alone for Ellsworth Kelly’s standalone stone structure, \"Austin.\"",
      placeUrl: "https://blantonmuseum.org",
      mapsUrl: "https://maps.app.goo.gl/dzof1RKfw7CitYq66"
    },
    {
      name: "Austin Moontowers",
      neighborhood: "Citywide",
      description: "The world's only surviving 19th-century moonlight towers. Spot them throughout the historic neighborhoods at night.",
      placeUrl: "https://savingplaces.org/stories/austin-moontowers-by-the-numbers",
      mapsUrl: "https://maps.app.goo.gl/rFXCBEriNFGkaVyDA"
    },
    {
      name: "Congress Avenue Bats",
      neighborhood: "South Congress",
      description: "Roughly a million Mexican free-tailed bats emerging from beneath the bridge at sunset.",
      placeUrl: "https://www.austinbats.org",
      mapsUrl: "https://maps.app.goo.gl/3wsqpgujsk5LN8Mm9"
    },
    {
      name: "The Thinkery",
      neighborhood: "Mueller",
      description: "Interactive children's museum surrounded by parks and bakeries (for those traveling with kids).",
      placeUrl: "https://thinkeryaustin.org",
      mapsUrl: "https://maps.app.goo.gl/C8gsgnBBM6NP5RK9A"
    }
  ]
};

