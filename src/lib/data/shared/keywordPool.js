
// /home/shahrukh-eng/marketing-proj/src/lib/data/shared/keywordPool.js

/* =====================================================
   MASTER SEO KEYWORD POOL
   Global + Europe Country + Europe City SEO
===================================================== */

const coreKeywords = [
  "Removable Insulation Jackets",
  "Industrial Thermal Protection Systems",
  "High Temperature Insulation Solutions",
  "Energy Saving Insulation Covers",
  "Heat Loss Reduction Systems",
  "Valve Insulation Jackets",
  "Turbine Insulation Systems",
];

const manufacturingKeywords = [
  "Industrial Equipment Insulation Solutions",
  "Custom Thermal Insulation Jackets",
  "Industrial Heat Shield Systems",
  "Reusable Insulation Covers",
  "Industrial Energy Efficiency Solutions",
  "Thermal Safety Insulation Systems",
  "Process Equipment Insulation Covers",
  "Industrial Heat Conservation Systems",
];

const equipmentKeywords = [
  "Valve Thermal Insulation Covers",
  "Flange Insulation Jackets",
  "Pump Thermal Insulation Systems",
  "Turbine Heat Shield Jackets",
  "Generator Exhaust Insulation Covers",
  "Compressor Thermal Protection Jackets",
  "Industrial Piping Insulation Covers",
  "Exhaust Bellows Insulation Systems",
  "Plastic Extruder Thermal Jackets",
  "Boiler Insulation Jackets",
  "Steam Valve Thermal Covers",
  "Engine Exhaust Insulation Covers",
];

const refineryKeywords = [
  "Refinery Insulation Jacket Systems",
  "Oil And Gas Thermal Protection Solutions",
  "Pipeline Heat Loss Prevention Systems",
  "Offshore Equipment Insulation Jackets",
  "Marine Thermal Insulation Systems",
  "Petrochemical Thermal Protection Jackets",
  "Refinery Heat Conservation Systems",
];

const powerKeywords = [
  "Power Plant Insulation Jackets",
  "Generator Heat Shield Solutions",
  "Boiler Insulation Systems",
  "Steam System Thermal Protection",
  "Energy Plant Heat Management Systems",
  "Power Generation Thermal Covers",
];

const chemicalKeywords = [
  "Chemical Plant Insulation Systems",
  "Industrial Process Heat Retention Solutions",
  "Thermal Stability Insulation Covers",
  "Industrial Maintenance Friendly Insulation",
  "Chemical Processing Thermal Protection",
];

const industryKeywords = [
  "Power Plant Thermal Insulation Solutions",
  "Oil And Gas Equipment Insulation Systems",
  "Petrochemical Thermal Protection Jackets",
  "Marine Engine Insulation Covers",
  "Textile Plant Thermal Insulation",
  "Chemical Plant Heat Loss Prevention",
  "Cement Industry Thermal Jackets",
  "Food Processing Thermal Insulation Systems",
  "Pharmaceutical Plant Thermal Covers",
];

const buyerKeywords = [
  "Custom Industrial Insulation Manufacturer",
  "Industrial Insulation Jacket Supplier",
  "High Temperature Insulation Jacket Manufacturer",
  "Industrial Thermal Cover Exporter",
  "Removable Insulation Jacket Company",
  "Industrial Heat Shield Fabrication",
  "Industrial Thermal Cover Supplier",
  "Custom Thermal Jacket Exporter",
];

const commercialKeywords = [
  "Industrial Insulation Services",
  "Industrial Thermal Engineering Solutions",
  "Industrial Heat Reduction Jackets",
  "Factory Energy Saving Insulation",
  "Industrial Safety Heat Shield Covers",
  "Industrial Thermal Management Solutions",
  "Industrial Maintenance Insulation Systems",
];

/* =====================================================
   SAFE MASTER POOL
   IMPORTANT:
   No country-specific export keywords here.
   This prevents Saudi/UAE keywords appearing on Europe pages.
===================================================== */

export const keywordPool = [
  ...coreKeywords,
  ...manufacturingKeywords,
  ...equipmentKeywords,
  ...refineryKeywords,
  ...powerKeywords,
  ...chemicalKeywords,
  ...industryKeywords,
  ...buyerKeywords,
  ...commercialKeywords,
];

export function getRotatedKeyword(seed = 0) {
  const index = Math.abs(seed) % keywordPool.length;
  return keywordPool[index];
}

/* =====================================================
   EUROPE COUNTRY GEO KEYWORDS
   Only countries from europeCountries.js
===================================================== */

export const countryKeywordMap = {
  germany: [
    "Germany industrial insulation jackets",
    "Germany manufacturing thermal insulation covers",
    "Germany automotive plant insulation systems",
    "Germany chemical processing insulation jackets",
    "Germany energy plant heat loss reduction covers",
    "Germany industrial machinery heat shields",
    "Germany valve insulation jacket supplier",
    "Germany turbine insulation manufacturer",
  ],

  france: [
    "France industrial insulation jackets",
    "France energy plant thermal insulation covers",
    "France refinery insulation systems",
    "France aerospace thermal protection jackets",
    "France chemical processing insulation covers",
    "France manufacturing heat loss reduction systems",
    "France valve insulation supplier",
    "France industrial thermal cover exporter",
  ],

  "united-kingdom": [
    "United Kingdom industrial insulation jackets",
    "UK oil and gas insulation covers",
    "UK marine thermal insulation jackets",
    "UK power generation insulation systems",
    "UK engineering plant heat shields",
    "UK industrial valve insulation covers",
    "UK removable insulation jacket supplier",
    "UK thermal cover exporter",
  ],

  italy: [
    "Italy industrial insulation jackets",
    "Italy manufacturing thermal insulation covers",
    "Italy automotive plant heat shields",
    "Italy industrial engineering insulation systems",
    "Italy process equipment insulation covers",
    "Italy valve insulation jackets",
    "Italy turbine thermal insulation systems",
    "Italy industrial thermal cover supplier",
  ],

  spain: [
    "Spain industrial insulation jackets",
    "Spain energy plant insulation covers",
    "Spain refinery thermal insulation systems",
    "Spain manufacturing heat shield covers",
    "Spain industrial valve insulation jackets",
    "Spain process equipment thermal covers",
    "Spain turbine insulation systems",
    "Spain energy saving insulation supplier",
  ],

  netherlands: [
    "Netherlands industrial insulation jackets",
    "Netherlands chemical plant insulation covers",
    "Netherlands marine thermal insulation systems",
    "Netherlands oil and gas insulation jackets",
    "Netherlands port industry heat shields",
    "Netherlands valve insulation supplier",
    "Netherlands piping insulation covers",
    "Netherlands thermal cover exporter",
  ],

  belgium: [
    "Belgium industrial insulation jackets",
    "Belgium chemical processing insulation covers",
    "Belgium industrial manufacturing heat shields",
    "Belgium process equipment insulation systems",
    "Belgium refinery thermal insulation jackets",
    "Belgium valve insulation covers",
    "Belgium energy saving insulation systems",
    "Belgium industrial thermal cover supplier",
  ],

  sweden: [
    "Sweden industrial insulation jackets",
    "Sweden energy plant insulation covers",
    "Sweden marine thermal insulation systems",
    "Sweden sustainable manufacturing heat shields",
    "Sweden industrial valve insulation jackets",
    "Sweden turbine insulation systems",
    "Sweden process heat retention covers",
    "Sweden industrial thermal cover exporter",
  ],

  norway: [
    "Norway industrial insulation jackets",
    "Norway offshore thermal insulation systems",
    "Norway oil and gas insulation covers",
    "Norway marine engine heat shields",
    "Norway power generation insulation jackets",
    "Norway valve insulation covers",
    "Norway offshore platform insulation jackets",
    "Norway industrial thermal cover supplier",
  ],

  denmark: [
    "Denmark industrial insulation jackets",
    "Denmark wind energy thermal protection systems",
    "Denmark power system insulation covers",
    "Denmark manufacturing heat shield jackets",
    "Denmark turbine thermal insulation covers",
    "Denmark valve insulation supplier",
    "Denmark energy saving insulation systems",
    "Denmark industrial thermal cover exporter",
  ],
};

/* =====================================================
   EUROPE CITY GEO KEYWORDS
   Only cities from europeCountries.js
===================================================== */

export const cityKeywordMap = {
  berlin: [
    "Berlin industrial insulation jackets",
    "Berlin manufacturing insulation covers",
    "Berlin factory heat loss reduction systems",
    "Berlin industrial valve insulation jackets",
    "Berlin energy saving insulation covers",
    "Berlin industrial thermal cover supplier",
  ],
  hamburg: [
    "Hamburg marine insulation jackets",
    "Hamburg port industry thermal covers",
    "Hamburg shipyard heat shield covers",
    "Hamburg industrial insulation supplier",
    "Hamburg valve insulation jackets",
    "Hamburg piping insulation covers",
  ],
  munich: [
    "Munich automotive plant insulation jackets",
    "Munich precision manufacturing thermal covers",
    "Munich industrial machinery heat shields",
    "Munich valve insulation covers",
    "Munich energy saving insulation systems",
    "Munich industrial thermal supplier",
  ],
  cologne: [
    "Cologne chemical processing insulation jackets",
    "Cologne industrial process thermal covers",
    "Cologne refinery heat shield covers",
    "Cologne valve insulation jackets",
    "Cologne piping insulation systems",
    "Cologne industrial insulation supplier",
  ],
  frankfurt: [
    "Frankfurt industrial insulation jackets",
    "Frankfurt energy systems thermal covers",
    "Frankfurt process equipment insulation covers",
    "Frankfurt valve insulation jackets",
    "Frankfurt industrial heat shield systems",
    "Frankfurt thermal cover supplier",
  ],

  paris: [
    "Paris industrial insulation jackets",
    "Paris energy plant insulation covers",
    "Paris aerospace thermal protection systems",
    "Paris valve insulation jackets",
    "Paris process equipment insulation covers",
    "Paris industrial thermal supplier",
  ],
  lyon: [
    "Lyon chemical processing insulation jackets",
    "Lyon industrial thermal systems",
    "Lyon manufacturing heat shield covers",
    "Lyon valve insulation jackets",
    "Lyon process equipment insulation",
    "Lyon industrial insulation supplier",
  ],
  marseille: [
    "Marseille marine insulation jackets",
    "Marseille refinery thermal covers",
    "Marseille port industry insulation systems",
    "Marseille shipyard heat shield covers",
    "Marseille valve insulation jackets",
    "Marseille piping insulation covers",
  ],
  toulouse: [
    "Toulouse aerospace insulation jackets",
    "Toulouse industrial thermal covers",
    "Toulouse manufacturing heat shields",
    "Toulouse valve insulation systems",
    "Toulouse process equipment insulation",
    "Toulouse industrial insulation supplier",
  ],
  nice: [
    "Nice industrial insulation jackets",
    "Nice utility thermal insulation covers",
    "Nice marine heat shield covers",
    "Nice valve insulation jackets",
    "Nice energy saving insulation systems",
    "Nice industrial thermal supplier",
  ],

  london: [
    "London industrial insulation jackets",
    "London engineering thermal systems",
    "London power generation insulation covers",
    "London valve insulation jackets",
    "London process equipment insulation",
    "London industrial insulation supplier",
  ],
  manchester: [
    "Manchester manufacturing insulation jackets",
    "Manchester factory heat shield covers",
    "Manchester industrial valve insulation systems",
    "Manchester energy saving insulation covers",
    "Manchester process thermal jackets",
    "Manchester industrial insulation supplier",
  ],
  birmingham: [
    "Birmingham engineering insulation jackets",
    "Birmingham manufacturing thermal covers",
    "Birmingham industrial heat shield systems",
    "Birmingham valve insulation covers",
    "Birmingham piping insulation jackets",
    "Birmingham industrial thermal supplier",
  ],
  glasgow: [
    "Glasgow marine insulation jackets",
    "Glasgow power generation thermal covers",
    "Glasgow industrial heat shields",
    "Glasgow valve insulation systems",
    "Glasgow energy saving insulation covers",
    "Glasgow industrial insulation supplier",
  ],
  liverpool: [
    "Liverpool port industry insulation covers",
    "Liverpool marine thermal jackets",
    "Liverpool industrial heat shield systems",
    "Liverpool valve insulation jackets",
    "Liverpool piping insulation covers",
    "Liverpool industrial thermal supplier",
  ],

  milan: [
    "Milan industrial insulation jackets",
    "Milan manufacturing thermal covers",
    "Milan automotive plant heat shields",
    "Milan valve insulation jackets",
    "Milan process equipment insulation",
    "Milan industrial insulation supplier",
  ],
  rome: [
    "Rome industrial insulation jackets",
    "Rome energy plant insulation covers",
    "Rome industrial heat shield systems",
    "Rome valve insulation covers",
    "Rome thermal cover supplier",
    "Rome process equipment insulation",
  ],
  turin: [
    "Turin automotive insulation jackets",
    "Turin industrial engineering thermal covers",
    "Turin manufacturing heat shields",
    "Turin valve insulation systems",
    "Turin energy saving insulation covers",
    "Turin industrial insulation supplier",
  ],
  naples: [
    "Naples marine insulation jackets",
    "Naples industrial thermal covers",
    "Naples port industry heat shields",
    "Naples valve insulation jackets",
    "Naples piping insulation covers",
    "Naples industrial thermal supplier",
  ],
  bologna: [
    "Bologna manufacturing insulation jackets",
    "Bologna industrial machinery thermal covers",
    "Bologna process equipment heat shields",
    "Bologna valve insulation systems",
    "Bologna energy saving insulation covers",
    "Bologna industrial insulation supplier",
  ],

  madrid: [
    "Madrid industrial insulation jackets",
    "Madrid energy plant insulation covers",
    "Madrid manufacturing heat shield systems",
    "Madrid valve insulation jackets",
    "Madrid process equipment thermal covers",
    "Madrid industrial insulation supplier",
  ],
  barcelona: [
    "Barcelona industrial insulation jackets",
    "Barcelona refinery thermal insulation covers",
    "Barcelona port industry heat shields",
    "Barcelona valve insulation systems",
    "Barcelona piping insulation covers",
    "Barcelona industrial thermal supplier",
  ],
  valencia: [
    "Valencia industrial insulation jackets",
    "Valencia manufacturing thermal covers",
    "Valencia port industry insulation systems",
    "Valencia valve insulation covers",
    "Valencia energy saving insulation jackets",
    "Valencia industrial insulation supplier",
  ],
  bilbao: [
    "Bilbao refinery insulation jackets",
    "Bilbao industrial heat shield covers",
    "Bilbao energy plant thermal systems",
    "Bilbao valve insulation jackets",
    "Bilbao piping insulation covers",
    "Bilbao industrial thermal supplier",
  ],
  seville: [
    "Seville industrial insulation jackets",
    "Seville manufacturing heat loss covers",
    "Seville energy saving insulation systems",
    "Seville valve insulation covers",
    "Seville process equipment insulation",
    "Seville industrial insulation supplier",
  ],

  amsterdam: [
    "Amsterdam industrial insulation jackets",
    "Amsterdam port industry thermal covers",
    "Amsterdam marine insulation systems",
    "Amsterdam valve insulation jackets",
    "Amsterdam piping insulation covers",
    "Amsterdam industrial thermal supplier",
  ],
  rotterdam: [
    "Rotterdam refinery insulation jackets",
    "Rotterdam port industry heat shields",
    "Rotterdam oil and gas insulation covers",
    "Rotterdam marine thermal systems",
    "Rotterdam valve insulation jackets",
    "Rotterdam industrial insulation supplier",
  ],
  utrecht: [
    "Utrecht industrial insulation jackets",
    "Utrecht manufacturing thermal covers",
    "Utrecht process equipment heat shields",
    "Utrecht valve insulation systems",
    "Utrecht energy saving insulation covers",
    "Utrecht industrial thermal supplier",
  ],
  eindhoven: [
    "Eindhoven high tech manufacturing insulation jackets",
    "Eindhoven industrial machinery thermal covers",
    "Eindhoven factory heat shield systems",
    "Eindhoven valve insulation jackets",
    "Eindhoven process equipment insulation",
    "Eindhoven industrial insulation supplier",
  ],
  groningen: [
    "Groningen energy industry insulation jackets",
    "Groningen industrial thermal covers",
    "Groningen process heat retention systems",
    "Groningen valve insulation covers",
    "Groningen piping insulation jackets",
    "Groningen industrial thermal supplier",
  ],

  brussels: [
    "Brussels industrial insulation jackets",
    "Brussels chemical processing thermal covers",
    "Brussels manufacturing heat shields",
    "Brussels valve insulation systems",
    "Brussels process equipment insulation",
    "Brussels industrial insulation supplier",
  ],
  antwerp: [
    "Antwerp port industry insulation jackets",
    "Antwerp chemical plant thermal covers",
    "Antwerp refinery heat shield systems",
    "Antwerp valve insulation covers",
    "Antwerp piping insulation jackets",
    "Antwerp industrial thermal supplier",
  ],
  ghent: [
    "Ghent industrial insulation jackets",
    "Ghent manufacturing thermal covers",
    "Ghent chemical processing heat shields",
    "Ghent valve insulation systems",
    "Ghent process equipment insulation",
    "Ghent industrial insulation supplier",
  ],
  liege: [
    "Liege industrial insulation jackets",
    "Liege steel industry thermal covers",
    "Liege manufacturing heat shield systems",
    "Liege valve insulation covers",
    "Liege energy saving insulation jackets",
    "Liege industrial thermal supplier",
  ],
  bruges: [
    "Bruges industrial insulation jackets",
    "Bruges port industry thermal covers",
    "Bruges marine heat shield systems",
    "Bruges valve insulation jackets",
    "Bruges piping insulation covers",
    "Bruges industrial insulation supplier",
  ],

  stockholm: [
    "Stockholm industrial insulation jackets",
    "Stockholm energy efficiency thermal covers",
    "Stockholm manufacturing heat shields",
    "Stockholm valve insulation systems",
    "Stockholm turbine insulation covers",
    "Stockholm industrial thermal supplier",
  ],
  gothenburg: [
    "Gothenburg marine insulation jackets",
    "Gothenburg port industry heat shields",
    "Gothenburg manufacturing thermal covers",
    "Gothenburg valve insulation jackets",
    "Gothenburg piping insulation systems",
    "Gothenburg industrial insulation supplier",
  ],
  malmo: [
    "Malmo industrial insulation jackets",
    "Malmo manufacturing thermal covers",
    "Malmo energy saving heat shields",
    "Malmo valve insulation systems",
    "Malmo process equipment insulation",
    "Malmo industrial thermal supplier",
  ],
  uppsala: [
    "Uppsala pharmaceutical plant insulation jackets",
    "Uppsala industrial thermal covers",
    "Uppsala process equipment heat shields",
    "Uppsala valve insulation covers",
    "Uppsala energy saving insulation systems",
    "Uppsala industrial insulation supplier",
  ],
  vasteras: [
    "Vasteras energy plant insulation jackets",
    "Vasteras industrial thermal covers",
    "Vasteras power equipment heat shields",
    "Vasteras valve insulation systems",
    "Vasteras turbine insulation covers",
    "Vasteras industrial insulation supplier",
  ],

  oslo: [
    "Oslo industrial insulation jackets",
    "Oslo offshore thermal insulation covers",
    "Oslo marine heat shield systems",
    "Oslo valve insulation jackets",
    "Oslo power generation insulation covers",
    "Oslo industrial thermal supplier",
  ],
  bergen: [
    "Bergen marine insulation jackets",
    "Bergen offshore insulation covers",
    "Bergen port industry heat shields",
    "Bergen valve insulation systems",
    "Bergen piping insulation covers",
    "Bergen industrial insulation supplier",
  ],
  stavanger: [
    "Stavanger oil and gas insulation jackets",
    "Stavanger offshore platform thermal covers",
    "Stavanger refinery heat shield systems",
    "Stavanger valve insulation covers",
    "Stavanger piping insulation jackets",
    "Stavanger industrial thermal supplier",
  ],
  trondheim: [
    "Trondheim industrial insulation jackets",
    "Trondheim marine thermal covers",
    "Trondheim energy system heat shields",
    "Trondheim valve insulation systems",
    "Trondheim process equipment insulation",
    "Trondheim industrial insulation supplier",
  ],
  tromso: [
    "Tromso marine insulation jackets",
    "Tromso offshore thermal covers",
    "Tromso industrial heat shield systems",
    "Tromso valve insulation covers",
    "Tromso energy saving insulation jackets",
    "Tromso industrial thermal supplier",
  ],

  copenhagen: [
    "Copenhagen industrial insulation jackets",
    "Copenhagen wind energy thermal protection",
    "Copenhagen power system insulation covers",
    "Copenhagen valve insulation jackets",
    "Copenhagen turbine insulation systems",
    "Copenhagen industrial thermal supplier",
  ],
  aarhus: [
    "Aarhus industrial insulation jackets",
    "Aarhus manufacturing thermal covers",
    "Aarhus marine heat shield systems",
    "Aarhus valve insulation covers",
    "Aarhus energy saving insulation systems",
    "Aarhus industrial insulation supplier",
  ],
  odense: [
    "Odense manufacturing insulation jackets",
    "Odense industrial machinery thermal covers",
    "Odense factory heat shield systems",
    "Odense valve insulation jackets",
    "Odense process equipment insulation",
    "Odense industrial thermal supplier",
  ],
  aalborg: [
    "Aalborg industrial insulation jackets",
    "Aalborg power system thermal covers",
    "Aalborg energy plant heat shields",
    "Aalborg valve insulation covers",
    "Aalborg piping insulation systems",
    "Aalborg industrial insulation supplier",
  ],
  esbjerg: [
    "Esbjerg offshore insulation jackets",
    "Esbjerg wind energy thermal covers",
    "Esbjerg marine heat shield systems",
    "Esbjerg valve insulation jackets",
    "Esbjerg piping insulation covers",
    "Esbjerg industrial thermal supplier",
  ],
};

/* =====================================================
   GEO KEYWORD BUILDERS
===================================================== */

function unique(arr = []) {
  return [...new Set(arr.filter(Boolean))];
}

function withLocation(keywords, location) {
  return keywords.map((keyword) => `${keyword} in ${location}`);
}

export function buildCountryRelatedKeywords(country) {
  if (!country?.slug || !country?.name) return [];

  return unique([
    ...withLocation(commercialKeywords, country.name),
    ...withLocation(equipmentKeywords, country.name),
    ...(countryKeywordMap[country.slug] || []),
    `industrial insulation jacket supplier in ${country.name}`,
    `removable insulation jacket manufacturer in ${country.name}`,
    `thermal insulation cover exporter to ${country.name}`,
    `custom heat shield covers for ${country.name} industries`,
  ]);
}

export function buildCityRelatedKeywords(city, country) {
  if (!city?.name || !city?.display || !country?.slug || !country?.name) {
    return [];
  }

  const location = `${city.display}, ${country.name}`;

  return unique([
    ...withLocation(commercialKeywords, location),
    ...withLocation(equipmentKeywords, location),
    ...(cityKeywordMap[city.name] || []),
    ...(countryKeywordMap[country.slug] || []).slice(0, 4),
    `industrial insulation jacket supplier in ${location}`,
    `removable insulation jacket manufacturer in ${location}`,
    `thermal insulation cover exporter to ${location}`,
    `custom thermal insulation jackets for industries in ${location}`,
  ]);
}

/* =====================================================
   OPTIONAL CATEGORY EXPORTS
===================================================== */

export {
  coreKeywords,
  manufacturingKeywords,
  equipmentKeywords,
  refineryKeywords,
  powerKeywords,
  chemicalKeywords,
  industryKeywords,
  buyerKeywords,
  commercialKeywords,
};
