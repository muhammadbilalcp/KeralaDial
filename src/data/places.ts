// Master Kerala Database - Covering All 14 Districts & Registered Local Businesses
import { PlaceItem, DistrictInfo, KeralaDistrict, BusinessListing } from '../types';

export const DISTRICT_INFO: Record<KeralaDistrict, DistrictInfo> = {
  Kasaragod: {
    name: 'Kasaragod',
    title: 'Land of Gods & Forts',
    tagline: 'Northernmost coastal haven of seven tongues, ancient forts, and red-earth hills',
    count: 217,
    color: '#0284c7',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    iconName: 'Shield',
    description: 'Home to Bekal Fort, Ranipuram mist peaks, and serene coastal waterways.'
  },
  Kannur: {
    name: 'Kannur',
    title: 'Land of Looms and Lores',
    tagline: 'Cradle of mystical Theyyam, handloom traditions, and pristine drive-in beaches',
    count: 82,
    color: '#0d9488',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    iconName: 'Compass',
    description: 'Renowned for fiery Theyyam rituals, Muzhappilangad drive-in beach, and historic Thalassery.'
  },
  Wayanad: {
    name: 'Wayanad',
    title: 'Mist Mountains & Wildlife',
    tagline: 'Highland plateau of waterfalls, spice plantations, prehistoric caves, and wildlife',
    count: 37,
    color: '#16a34a',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'Mountain',
    description: 'Famous for Chembra peak, Banasura dam, Edakkal caves, and lush biodiversity.'
  },
  Kozhikode: {
    name: 'Kozhikode',
    title: 'City of Spices & Hospitality',
    tagline: 'Malabar cultural capital, historic spice port, Koodathai foothills, and culinary haven',
    count: 89,
    color: '#ea580c',
    badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
    iconName: 'Ship',
    description: 'Famed for Malabar biryani, SM Street, Beypore shipbuilding, and foothill towns like Koodathai and Thamarassery.'
  },
  Malappuram: {
    name: 'Malappuram',
    title: 'Hills, Heritage & Football',
    tagline: 'Cultural heartland of Ayurveda, historic mosques, teak forests, and football fever',
    count: 37,
    color: '#15803d',
    badgeBg: 'bg-green-50 text-green-700 border-green-200',
    iconName: 'Building',
    description: 'Home to Kottakkal Arya Vaidya Sala, historic Nilambur teak museum, and Tirur.'
  },
  Palakkad: {
    name: 'Palakkad',
    title: 'Granary of Kerala',
    tagline: 'Gateway gap to Tamil Nadu, vast emerald paddy fields, and historic Tipu fort',
    count: 30,
    color: '#ca8a04',
    badgeBg: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    iconName: 'Palmtree',
    description: 'Famous for Palakkad Fort, Malampuzha Dam, Silent Valley National Park, and palm groves.'
  },
  Thrissur: {
    name: 'Thrissur',
    title: 'Cultural Capital of Kerala',
    tagline: 'Epicenter of Thrissur Pooram, classical performing arts, and venerated temples',
    count: 60,
    color: '#b45309',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    iconName: 'Crown',
    description: 'World-renowned for the Pooram festival, Vadakkumnathan temple, and Guruvayur.'
  },
  Ernakulam: {
    name: 'Ernakulam',
    title: 'Commercial Capital & Port City',
    tagline: 'The Queen of the Arabian Sea, blending historic Fort Kochi with modern Infopark',
    count: 47,
    color: '#6366f1',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    iconName: 'Anchor',
    description: 'Economic powerhouse featuring Fort Kochi colonial alleys, Cochin Port, and metro network.'
  },
  Idukki: {
    name: 'Idukki',
    title: 'Spice Garden & Western Ghats',
    tagline: 'Towering arch dam, misty Munnar tea hills, and rich wildlife sanctuaries',
    count: 28,
    color: '#047857',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'Trees',
    description: 'Renowned for Munnar hill station, Idukki Arch Dam, Thekkady wildlife, and spice plantations.'
  },
  Kottayam: {
    name: 'Kottayam',
    title: 'Land of Letters, Lakes & Latex',
    tagline: 'First 100% literate district, rubber plantations, and backwater serenity of Kumarakom',
    count: 27,
    color: '#0891b2',
    badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    iconName: 'BookOpen',
    description: 'Famous for Kumarakom bird sanctuary, Vembanad backwaters, and publishing heritage.'
  },
  Alappuzha: {
    name: 'Alappuzha',
    title: 'Venice of the East',
    tagline: 'Labyrinth of shimmering backwaters, houseboats, and below-sea-level paddy fields',
    count: 40,
    color: '#059669',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'Waves',
    description: 'Famous worldwide for houseboat canals, the Nehru Trophy Snake Boat Race, and Kuttanad.'
  },
  Pathanamthitta: {
    name: 'Pathanamthitta',
    title: 'Pilgrim Hub of Kerala',
    tagline: 'Spiritual epicenter surrounded by sacred rivers, elephant training, and dense forests',
    count: 23,
    color: '#e11d48',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    iconName: 'Sun',
    description: 'Gateway to Sabarimala, Aranmula metal mirrors, Konni elephant reserve, and sacred Pamba river.'
  },
  Kollam: {
    name: 'Kollam',
    title: 'Cashew Hub & Gateway to Backwaters',
    tagline: 'Historic seaport on Ashtamudi Lake, known for trade heritage and cashew processing',
    count: 40,
    color: '#7c3aed',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    iconName: 'Sparkles',
    description: 'Picturesque gateway to eight-armed Ashtamudi Lake, Munroe Island, and maritime Tangasseri.'
  },
  Thiruvananthapuram: {
    name: 'Thiruvananthapuram',
    title: 'State Capital & Royal Heritage',
    tagline: 'Administrative throne of Kerala, home to Padmanabhaswamy Temple and Technopark',
    count: 58,
    color: '#dc2626',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    iconName: 'Landmark',
    description: 'Capital city hosting Sree Padmanabhaswamy Temple, Kovalam beach, Varkala, and Technopark.'
  }
};

export const ALL_KERALA_PLACES: PlaceItem[] = [
  {
    "id": "kasaragod-kasaragod",
    "name": "Kasaragod",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kasaragod is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod HQ"
  },
  {
    "id": "kanhangad-kasaragod",
    "name": "Kanhangad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kanhangad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "nileshwar-kasaragod",
    "name": "Nileshwar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Nileshwar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "uppala-kasaragod",
    "name": "Uppala",
    "district": "Kasaragod",
    "category": "Urban & Commercial",
    "zone": "North Malabar",
    "tagline": "Vibrant commercial municipality in Kasaragod",
    "description": "Uppala is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Kasaragod.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "trikaripur-kasaragod",
    "name": "Trikaripur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Trikaripur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "udma-kasaragod",
    "name": "Udma",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Udma is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kumbla-kasaragod",
    "name": "Kumbla",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kumbla is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "cheruvathur-kasaragod",
    "name": "Cheruvathur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Cheruvathur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bekal-kasaragod",
    "name": "Bekal",
    "district": "Kasaragod",
    "category": "Heritage & Culture",
    "zone": "North Malabar",
    "tagline": "Iconic 17th-century coastal fort and pristine Arabian sea coastline",
    "description": "Bekal is renowned globally for the keyhole-shaped Bekal Fort, the largest fort in Kerala with sweeping sea views, observation towers, and lush beachscapes.",
    "notableFor": [
      "Bekal Fort",
      "Bekal Beach Park",
      "Pallikere Beach",
      "Historic Bastions"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "manjeshwar-kasaragod",
    "name": "Manjeshwar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Manjeshwar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "puthige-kasaragod",
    "name": "Puthige",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Puthige is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "paivalike-kasaragod",
    "name": "Paivalike",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Paivalike is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "vorkady-kasaragod",
    "name": "Vorkady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Vorkady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "meenja-kasaragod",
    "name": "Meenja",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Meenja is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "perla-kasaragod",
    "name": "Perla",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Perla is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "hosabettu-kasaragod",
    "name": "Hosabettu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Hosabettu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "thalapady-kasaragod",
    "name": "Thalapady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Thalapady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mogral-puthur-kasaragod",
    "name": "Mogral Puthur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mogral Puthur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "badiyadka-kasaragod",
    "name": "Badiyadka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Badiyadka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "cherkala-kasaragod",
    "name": "Cherkala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Cherkala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bellur-kasaragod",
    "name": "Bellur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bellur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chattanchal-kasaragod",
    "name": "Chattanchal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chattanchal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ajanur-kasaragod",
    "name": "Ajanur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ajanur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pullur-kasaragod",
    "name": "Pullur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pullur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "periya-kasaragod",
    "name": "Periya",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Periya is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pilicode-kasaragod",
    "name": "Pilicode",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pilicode is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "vellarikundu-kasaragod",
    "name": "Vellarikundu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Vellarikundu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "malom-kasaragod",
    "name": "Malom",
    "district": "Kasaragod",
    "category": "Nature & Hills",
    "zone": "North Malabar",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Malom is nestled in the undulating hills and valleys of Kasaragod, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "panathur-kasaragod",
    "name": "Panathur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Panathur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kumbadaje-kasaragod",
    "name": "Kumbadaje",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kumbadaje is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mangalpady-kasaragod",
    "name": "Mangalpady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mangalpady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "enmakaje-kasaragod",
    "name": "Enmakaje",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Enmakaje is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bedadka-kasaragod",
    "name": "Bedadka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bedadka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "karaduka-kasaragod",
    "name": "Karaduka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Karaduka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "muliyar-kasaragod",
    "name": "Muliyar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Muliyar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "delampady-kasaragod",
    "name": "Delampady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Delampady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chengala-kasaragod",
    "name": "Chengala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chengala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chemmanad-kasaragod",
    "name": "Chemmanad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chemmanad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kuttikol-kasaragod",
    "name": "Kuttikol",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kuttikol is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "madhur-kasaragod",
    "name": "Madhur",
    "district": "Kasaragod",
    "category": "Heritage & Culture",
    "zone": "North Malabar",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Madhur holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Kasaragod.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "balal-kasaragod",
    "name": "Balal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Balal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kodom-belur-kasaragod",
    "name": "Kodom Belur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kodom Belur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "madikai-kasaragod",
    "name": "Madikai",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Madikai is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pallikere-kasaragod",
    "name": "Pallikere",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pallikere is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "panathady-kasaragod",
    "name": "Panathady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Panathady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kallar-kasaragod",
    "name": "Kallar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kallar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kayyur-kasaragod",
    "name": "Kayyur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kayyur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "cheemeni-kasaragod",
    "name": "Cheemeni",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Cheemeni is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "east-eleri-kasaragod",
    "name": "East Eleri",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "East Eleri is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "west-eleri-kasaragod",
    "name": "West Eleri",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "West Eleri is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kinanoor-kasaragod",
    "name": "Kinanoor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kinanoor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "karinthalam-kasaragod",
    "name": "Karinthalam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Karinthalam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "padne-kasaragod",
    "name": "Padne",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Padne is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "valiyaparamba-kasaragod",
    "name": "Valiyaparamba",
    "district": "Kasaragod",
    "category": "Coastal & Beach",
    "zone": "North Malabar",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Valiyaparamba offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Kasaragod.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "adkathbail-kasaragod",
    "name": "Adkathbail",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Adkathbail is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "achikanam-kasaragod",
    "name": "Achikanam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Achikanam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "alampady-kasaragod",
    "name": "Alampady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Alampady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "arikady-kasaragod",
    "name": "Arikady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Arikady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ariyapady-kasaragod",
    "name": "Ariyapady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ariyapady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "attenganam-kasaragod",
    "name": "Attenganam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Attenganam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "badaje-kasaragod",
    "name": "Badaje",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Badaje is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "badur-kasaragod",
    "name": "Badur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Badur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "balemoole-kasaragod",
    "name": "Balemoole",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Balemoole is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bangramanjeshwar-kasaragod",
    "name": "Bangramanjeshwar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bangramanjeshwar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bare-kasaragod",
    "name": "Bare",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bare is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bedradka-kasaragod",
    "name": "Bedradka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bedradka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bekur-kasaragod",
    "name": "Bekur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bekur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bela-kasaragod",
    "name": "Bela",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bela is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bengalam-kasaragod",
    "name": "Bengalam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bengalam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "beripadavu-kasaragod",
    "name": "Beripadavu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Beripadavu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bheemanady-kasaragod",
    "name": "Bheemanady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bheemanady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bombrana-kasaragod",
    "name": "Bombrana",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bombrana is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chamundikunnu-kasaragod",
    "name": "Chamundikunnu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chamundikunnu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chandragiri-kasaragod",
    "name": "Chandragiri",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chandragiri is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "charla-kasaragod",
    "name": "Charla",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Charla is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chathamath-kasaragod",
    "name": "Chathamath",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chathamath is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chayoth-kasaragod",
    "name": "Chayoth",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chayoth is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "cheroor-kasaragod",
    "name": "Cheroor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Cheroor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chippar-kasaragod",
    "name": "Chippar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chippar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chittari-kasaragod",
    "name": "Chittari",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chittari is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "chully-kasaragod",
    "name": "Chully",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Chully is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "darkas-kasaragod",
    "name": "Darkas",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Darkas is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "dharmathadka-kasaragod",
    "name": "Dharmathadka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Dharmathadka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "edachakai-kasaragod",
    "name": "Edachakai",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Edachakai is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ednad-kasaragod",
    "name": "Ednad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ednad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "edneer-kasaragod",
    "name": "Edneer",
    "district": "Kasaragod",
    "category": "Heritage & Culture",
    "zone": "North Malabar",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Edneer holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Kasaragod.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "elambachi-kasaragod",
    "name": "Elambachi",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Elambachi is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "elerithattu-kasaragod",
    "name": "Elerithattu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Elerithattu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "erikulam-kasaragod",
    "name": "Erikulam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Erikulam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "haripuram-kasaragod",
    "name": "Haripuram",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Haripuram is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "heroor-kasaragod",
    "name": "Heroor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Heroor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "hidayathnagar-kasaragod",
    "name": "Hidayathnagar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Hidayathnagar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ichlampady-kasaragod",
    "name": "Ichlampady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ichlampady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ichlangodu-kasaragod",
    "name": "Ichlangodu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ichlangodu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "iriya-kasaragod",
    "name": "Iriya",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Iriya is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "iriyanni-kasaragod",
    "name": "Iriyanni",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Iriyanni is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kadambar-kasaragod",
    "name": "Kadambar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kadambar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kadumeni-kasaragod",
    "name": "Kadumeni",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kadumeni is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kaithakkad-kasaragod",
    "name": "Kaithakkad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kaithakkad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kakkebettu-kasaragod",
    "name": "Kakkebettu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kakkebettu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kalichanadukam-kasaragod",
    "name": "Kalichanadukam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kalichanadukam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kallakatta-kasaragod",
    "name": "Kallakatta",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kallakatta is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kallappally-kasaragod",
    "name": "Kallappally",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kallappally is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kalnad-kasaragod",
    "name": "Kalnad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kalnad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kamballur-kasaragod",
    "name": "Kamballur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kamballur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kanakappally-kasaragod",
    "name": "Kanakappally",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kanakappally is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kanathur-kasaragod",
    "name": "Kanathur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kanathur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kanhangad-south-kasaragod",
    "name": "Kanhangad South",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kanhangad South is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kanhiradkam-kasaragod",
    "name": "Kanhiradkam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kanhiradkam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kanhirapoil-kasaragod",
    "name": "Kanhirapoil",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kanhirapoil is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kannivayal-kasaragod",
    "name": "Kannivayal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kannivayal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "karivedakam-kasaragod",
    "name": "Karivedakam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Karivedakam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kattipoil-kasaragod",
    "name": "Kattipoil",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kattipoil is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kattukukke-kasaragod",
    "name": "Kattukukke",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kattukukke is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kayyaru-kasaragod",
    "name": "Kayyaru",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kayyaru is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "keekan-kasaragod",
    "name": "Keekan",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Keekan is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kidoor-kasaragod",
    "name": "Kidoor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kidoor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kilaikote-kasaragod",
    "name": "Kilaikote",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kilaikote is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kinningar-kasaragod",
    "name": "Kinningar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kinningar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kodiamme-kasaragod",
    "name": "Kodiamme",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kodiamme is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kodlamogaru-kasaragod",
    "name": "Kodlamogaru",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kodlamogaru is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kodoth-kasaragod",
    "name": "Kodoth",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kodoth is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kolathuri-kasaragod",
    "name": "Kolathuri",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kolathuri is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kolavayal-kasaragod",
    "name": "Kolavayal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kolavayal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kolichal-kasaragod",
    "name": "Kolichal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kolichal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "koliyur-kasaragod",
    "name": "Koliyur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Koliyur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kollampara-kasaragod",
    "name": "Kollampara",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kollampara is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "konnakad-kasaragod",
    "name": "Konnakad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Konnakad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kotakkat-kasaragod",
    "name": "Kotakkat",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kotakkat is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kotoor-kasaragod",
    "name": "Kotoor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kotoor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kottacherry-kasaragod",
    "name": "Kottacherry",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kottacherry is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kottamala-kasaragod",
    "name": "Kottamala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kottamala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kottapuram-kasaragod",
    "name": "Kottapuram",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kottapuram is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kottody-kasaragod",
    "name": "Kottody",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kottody is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kudalmerkala-kasaragod",
    "name": "Kudalmerkala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kudalmerkala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kundankuzhy-kasaragod",
    "name": "Kundankuzhy",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kundankuzhy is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kunjathur-kasaragod",
    "name": "Kunjathur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kunjathur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kuntar-kasaragod",
    "name": "Kuntar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kuntar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kuntikana-kasaragod",
    "name": "Kuntikana",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kuntikana is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kurudapadavu-kasaragod",
    "name": "Kurudapadavu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kurudapadavu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kuttikolu-kasaragod",
    "name": "Kuttikolu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kuttikolu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "maire-kasaragod",
    "name": "Maire",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Maire is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "majibail-kasaragod",
    "name": "Majibail",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Majibail is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "malakallu-kasaragod",
    "name": "Malakallu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Malakallu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "malla-kasaragod",
    "name": "Malla",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Malla is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "manadka-kasaragod",
    "name": "Manadka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Manadka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mandapam-kasaragod",
    "name": "Mandapam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mandapam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "manikoth-kasaragod",
    "name": "Manikoth",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Manikoth is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "manimoole-kasaragod",
    "name": "Manimoole",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Manimoole is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "maniyat-kasaragod",
    "name": "Maniyat",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Maniyat is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mavilakadapuram-kasaragod",
    "name": "Mavilakadapuram",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mavilakadapuram is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mayipady-kasaragod",
    "name": "Mayipady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mayipady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "miyapadavu-kasaragod",
    "name": "Miyapadavu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Miyapadavu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mogral-kasaragod",
    "name": "Mogral",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mogral is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "moodambail-kasaragod",
    "name": "Moodambail",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Moodambail is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "movval-kasaragod",
    "name": "Movval",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Movval is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "movvar-kasaragod",
    "name": "Movvar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Movvar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mugu-kasaragod",
    "name": "Mugu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mugu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mulleria-kasaragod",
    "name": "Mulleria",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mulleria is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "munnad-kasaragod",
    "name": "Munnad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Munnad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "muttathody-kasaragod",
    "name": "Muttathody",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Muttathody is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "muttomkadavil-kasaragod",
    "name": "Muttomkadavil",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Muttomkadavil is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "mylatti-kasaragod",
    "name": "Mylatti",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Mylatti is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "natakkal-kasaragod",
    "name": "Natakkal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Natakkal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "nekraje-kasaragod",
    "name": "Nekraje",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Nekraje is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "nettanige-kasaragod",
    "name": "Nettanige",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Nettanige is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "nirchal-kasaragod",
    "name": "Nirchal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Nirchal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "olat-kasaragod",
    "name": "Olat",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Olat is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ozhinhavalappu-kasaragod",
    "name": "Ozhinhavalappu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ozhinhavalappu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "padimaruth-kasaragod",
    "name": "Padimaruth",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Padimaruth is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "padnekadapuram-kasaragod",
    "name": "Padnekadapuram",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Padnekadapuram is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "padnekkad-kasaragod",
    "name": "Padnekkad",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Padnekkad is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "padre-kasaragod",
    "name": "Padre",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Padre is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pakkom-kasaragod",
    "name": "Pakkom",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pakkom is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "palavayal-kasaragod",
    "name": "Palavayal",
    "district": "Kasaragod",
    "category": "Urban & Commercial",
    "zone": "North Malabar",
    "tagline": "Vibrant commercial municipality in Kasaragod",
    "description": "Palavayal is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Kasaragod.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pallathadka-kasaragod",
    "name": "Pallathadka",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pallathadka is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pandi-kasaragod",
    "name": "Pandi",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pandi is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "paniyal-kasaragod",
    "name": "Paniyal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Paniyal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "panjikkal-kasaragod",
    "name": "Panjikkal",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Panjikkal is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "paraklayi-kasaragod",
    "name": "Paraklayi",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Paraklayi is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "paramba-kasaragod",
    "name": "Paramba",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Paramba is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "paravanadkam-kasaragod",
    "name": "Paravanadkam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Paravanadkam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pathoor-kasaragod",
    "name": "Pathoor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pathoor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "patla-kasaragod",
    "name": "Patla",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Patla is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pavoor-kasaragod",
    "name": "Pavoor",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pavoor is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "perdala-kasaragod",
    "name": "Perdala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Perdala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "periyanganam-kasaragod",
    "name": "Periyanganam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Periyanganam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "permude-kasaragod",
    "name": "Permude",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Permude is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "perumbala-kasaragod",
    "name": "Perumbala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Perumbala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "perumbatta-kasaragod",
    "name": "Perumbatta",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Perumbatta is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pettikundu-kasaragod",
    "name": "Pettikundu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pettikundu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "plachikara-kasaragod",
    "name": "Plachikara",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Plachikara is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "podavur-kasaragod",
    "name": "Podavur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Podavur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pudukai-kasaragod",
    "name": "Pudukai",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pudukai is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pady-kasaragod",
    "name": "Pady",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pady is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "poinachi-kasaragod",
    "name": "Poinachi",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Poinachi is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "puthur-kasaragod",
    "name": "Puthur",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Puthur is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "talikala-kasaragod",
    "name": "Talikala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Talikala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "thekkil-kasaragod",
    "name": "Thekkil",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Thekkil is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ubrangala-kasaragod",
    "name": "Ubrangala",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ubrangala is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ujarulvar-kasaragod",
    "name": "Ujarulvar",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Ujarulvar is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "thalangara-kasaragod",
    "name": "Thalangara",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Thalangara is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "nellikunnu-kasaragod",
    "name": "Nellikunnu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Nellikunnu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pallikkara-kasaragod",
    "name": "Pallikkara",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pallikkara is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kappil-kasaragod",
    "name": "Kappil",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kappil is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "trikkand-kasaragod",
    "name": "Trikkand",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Trikkand is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "bellikoth-kasaragod",
    "name": "Bellikoth",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Bellikoth is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "pulikkunnu-kasaragod",
    "name": "Pulikkunnu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Pulikkunnu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kottancheri-kasaragod",
    "name": "Kottancheri",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kottancheri is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "tulur-vanam-kasaragod",
    "name": "Tulur Vanam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Tulur Vanam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "ranipuram-kasaragod",
    "name": "Ranipuram",
    "district": "Kasaragod",
    "category": "Nature & Hills",
    "zone": "North Malabar",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Ranipuram is nestled in the undulating hills and valleys of Kasaragod, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "anekallu-kasaragod",
    "name": "Anekallu",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Anekallu is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "angadimogaru-kasaragod",
    "name": "Angadimogaru",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Angadimogaru is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "thayyeni-kasaragod",
    "name": "Thayyeni",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Thayyeni is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "anandashrama-kasaragod",
    "name": "Anandashrama",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Anandashrama is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kadappuram-kasaragod",
    "name": "Kadappuram",
    "district": "Kasaragod",
    "category": "Coastal & Beach",
    "zone": "North Malabar",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Kadappuram offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Kasaragod.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kottikkulam-kasaragod",
    "name": "Kottikkulam",
    "district": "Kasaragod",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kasaragod",
    "description": "Kottikkulam is a key residential and agricultural settlement located in the Kasaragod district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kasaragod Center"
  },
  {
    "id": "kannur-kannur",
    "name": "Kannur",
    "district": "Kannur",
    "category": "Urban & Commercial",
    "zone": "North Malabar",
    "tagline": "Principal administrative and commercial centre of Kannur",
    "description": "Kannur serves as a central economic, cultural, and transit nexus for Kannur with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Kannur HQ"
  },
  {
    "id": "thalassery-kannur",
    "name": "Thalassery",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Thalassery is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "taliparamba-kannur",
    "name": "Taliparamba",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Taliparamba is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "payyanur-kannur",
    "name": "Payyanur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Payyanur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "mattannur-kannur",
    "name": "Mattannur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Mattannur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "iritty-kannur",
    "name": "Iritty",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Iritty is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kalliasseri-kannur",
    "name": "Kalliasseri",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kalliasseri is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "sreekandapuram-kannur",
    "name": "Sreekandapuram",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Sreekandapuram is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "alakode-kannur",
    "name": "Alakode",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Alakode is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "cherupuzha-kannur",
    "name": "Cherupuzha",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Cherupuzha is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kelakam-kannur",
    "name": "Kelakam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kelakam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "peravoor-kannur",
    "name": "Peravoor",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Peravoor is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "koothuparamba-kannur",
    "name": "Koothuparamba",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Koothuparamba is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "panoor-kannur",
    "name": "Panoor",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Panoor is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chala-kannur",
    "name": "Chala",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chala is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "dharmadom-kannur",
    "name": "Dharmadom",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Dharmadom is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "muzhappilangad-kannur",
    "name": "Muzhappilangad",
    "district": "Kannur",
    "category": "Coastal & Beach",
    "zone": "North Malabar",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Muzhappilangad offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Kannur.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "edakkad-kannur",
    "name": "Edakkad",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Edakkad is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "valapattanam-kannur",
    "name": "Valapattanam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Valapattanam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "pappinisseri-kannur",
    "name": "Pappinisseri",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Pappinisseri is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "cherukunnu-kannur",
    "name": "Cherukunnu",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Cherukunnu is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kannapuram-kannur",
    "name": "Kannapuram",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kannapuram is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "pazhayangadi-kannur",
    "name": "Pazhayangadi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Pazhayangadi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "madayi-kannur",
    "name": "Madayi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Madayi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "pilathara-kannur",
    "name": "Pilathara",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Pilathara is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "karivellur-kannur",
    "name": "Karivellur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Karivellur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "ezhimala-kannur",
    "name": "Ezhimala",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Ezhimala is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "ramanthali-kannur",
    "name": "Ramanthali",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Ramanthali is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "payyavoor-kannur",
    "name": "Payyavoor",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Payyavoor is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chemperi-kannur",
    "name": "Chemperi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chemperi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kudiyanmala-kannur",
    "name": "Kudiyanmala",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kudiyanmala is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "naduvil-kannur",
    "name": "Naduvil",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Naduvil is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "mayyil-kannur",
    "name": "Mayyil",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Mayyil is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chakkarakkal-kannur",
    "name": "Chakkarakkal",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chakkarakkal is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "anjarakandy-kannur",
    "name": "Anjarakandy",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Anjarakandy is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "mattool-kannur",
    "name": "Mattool",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Mattool is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "azhikode-kannur",
    "name": "Azhikode",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Azhikode is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chirakkal-kannur",
    "name": "Chirakkal",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chirakkal is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "pallikunnu-kannur",
    "name": "Pallikunnu",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Pallikunnu is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "puzhathi-kannur",
    "name": "Puzhathi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Puzhathi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "eachur-kannur",
    "name": "Eachur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Eachur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "munderi-kannur",
    "name": "Munderi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Munderi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kanhirod-kannur",
    "name": "Kanhirod",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kanhirod is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "peralassery-kannur",
    "name": "Peralassery",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Peralassery is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kadachira-kannur",
    "name": "Kadachira",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kadachira is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "pinarayi-kannur",
    "name": "Pinarayi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Pinarayi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "eranholi-kannur",
    "name": "Eranholi",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Eranholi is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kathirur-kannur",
    "name": "Kathirur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kathirur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chombala-kannur",
    "name": "Chombala",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chombala is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "new-mahe-kannur",
    "name": "New Mahe",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "New Mahe is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kuthuparamba-kannur",
    "name": "Kuthuparamba",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kuthuparamba is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "mokeri-kannur",
    "name": "Mokeri",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Mokeri is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chokli-kannur",
    "name": "Chokli",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chokli is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "malur-kannur",
    "name": "Malur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Malur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "shivapuram-kannur",
    "name": "Shivapuram",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Shivapuram is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "ulikkal-kannur",
    "name": "Ulikkal",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Ulikkal is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "payam-kannur",
    "name": "Payam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Payam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "muzhakkunnu-kannur",
    "name": "Muzhakkunnu",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Muzhakkunnu is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "aralam-kannur",
    "name": "Aralam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Aralam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kottiyoor-kannur",
    "name": "Kottiyoor",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kottiyoor is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kanichar-kannur",
    "name": "Kanichar",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kanichar is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kolayad-kannur",
    "name": "Kolayad",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kolayad is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chittariparamba-kannur",
    "name": "Chittariparamba",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chittariparamba is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "keezhallur-kannur",
    "name": "Keezhallur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Keezhallur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "mangattididam-kannur",
    "name": "Mangattididam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Mangattididam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "pattyam-kannur",
    "name": "Pattyam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Pattyam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kottayam-malabar-kannur",
    "name": "Kottayam Malabar",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kottayam Malabar is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kadirur-kannur",
    "name": "Kadirur",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kadirur is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "templeside-kannur",
    "name": "Templeside",
    "district": "Kannur",
    "category": "Heritage & Culture",
    "zone": "North Malabar",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Templeside holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Kannur.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "thottada-kannur",
    "name": "Thottada",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Thottada is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kizhunna-kannur",
    "name": "Kizhunna",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Kizhunna is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "thottada-beach-kannur",
    "name": "Thottada Beach",
    "district": "Kannur",
    "category": "Coastal & Beach",
    "zone": "North Malabar",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Thottada Beach offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Kannur.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "meenkunnu-kannur",
    "name": "Meenkunnu",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Meenkunnu is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chalad-kannur",
    "name": "Chalad",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chalad is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "thana-kannur",
    "name": "Thana",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Thana is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "podikundu-kannur",
    "name": "Podikundu",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Podikundu is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chovva-kannur",
    "name": "Chovva",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chovva is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "elayavoor-kannur",
    "name": "Elayavoor",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Elayavoor is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kappad-kannur-kannur",
    "name": "Kappad Kannur",
    "district": "Kannur",
    "category": "Coastal & Beach",
    "zone": "North Malabar",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Kappad Kannur offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Kannur.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "chelora-kannur",
    "name": "Chelora",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Chelora is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "varam-kannur",
    "name": "Varam",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Varam is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "koodali-kannur",
    "name": "Koodali",
    "district": "Kannur",
    "category": "Village & Panchayat",
    "zone": "North Malabar",
    "tagline": "Picturesque community and locality in Kannur",
    "description": "Koodali is a key residential and agricultural settlement located in the Kannur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kannur Center"
  },
  {
    "id": "kalpetta-wayanad",
    "name": "Kalpetta",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Highland hub of Wayanad surrounded by mist forests and coffee plantations",
    "description": "Kalpetta is a premier highland destination in Wayanad known for cool mountain air, spice trading, trekking, and heritage caves.",
    "notableFor": [
      "Wayanad Spice Farms",
      "Mist Peaks",
      "Coffee & Tea Estates",
      "Eco Resorts"
    ],
    "type": "Town",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "mananthavady-wayanad",
    "name": "Mananthavady",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Highland hub of Wayanad surrounded by mist forests and coffee plantations",
    "description": "Mananthavady is a premier highland destination in Wayanad known for cool mountain air, spice trading, trekking, and heritage caves.",
    "notableFor": [
      "Wayanad Spice Farms",
      "Mist Peaks",
      "Coffee & Tea Estates",
      "Eco Resorts"
    ],
    "type": "Town",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "sulthan-bathery-wayanad",
    "name": "Sulthan Bathery",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Highland hub of Wayanad surrounded by mist forests and coffee plantations",
    "description": "Sulthan Bathery is a premier highland destination in Wayanad known for cool mountain air, spice trading, trekking, and heritage caves.",
    "notableFor": [
      "Wayanad Spice Farms",
      "Mist Peaks",
      "Coffee & Tea Estates",
      "Eco Resorts"
    ],
    "type": "Town",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "vythiri-wayanad",
    "name": "Vythiri",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Highland hub of Wayanad surrounded by mist forests and coffee plantations",
    "description": "Vythiri is a premier highland destination in Wayanad known for cool mountain air, spice trading, trekking, and heritage caves.",
    "notableFor": [
      "Wayanad Spice Farms",
      "Mist Peaks",
      "Coffee & Tea Estates",
      "Eco Resorts"
    ],
    "type": "Town",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "meppadi-wayanad",
    "name": "Meppadi",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Meppadi is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "pozhuthana-wayanad",
    "name": "Pozhuthana",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Pozhuthana is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "ambalavayal-wayanad",
    "name": "Ambalavayal",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Ambalavayal is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "pulpally-wayanad",
    "name": "Pulpally",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Pulpally is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "padinjarathara-wayanad",
    "name": "Padinjarathara",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Padinjarathara is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "meenangadi-wayanad",
    "name": "Meenangadi",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Meenangadi is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "panamaram-wayanad",
    "name": "Panamaram",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Panamaram is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "muttil-wayanad",
    "name": "Muttil",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Muttil is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "banasura-sagar-wayanad",
    "name": "Banasura Sagar",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Banasura Sagar is nestled in the undulating hills and valleys of Wayanad, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "chembra-peak-wayanad",
    "name": "Chembra Peak",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Chembra Peak is nestled in the undulating hills and valleys of Wayanad, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "lakkidi-wayanad",
    "name": "Lakkidi",
    "district": "Wayanad",
    "category": "Nature & Hills",
    "zone": "Wayanad Highlands",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Lakkidi is nestled in the undulating hills and valleys of Wayanad, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "thirunelly-wayanad",
    "name": "Thirunelly",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Thirunelly is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "thariode-wayanad",
    "name": "Thariode",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Thariode is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "noolpuzha-wayanad",
    "name": "Noolpuzha",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Noolpuzha is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "poothadi-wayanad",
    "name": "Poothadi",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Poothadi is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "mullankolly-wayanad",
    "name": "Mullankolly",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Mullankolly is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "kaniyambetta-wayanad",
    "name": "Kaniyambetta",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Kaniyambetta is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "vellamunda-wayanad",
    "name": "Vellamunda",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Vellamunda is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "edavaka-wayanad",
    "name": "Edavaka",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Edavaka is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "thondernad-wayanad",
    "name": "Thondernad",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Thondernad is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "muplad-wayanad",
    "name": "Muplad",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Muplad is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "chundale-wayanad",
    "name": "Chundale",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Chundale is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "achooranam-wayanad",
    "name": "Achooranam",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Achooranam is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "kottathara-wayanad",
    "name": "Kottathara",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Kottathara is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "vengapally-wayanad",
    "name": "Vengapally",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Vengapally is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "muttil-north-wayanad",
    "name": "Muttil North",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Muttil North is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "muttil-south-wayanad",
    "name": "Muttil South",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Muttil South is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "appapara-wayanad",
    "name": "Appapara",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Appapara is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "cheeral-wayanad",
    "name": "Cheeral",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Cheeral is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "nenmeni-wayanad",
    "name": "Nenmeni",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Nenmeni is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "kidanganad-wayanad",
    "name": "Kidanganad",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Kidanganad is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "bavali-wayanad",
    "name": "Bavali",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Bavali is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "korome-wayanad",
    "name": "Korome",
    "district": "Wayanad",
    "category": "Village & Panchayat",
    "zone": "Wayanad Highlands",
    "tagline": "Picturesque community and locality in Wayanad",
    "description": "Korome is a key residential and agricultural settlement located in the Wayanad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Wayanad Center"
  },
  {
    "id": "calicut-kozhikode",
    "name": "Calicut",
    "district": "Kozhikode",
    "category": "Urban & Commercial",
    "zone": "Malabar Region",
    "tagline": "Principal administrative and commercial centre of Kozhikode",
    "description": "Calicut serves as a central economic, cultural, and transit nexus for Kozhikode with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koodathai-kozhikode",
    "name": "Koodathai",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque panchayat town in Kozhikode district near Thamarassery",
    "description": "Koodathai (Koodathayi) is a scenic agricultural and residential locality situated in Kozhikode district, Kerala, located between Thamarassery and Koduvally along the foothills.",
    "notableFor": [
      "Koodathayi Bazaar",
      "Thamarassery Foothills",
      "Rubber Plantations",
      "Panchayat Center"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koodathayi-kozhikode",
    "name": "Koodathayi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque panchayat town in Kozhikode district near Thamarassery",
    "description": "Koodathai (Koodathayi) is a scenic agricultural and residential locality situated in Kozhikode district, Kerala, located between Thamarassery and Koduvally along the foothills.",
    "notableFor": [
      "Koodathayi Bazaar",
      "Thamarassery Foothills",
      "Rubber Plantations",
      "Panchayat Center"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "thamarassery-kozhikode",
    "name": "Thamarassery",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Thamarassery is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koduvally-kozhikode",
    "name": "Koduvally",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Koduvally is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kunnamangalam-kozhikode",
    "name": "Kunnamangalam",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kunnamangalam is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "mukkam-kozhikode",
    "name": "Mukkam",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Mukkam is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koyilandy-kozhikode",
    "name": "Koyilandy",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Koyilandy is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "vadakara-kozhikode",
    "name": "Vadakara",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Vadakara is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "ramanattukara-kozhikode",
    "name": "Ramanattukara",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Ramanattukara is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "feroke-kozhikode",
    "name": "Feroke",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Feroke is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "pantheeramkavu-kozhikode",
    "name": "Pantheeramkavu",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Pantheeramkavu is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "beypore-kozhikode",
    "name": "Beypore",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Beypore is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "elathur-kozhikode",
    "name": "Elathur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Elathur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "balussery-kozhikode",
    "name": "Balussery",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Balussery is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "perambra-kozhikode",
    "name": "Perambra",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Perambra is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kuttiady-kozhikode",
    "name": "Kuttiady",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kuttiady is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "nadapuram-kozhikode",
    "name": "Nadapuram",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Nadapuram is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "payyoli-kozhikode",
    "name": "Payyoli",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Payyoli is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "mavoor-kozhikode",
    "name": "Mavoor",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Mavoor is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "thiruvambady-kozhikode",
    "name": "Thiruvambady",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Thiruvambady is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chelannur-kozhikode",
    "name": "Chelannur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chelannur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kakkodi-kozhikode",
    "name": "Kakkodi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kakkodi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "atholi-kozhikode",
    "name": "Atholi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Atholi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "ulliyeri-kozhikode",
    "name": "Ulliyeri",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Ulliyeri is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kappad-kozhikode",
    "name": "Kappad",
    "district": "Kozhikode",
    "category": "Coastal & Beach",
    "zone": "Malabar Region",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Kappad offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Kozhikode.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "quilandy-kozhikode",
    "name": "Quilandy",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Quilandy is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chombala-kozhikode",
    "name": "Chombala",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chombala is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "orkkatteri-kozhikode",
    "name": "Orkkatteri",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Orkkatteri is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "edacheri-kozhikode",
    "name": "Edacheri",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Edacheri is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "thuneri-kozhikode",
    "name": "Thuneri",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Thuneri is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kuttiadi-kozhikode",
    "name": "Kuttiadi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kuttiadi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "maruthonkara-kozhikode",
    "name": "Maruthonkara",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Maruthonkara is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kavilumpara-kozhikode",
    "name": "Kavilumpara",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kavilumpara is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kayakkodi-kozhikode",
    "name": "Kayakkodi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kayakkodi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "changaroth-kozhikode",
    "name": "Changaroth",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Changaroth is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "cheruvannur-kozhikode",
    "name": "Cheruvannur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Cheruvannur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "meppayur-kozhikode",
    "name": "Meppayur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Meppayur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "keezhariyur-kozhikode",
    "name": "Keezhariyur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Keezhariyur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "thikkoti-kozhikode",
    "name": "Thikkoti",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Thikkoti is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "moodadi-kozhikode",
    "name": "Moodadi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Moodadi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "arikkulam-kozhikode",
    "name": "Arikkulam",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Arikkulam is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "panangad-kozhikode",
    "name": "Panangad",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Panangad is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kottur-kozhikode",
    "name": "Kottur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kottur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "unnikulam-kozhikode",
    "name": "Unnikulam",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Unnikulam is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koorachundu-kozhikode",
    "name": "Koorachundu",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Koorachundu is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kayanna-kozhikode",
    "name": "Kayanna",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kayanna is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "nochad-kozhikode",
    "name": "Nochad",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Nochad is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "naripatta-kozhikode",
    "name": "Naripatta",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Naripatta is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chemancheri-kozhikode",
    "name": "Chemancheri",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chemancheri is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "thalakkulathur-kozhikode",
    "name": "Thalakkulathur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Thalakkulathur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koduvally-town-kozhikode",
    "name": "Koduvally Town",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Koduvally Town is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "madavoor-kozhikode",
    "name": "Madavoor",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Madavoor is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "narikkuni-kozhikode",
    "name": "Narikkuni",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Narikkuni is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kizhakoth-kozhikode",
    "name": "Kizhakoth",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kizhakoth is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "karassery-kozhikode",
    "name": "Karassery",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Karassery is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kodiyathur-kozhikode",
    "name": "Kodiyathur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kodiyathur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chathamangalam-kozhikode",
    "name": "Chathamangalam",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chathamangalam is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kottooli-kozhikode",
    "name": "Kottooli",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kottooli is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chevayur-kozhikode",
    "name": "Chevayur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chevayur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "medical-college-kozhikode",
    "name": "Medical College",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Medical College is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kovoor-kozhikode",
    "name": "Kovoor",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kovoor is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "mankave-kozhikode",
    "name": "Mankave",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Mankave is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "panniyankara-kozhikode",
    "name": "Panniyankara",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Panniyankara is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "meenchanda-kozhikode",
    "name": "Meenchanda",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Meenchanda is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "cheruvannur-nallalam-kozhikode",
    "name": "Cheruvannur Nallalam",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Cheruvannur Nallalam is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "olavanna-kozhikode",
    "name": "Olavanna",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Olavanna is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "peruvayal-kozhikode",
    "name": "Peruvayal",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Peruvayal is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "perumanna-kozhikode",
    "name": "Perumanna",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Perumanna is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kadalundi-kozhikode",
    "name": "Kadalundi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kadalundi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "ramanattukara-town-kozhikode",
    "name": "Ramanattukara Town",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Ramanattukara Town is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "farook-college-kozhikode",
    "name": "Farook College",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Farook College is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kakkanchery-kozhikode",
    "name": "Kakkanchery",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kakkanchery is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kinaloor-kozhikode",
    "name": "Kinaloor",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kinaloor is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "puduppadi-kozhikode",
    "name": "Puduppadi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Puduppadi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "engapuzha-kozhikode",
    "name": "Engapuzha",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Engapuzha is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "koodaranhi-kozhikode",
    "name": "Koodaranhi",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Koodaranhi is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chakkittapara-kozhikode",
    "name": "Chakkittapara",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chakkittapara is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "chelavoor-kozhikode",
    "name": "Chelavoor",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Chelavoor is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "moozhikkal-kozhikode",
    "name": "Moozhikkal",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Moozhikkal is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "pooladikunnu-kozhikode",
    "name": "Pooladikunnu",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Pooladikunnu is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "vengeri-kozhikode",
    "name": "Vengeri",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Vengeri is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "omassery-kozhikode",
    "name": "Omassery",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Omassery is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kodanchery-kozhikode",
    "name": "Kodanchery",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kodanchery is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "nanminda-kozhikode",
    "name": "Nanminda",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Nanminda is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "thiruvangoor-kozhikode",
    "name": "Thiruvangoor",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Thiruvangoor is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "eranhikkal-kozhikode",
    "name": "Eranhikkal",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Eranhikkal is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "poolacode-kozhikode",
    "name": "Poolacode",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Poolacode is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "kuruvattur-kozhikode",
    "name": "Kuruvattur",
    "district": "Kozhikode",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Kozhikode",
    "description": "Kuruvattur is a key residential and agricultural settlement located in the Kozhikode district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kozhikode Center"
  },
  {
    "id": "malappuram-malappuram",
    "name": "Malappuram",
    "district": "Malappuram",
    "category": "Urban & Commercial",
    "zone": "Malabar Region",
    "tagline": "Principal administrative and commercial centre of Malappuram",
    "description": "Malappuram serves as a central economic, cultural, and transit nexus for Malappuram with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Malappuram HQ"
  },
  {
    "id": "manjeri-malappuram",
    "name": "Manjeri",
    "district": "Malappuram",
    "category": "Urban & Commercial",
    "zone": "Malabar Region",
    "tagline": "Vibrant commercial municipality in Malappuram",
    "description": "Manjeri is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Malappuram.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "tirur-malappuram",
    "name": "Tirur",
    "district": "Malappuram",
    "category": "Urban & Commercial",
    "zone": "Malabar Region",
    "tagline": "Vibrant commercial municipality in Malappuram",
    "description": "Tirur is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Malappuram.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "perinthalmanna-malappuram",
    "name": "Perinthalmanna",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Perinthalmanna is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kottakkal-malappuram",
    "name": "Kottakkal",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kottakkal is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "ponnani-malappuram",
    "name": "Ponnani",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Ponnani is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "nilambur-malappuram",
    "name": "Nilambur",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Nilambur is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kondotty-malappuram",
    "name": "Kondotty",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kondotty is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "parappanangadi-malappuram",
    "name": "Parappanangadi",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Parappanangadi is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "tanur-malappuram",
    "name": "Tanur",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Tanur is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "edappal-malappuram",
    "name": "Edappal",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Edappal is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "valanchery-malappuram",
    "name": "Valanchery",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Valanchery is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "areekode-malappuram",
    "name": "Areekode",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Areekode is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "wandoor-malappuram",
    "name": "Wandoor",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Wandoor is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "tirurangadi-malappuram",
    "name": "Tirurangadi",
    "district": "Malappuram",
    "category": "Urban & Commercial",
    "zone": "Malabar Region",
    "tagline": "Vibrant commercial municipality in Malappuram",
    "description": "Tirurangadi is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Malappuram.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kadampuzha-malappuram",
    "name": "Kadampuzha",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kadampuzha is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "edakkara-malappuram",
    "name": "Edakkara",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Edakkara is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "pandikkad-malappuram",
    "name": "Pandikkad",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Pandikkad is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "melattur-malappuram",
    "name": "Melattur",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Melattur is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "changaramkulam-malappuram",
    "name": "Changaramkulam",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Changaramkulam is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kuttippuram-malappuram",
    "name": "Kuttippuram",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kuttippuram is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "mankada-malappuram",
    "name": "Mankada",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Mankada is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "vengara-malappuram",
    "name": "Vengara",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Vengara is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "karuvarakundu-malappuram",
    "name": "Karuvarakundu",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Karuvarakundu is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kizhisseri-malappuram",
    "name": "Kizhisseri",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kizhisseri is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "morayur-malappuram",
    "name": "Morayur",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Morayur is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "chungathara-malappuram",
    "name": "Chungathara",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Chungathara is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kalikavu-malappuram",
    "name": "Kalikavu",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kalikavu is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "othukkungal-malappuram",
    "name": "Othukkungal",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Othukkungal is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "vazhakkad-malappuram",
    "name": "Vazhakkad",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Vazhakkad is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "kuzhimanna-malappuram",
    "name": "Kuzhimanna",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Kuzhimanna is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "pulpatta-malappuram",
    "name": "Pulpatta",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Pulpatta is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "chelembra-malappuram",
    "name": "Chelembra",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Chelembra is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "moonniyur-malappuram",
    "name": "Moonniyur",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Moonniyur is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "vallikkunnu-malappuram",
    "name": "Vallikkunnu",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Vallikkunnu is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "marakkara-malappuram",
    "name": "Marakkara",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Marakkara is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "edayoor-malappuram",
    "name": "Edayoor",
    "district": "Malappuram",
    "category": "Village & Panchayat",
    "zone": "Malabar Region",
    "tagline": "Picturesque community and locality in Malappuram",
    "description": "Edayoor is a key residential and agricultural settlement located in the Malappuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Malappuram Center"
  },
  {
    "id": "palakkad-palakkad",
    "name": "Palakkad",
    "district": "Palakkad",
    "category": "Urban & Commercial",
    "zone": "Palakkad Gap Region",
    "tagline": "Principal administrative and commercial centre of Palakkad",
    "description": "Palakkad serves as a central economic, cultural, and transit nexus for Palakkad with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Palakkad HQ"
  },
  {
    "id": "ottapalam-palakkad",
    "name": "Ottapalam",
    "district": "Palakkad",
    "category": "Urban & Commercial",
    "zone": "Palakkad Gap Region",
    "tagline": "Vibrant commercial municipality in Palakkad",
    "description": "Ottapalam is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Palakkad.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "shornur-palakkad",
    "name": "Shornur",
    "district": "Palakkad",
    "category": "Urban & Commercial",
    "zone": "Palakkad Gap Region",
    "tagline": "Vibrant commercial municipality in Palakkad",
    "description": "Shornur is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Palakkad.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "chittur-palakkad",
    "name": "Chittur",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Chittur is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "mannarkkad-palakkad",
    "name": "Mannarkkad",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Mannarkkad is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "alathur-palakkad",
    "name": "Alathur",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Alathur is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "pattambi-palakkad",
    "name": "Pattambi",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Pattambi is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "cherpulassery-palakkad",
    "name": "Cherpulassery",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Cherpulassery is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "vadakkencherry-palakkad",
    "name": "Vadakkencherry",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Vadakkencherry is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "nemmara-palakkad",
    "name": "Nemmara",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Nemmara is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "kollengode-palakkad",
    "name": "Kollengode",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Kollengode is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "malampuzha-palakkad",
    "name": "Malampuzha",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Malampuzha is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "parambikulam-palakkad",
    "name": "Parambikulam",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Parambikulam is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "attappadi-palakkad",
    "name": "Attappadi",
    "district": "Palakkad",
    "category": "Nature & Hills",
    "zone": "Palakkad Gap Region",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Attappadi is nestled in the undulating hills and valleys of Palakkad, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "agali-palakkad",
    "name": "Agali",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Agali is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "kuzhalmannam-palakkad",
    "name": "Kuzhalmannam",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Kuzhalmannam is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "kongad-palakkad",
    "name": "Kongad",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Kongad is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "thathamangalam-palakkad",
    "name": "Thathamangalam",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Thathamangalam is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "kanjikode-palakkad",
    "name": "Kanjikode",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Kanjikode is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "walayar-palakkad",
    "name": "Walayar",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Walayar is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "mundur-palakkad-palakkad",
    "name": "Mundur Palakkad",
    "district": "Palakkad",
    "category": "Urban & Commercial",
    "zone": "Palakkad Gap Region",
    "tagline": "Vibrant commercial municipality in Palakkad",
    "description": "Mundur Palakkad is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Palakkad.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "pudussery-palakkad",
    "name": "Pudussery",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Pudussery is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "kozhinjampara-palakkad",
    "name": "Kozhinjampara",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Kozhinjampara is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "koduvayur-palakkad",
    "name": "Koduvayur",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Koduvayur is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "koppam-palakkad",
    "name": "Koppam",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Koppam is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "thrithala-palakkad",
    "name": "Thrithala",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Thrithala is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "chalissery-palakkad",
    "name": "Chalissery",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Chalissery is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "alanallur-palakkad",
    "name": "Alanallur",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Alanallur is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "kottayi-palakkad",
    "name": "Kottayi",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Kottayi is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "parali-palakkad",
    "name": "Parali",
    "district": "Palakkad",
    "category": "Village & Panchayat",
    "zone": "Palakkad Gap Region",
    "tagline": "Picturesque community and locality in Palakkad",
    "description": "Parali is a key residential and agricultural settlement located in the Palakkad district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Palakkad Center"
  },
  {
    "id": "chavakkad-thrissur",
    "name": "Chavakkad",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Chavakkad is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "guruvayur-thrissur",
    "name": "Guruvayur",
    "district": "Thrissur",
    "category": "Heritage & Culture",
    "zone": "Central Cultural Hub",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Guruvayur holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Thrissur.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kodungallur-thrissur",
    "name": "Kodungallur",
    "district": "Thrissur",
    "category": "Heritage & Culture",
    "zone": "Central Cultural Hub",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Kodungallur holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Thrissur.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kunnamkulam-thrissur",
    "name": "Kunnamkulam",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kunnamkulam is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "thrissur-town-thrissur",
    "name": "Thrissur Town",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Thrissur Town is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "chalakudy-thrissur",
    "name": "Chalakudy",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Chalakudy is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "irinjalakuda-thrissur",
    "name": "Irinjalakuda",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Irinjalakuda is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "wadakkanchery-thrissur",
    "name": "Wadakkanchery",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Wadakkanchery is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "triprayar-thrissur",
    "name": "Triprayar",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Triprayar is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "amala-nagar-thrissur",
    "name": "Amala Nagar",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Amala Nagar is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "ollur-thrissur",
    "name": "Ollur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Ollur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "mannuthy-thrissur",
    "name": "Mannuthy",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Mannuthy is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "cherpu-thrissur",
    "name": "Cherpu",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Cherpu is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kechery-thrissur",
    "name": "Kechery",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kechery is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "pazhanji-thrissur",
    "name": "Pazhanji",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Pazhanji is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "porkulam-thrissur",
    "name": "Porkulam",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Porkulam is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "perumpilavu-thrissur",
    "name": "Perumpilavu",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Perumpilavu is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kunnamkulam-town-thrissur",
    "name": "Kunnamkulam Town",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kunnamkulam Town is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "choondal-thrissur",
    "name": "Choondal",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Choondal is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "erumapetty-thrissur",
    "name": "Erumapetty",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Erumapetty is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "velur-thrissur",
    "name": "Velur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Velur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "mundur-thrissur",
    "name": "Mundur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Mundur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kaiparamba-thrissur",
    "name": "Kaiparamba",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kaiparamba is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "peramangalam-thrissur",
    "name": "Peramangalam",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Peramangalam is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "puzhakkal-thrissur",
    "name": "Puzhakkal",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Puzhakkal is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "ayyanthole-thrissur",
    "name": "Ayyanthole",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Ayyanthole is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "ramavarmapuram-thrissur",
    "name": "Ramavarmapuram",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Ramavarmapuram is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "vilvattom-thrissur",
    "name": "Vilvattom",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Vilvattom is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kolazhy-thrissur",
    "name": "Kolazhy",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kolazhy is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kottekkad-thrissur",
    "name": "Kottekkad",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kottekkad is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "nadathara-thrissur",
    "name": "Nadathara",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Nadathara is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "peechi-thrissur",
    "name": "Peechi",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Peechi is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "patturaikkal-thrissur",
    "name": "Patturaikkal",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Patturaikkal is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "punkunnum-thrissur",
    "name": "Punkunnum",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Punkunnum is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "west-fort-thrissur",
    "name": "West Fort",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "West Fort is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kuriachira-thrissur",
    "name": "Kuriachira",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kuriachira is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "ollur-town-thrissur",
    "name": "Ollur Town",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Ollur Town is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "thalore-thrissur",
    "name": "Thalore",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Thalore is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "amballur-thrissur",
    "name": "Amballur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Amballur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "puthukkad-thrissur",
    "name": "Puthukkad",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Puthukkad is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kodakara-thrissur",
    "name": "Kodakara",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kodakara is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "potta-thrissur",
    "name": "Potta",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Potta is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "chalakudy-town-thrissur",
    "name": "Chalakudy Town",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Chalakudy Town is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "koratty-thrissur",
    "name": "Koratty",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Koratty is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "angamaly-border-thrissur",
    "name": "Angamaly Border",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Angamaly Border is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "mala-thrissur",
    "name": "Mala",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Mala is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kuzhur-thrissur",
    "name": "Kuzhur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kuzhur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "annamanada-thrissur",
    "name": "Annamanada",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Annamanada is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "aloor-thrissur",
    "name": "Aloor",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Aloor is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kallettumkara-thrissur",
    "name": "Kallettumkara",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kallettumkara is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "irinjalakuda-town-thrissur",
    "name": "Irinjalakuda Town",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Irinjalakuda Town is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kattur-thrissur",
    "name": "Kattur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Kattur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "thriprayar-thrissur",
    "name": "Thriprayar",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Thriprayar is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "valapad-thrissur",
    "name": "Valapad",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Valapad is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "nattika-thrissur",
    "name": "Nattika",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Nattika is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "sreenarayanapuram-thrissur",
    "name": "Sreenarayanapuram",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Sreenarayanapuram is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "mathilakam-thrissur",
    "name": "Mathilakam",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Mathilakam is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "azhikode-thrissur-thrissur",
    "name": "Azhikode Thrissur",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Azhikode Thrissur is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "cranganore-thrissur",
    "name": "Cranganore",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Cranganore is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "methala-thrissur",
    "name": "Methala",
    "district": "Thrissur",
    "category": "Village & Panchayat",
    "zone": "Central Cultural Hub",
    "tagline": "Picturesque community and locality in Thrissur",
    "description": "Methala is a key residential and agricultural settlement located in the Thrissur district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thrissur Center"
  },
  {
    "id": "kochi-ernakulam",
    "name": "Kochi",
    "district": "Ernakulam",
    "category": "Urban & Commercial",
    "zone": "Cochin Metropolitan",
    "tagline": "Principal administrative and commercial centre of Ernakulam",
    "description": "Kochi serves as a central economic, cultural, and transit nexus for Ernakulam with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "cochin-ernakulam",
    "name": "Cochin",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Cochin is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "ernakulam-town-ernakulam",
    "name": "Ernakulam Town",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Ernakulam Town is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "aluva-ernakulam",
    "name": "Aluva",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Aluva is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "angamaly-ernakulam",
    "name": "Angamaly",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Angamaly is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "perumbavoor-ernakulam",
    "name": "Perumbavoor",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Perumbavoor is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "muvattupuzha-ernakulam",
    "name": "Muvattupuzha",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Muvattupuzha is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kothamangalam-ernakulam",
    "name": "Kothamangalam",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kothamangalam is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "north-paravur-ernakulam",
    "name": "North Paravur",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "North Paravur is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kalamassery-ernakulam",
    "name": "Kalamassery",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kalamassery is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "thrikkakara-ernakulam",
    "name": "Thrikkakara",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Thrikkakara is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kakkanad-ernakulam",
    "name": "Kakkanad",
    "district": "Ernakulam",
    "category": "Tech & Knowledge Hub",
    "zone": "Cochin Metropolitan",
    "tagline": "Major IT innovation corridor driving Kerala’s technology sector",
    "description": "Kakkanad is a premier technology destination housing major multinational software campuses, tech startups, and digital infrastructure.",
    "notableFor": [
      "IT Parks & Campuses",
      "Software Innovations",
      "Modern Infrastructure",
      "Startups"
    ],
    "type": "Commercial Hub",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "infopark-region-ernakulam",
    "name": "Infopark Region",
    "district": "Ernakulam",
    "category": "Tech & Knowledge Hub",
    "zone": "Cochin Metropolitan",
    "tagline": "Major IT innovation corridor driving Kerala’s technology sector",
    "description": "Infopark Region is a premier technology destination housing major multinational software campuses, tech startups, and digital infrastructure.",
    "notableFor": [
      "IT Parks & Campuses",
      "Software Innovations",
      "Modern Infrastructure",
      "Startups"
    ],
    "type": "Commercial Hub",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "tripunithura-ernakulam",
    "name": "Tripunithura",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Tripunithura is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "maradu-ernakulam",
    "name": "Maradu",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Maradu is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kundannoor-ernakulam",
    "name": "Kundannoor",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kundannoor is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "edappally-ernakulam",
    "name": "Edappally",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Edappally is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "palarivattom-ernakulam",
    "name": "Palarivattom",
    "district": "Ernakulam",
    "category": "Urban & Commercial",
    "zone": "Cochin Metropolitan",
    "tagline": "Vibrant commercial municipality in Ernakulam",
    "description": "Palarivattom is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Ernakulam.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "vytila-ernakulam",
    "name": "Vytila",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Vytila is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kadavanthra-ernakulam",
    "name": "Kadavanthra",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kadavanthra is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "panampilly-nagar-ernakulam",
    "name": "Panampilly Nagar",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Panampilly Nagar is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "fort-kochi-ernakulam",
    "name": "Fort Kochi",
    "district": "Ernakulam",
    "category": "Heritage & Culture",
    "zone": "Cochin Metropolitan",
    "tagline": "Historic melting pot of Portuguese, Dutch, British, and Jewish heritage",
    "description": "Fort Kochi & Mattancherry preserve centuries of world trade history with iconic Chinese fishing nets, Synagogue, spice warehouses, and Kochi-Muziris Biennale.",
    "notableFor": [
      "Chinese Fishing Nets",
      "Jewish Synagogue",
      "Dutch Palace",
      "Art Cafes"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "mattancherry-ernakulam",
    "name": "Mattancherry",
    "district": "Ernakulam",
    "category": "Heritage & Culture",
    "zone": "Cochin Metropolitan",
    "tagline": "Historic melting pot of Portuguese, Dutch, British, and Jewish heritage",
    "description": "Fort Kochi & Mattancherry preserve centuries of world trade history with iconic Chinese fishing nets, Synagogue, spice warehouses, and Kochi-Muziris Biennale.",
    "notableFor": [
      "Chinese Fishing Nets",
      "Jewish Synagogue",
      "Dutch Palace",
      "Art Cafes"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "willingdon-island-ernakulam",
    "name": "Willingdon Island",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Willingdon Island is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "cherai-ernakulam",
    "name": "Cherai",
    "district": "Ernakulam",
    "category": "Coastal & Beach",
    "zone": "Cochin Metropolitan",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Cherai offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Ernakulam.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "munambam-ernakulam",
    "name": "Munambam",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Munambam is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "vipin-ernakulam",
    "name": "Vipin",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Vipin is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "njarakkal-ernakulam",
    "name": "Njarakkal",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Njarakkal is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "mulavukad-ernakulam",
    "name": "Mulavukad",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Mulavukad is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "eloor-ernakulam",
    "name": "Eloor",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Eloor is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "varapuzha-ernakulam",
    "name": "Varapuzha",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Varapuzha is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "koonammavu-ernakulam",
    "name": "Koonammavu",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Koonammavu is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "edayar-ernakulam",
    "name": "Edayar",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Edayar is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "nedumbassery-ernakulam",
    "name": "Nedumbassery",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Nedumbassery is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "cochin-airport-region-ernakulam",
    "name": "Cochin Airport Region",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Cochin Airport Region is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kalady-ernakulam",
    "name": "Kalady",
    "district": "Ernakulam",
    "category": "Heritage & Culture",
    "zone": "Cochin Metropolitan",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Kalady holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Ernakulam.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "malayattoor-ernakulam",
    "name": "Malayattoor",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Malayattoor is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kuruppampady-ernakulam",
    "name": "Kuruppampady",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kuruppampady is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kolenchery-ernakulam",
    "name": "Kolenchery",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kolenchery is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "piravom-ernakulam",
    "name": "Piravom",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Piravom is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "koothattukulam-ernakulam",
    "name": "Koothattukulam",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Koothattukulam is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "puthencruz-ernakulam",
    "name": "Puthencruz",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Puthencruz is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "chottanikkara-ernakulam",
    "name": "Chottanikkara",
    "district": "Ernakulam",
    "category": "Heritage & Culture",
    "zone": "Cochin Metropolitan",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Chottanikkara holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Ernakulam.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "mulanthuruthy-ernakulam",
    "name": "Mulanthuruthy",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Mulanthuruthy is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "udayamperoor-ernakulam",
    "name": "Udayamperoor",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Udayamperoor is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "kumbalangi-ernakulam",
    "name": "Kumbalangi",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Kumbalangi is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "chellanam-ernakulam",
    "name": "Chellanam",
    "district": "Ernakulam",
    "category": "Village & Panchayat",
    "zone": "Cochin Metropolitan",
    "tagline": "Picturesque community and locality in Ernakulam",
    "description": "Chellanam is a key residential and agricultural settlement located in the Ernakulam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Ernakulam Center"
  },
  {
    "id": "munnar-idukki",
    "name": "Munnar",
    "district": "Idukki",
    "category": "Nature & Hills",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "World-famous hill resort with rolling tea estates, mist peaks, and waterfalls",
    "description": "Munnar is situated at 1,600 metres in the Western Ghats in Idukki, renowned for sprawling tea gardens, Eravikulam National Park, and Anamudi peak.",
    "notableFor": [
      "Tea Plantations",
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Top Station"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "thodupuzha-idukki",
    "name": "Thodupuzha",
    "district": "Idukki",
    "category": "Urban & Commercial",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Vibrant commercial municipality in Idukki",
    "description": "Thodupuzha is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Idukki.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kattappana-idukki",
    "name": "Kattappana",
    "district": "Idukki",
    "category": "Urban & Commercial",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Vibrant commercial municipality in Idukki",
    "description": "Kattappana is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Idukki.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "nedumkandam-idukki",
    "name": "Nedumkandam",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Nedumkandam is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "adimali-idukki",
    "name": "Adimali",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Adimali is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kumily-idukki",
    "name": "Kumily",
    "district": "Idukki",
    "category": "Nature & Hills",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Periyar National Park gateway, wildlife sanctuary, and spice gardens",
    "description": "Thekkady & Kumily border the famed Periyar Tiger Reserve in Idukki, known for bamboo rafting, elephant sightings, and fragrant cardamom plantations.",
    "notableFor": [
      "Periyar Lake Boating",
      "Spice Plantations",
      "Elephant Junction",
      "Jungle Treks"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "thekkady-idukki",
    "name": "Thekkady",
    "district": "Idukki",
    "category": "Nature & Hills",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Periyar National Park gateway, wildlife sanctuary, and spice gardens",
    "description": "Thekkady & Kumily border the famed Periyar Tiger Reserve in Idukki, known for bamboo rafting, elephant sightings, and fragrant cardamom plantations.",
    "notableFor": [
      "Periyar Lake Boating",
      "Spice Plantations",
      "Elephant Junction",
      "Jungle Treks"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "marayoor-idukki",
    "name": "Marayoor",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Marayoor is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "devikulam-idukki",
    "name": "Devikulam",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Devikulam is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "peermade-idukki",
    "name": "Peermade",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Peermade is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "vagamon-idukki",
    "name": "Vagamon",
    "district": "Idukki",
    "category": "Nature & Hills",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Verdant foothill and mountain landscape with plantation greenery",
    "description": "Vagamon is nestled in the undulating hills and valleys of Idukki, renowned for spice plantations, trekking peaks, and natural splendor.",
    "notableFor": [
      "Mountain Treks",
      "Cool Climate",
      "Spice Estates",
      "Waterfalls"
    ],
    "type": "Scenic Highland",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "ramakkalmedu-idukki",
    "name": "Ramakkalmedu",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Ramakkalmedu is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "cheruthoni-idukki",
    "name": "Cheruthoni",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Cheruthoni is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "painavu-idukki",
    "name": "Painavu",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Painavu is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kanjikuzhy-idukki",
    "name": "Kanjikuzhy",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Kanjikuzhy is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "rajakkad-idukki",
    "name": "Rajakkad",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Rajakkad is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "vandanmedu-idukki",
    "name": "Vandanmedu",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Vandanmedu is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "moolamattom-idukki",
    "name": "Moolamattom",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Moolamattom is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "vandiperiyar-idukki",
    "name": "Vandiperiyar",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Vandiperiyar is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "santhanpara-idukki",
    "name": "Santhanpara",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Santhanpara is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "chinnakanal-idukki",
    "name": "Chinnakanal",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Chinnakanal is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kallar-idukki-idukki",
    "name": "Kallar Idukki",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Kallar Idukki is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "mankulam-idukki",
    "name": "Mankulam",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Mankulam is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "vellathooval-idukki",
    "name": "Vellathooval",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Vellathooval is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "elappara-idukki",
    "name": "Elappara",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Elappara is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kuttikkanam-idukki",
    "name": "Kuttikkanam",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Kuttikkanam is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kanchiyar-idukki",
    "name": "Kanchiyar",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Kanchiyar is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "upputhara-idukki",
    "name": "Upputhara",
    "district": "Idukki",
    "category": "Village & Panchayat",
    "zone": "High Ranges (Western Ghats)",
    "tagline": "Picturesque community and locality in Idukki",
    "description": "Upputhara is a key residential and agricultural settlement located in the Idukki district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Idukki Center"
  },
  {
    "id": "kottayam-kottayam",
    "name": "Kottayam",
    "district": "Kottayam",
    "category": "Urban & Commercial",
    "zone": "Central Travancore",
    "tagline": "Principal administrative and commercial centre of Kottayam",
    "description": "Kottayam serves as a central economic, cultural, and transit nexus for Kottayam with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Kottayam HQ"
  },
  {
    "id": "changanassery-kottayam",
    "name": "Changanassery",
    "district": "Kottayam",
    "category": "Urban & Commercial",
    "zone": "Central Travancore",
    "tagline": "Vibrant commercial municipality in Kottayam",
    "description": "Changanassery is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Kottayam.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "pala-kottayam",
    "name": "Pala",
    "district": "Kottayam",
    "category": "Urban & Commercial",
    "zone": "Central Travancore",
    "tagline": "Vibrant commercial municipality in Kottayam",
    "description": "Pala is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Kottayam.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "vaikom-kottayam",
    "name": "Vaikom",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Vaikom is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kanjirappally-kottayam",
    "name": "Kanjirappally",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Kanjirappally is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "ettumanoor-kottayam",
    "name": "Ettumanoor",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Ettumanoor is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "erattupetta-kottayam",
    "name": "Erattupetta",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Erattupetta is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kumarakom-kottayam",
    "name": "Kumarakom",
    "district": "Kottayam",
    "category": "Backwaters & Waterways",
    "zone": "Central Travancore",
    "tagline": "Heart of Kerala’s backwaters and below-sea-level paddy cultivation",
    "description": "Kumarakom represents the world-renowned backwater landscape, famous for traditional houseboats, emerald canals, and bird sanctuaries.",
    "notableFor": [
      "Houseboat Cruises",
      "Vembanad Lake",
      "Canal Waterways",
      "Bird Sanctuary"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "pampady-kottayam",
    "name": "Pampady",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Pampady is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kuravilangad-kottayam",
    "name": "Kuravilangad",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Kuravilangad is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kaduthuruthy-kottayam",
    "name": "Kaduthuruthy",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Kaduthuruthy is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "manimala-kottayam",
    "name": "Manimala",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Manimala is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "mundakayam-kottayam",
    "name": "Mundakayam",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Mundakayam is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "ponkunnam-kottayam",
    "name": "Ponkunnam",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Ponkunnam is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "athirampuzha-kottayam",
    "name": "Athirampuzha",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Athirampuzha is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "ayarkkunnam-kottayam",
    "name": "Ayarkkunnam",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Ayarkkunnam is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "puthuppally-kottayam",
    "name": "Puthuppally",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Puthuppally is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "manarcad-kottayam",
    "name": "Manarcad",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Manarcad is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "thalayolaparambu-kottayam",
    "name": "Thalayolaparambu",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Thalayolaparambu is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "ramapuram-kottayam",
    "name": "Ramapuram",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Ramapuram is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "poonjar-kottayam",
    "name": "Poonjar",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Poonjar is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "teekoy-kottayam",
    "name": "Teekoy",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Teekoy is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kidangoor-kottayam",
    "name": "Kidangoor",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Kidangoor is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "uzhavoor-kottayam",
    "name": "Uzhavoor",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Uzhavoor is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kallara-kottayam-kottayam",
    "name": "Kallara Kottayam",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Kallara Kottayam is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "nattakom-kottayam",
    "name": "Nattakom",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Nattakom is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "kumaranalloor-kottayam",
    "name": "Kumaranalloor",
    "district": "Kottayam",
    "category": "Village & Panchayat",
    "zone": "Central Travancore",
    "tagline": "Picturesque community and locality in Kottayam",
    "description": "Kumaranalloor is a key residential and agricultural settlement located in the Kottayam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kottayam Center"
  },
  {
    "id": "alappuzha-alappuzha",
    "name": "Alappuzha",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Alappuzha is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha HQ"
  },
  {
    "id": "alleppey-alappuzha",
    "name": "Alleppey",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Alleppey is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "cherthala-alappuzha",
    "name": "Cherthala",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Cherthala is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "ambalapuzha-alappuzha",
    "name": "Ambalapuzha",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Ambalapuzha is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "haripad-alappuzha",
    "name": "Haripad",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Haripad is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "kayamkulam-alappuzha",
    "name": "Kayamkulam",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Kayamkulam is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "mavelikara-alappuzha",
    "name": "Mavelikara",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Mavelikara is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "chengannur-alappuzha",
    "name": "Chengannur",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Chengannur is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "aroor-alappuzha",
    "name": "Aroor",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Aroor is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "eramalloor-alappuzha",
    "name": "Eramalloor",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Eramalloor is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "chandiroor-alappuzha",
    "name": "Chandiroor",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Chandiroor is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "kuthiathode-alappuzha",
    "name": "Kuthiathode",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Kuthiathode is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "thuravoor-alappuzha",
    "name": "Thuravoor",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Thuravoor is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "pattanakkad-alappuzha",
    "name": "Pattanakkad",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Pattanakkad is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "cherthala-town-alappuzha",
    "name": "Cherthala Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Cherthala Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "mararikulam-alappuzha",
    "name": "Mararikulam",
    "district": "Alappuzha",
    "category": "Coastal & Beach",
    "zone": "Backwater Country",
    "tagline": "Coastal destination along the scenic Arabian Sea coastline",
    "description": "Mararikulam offers scenic ocean breeze, fishing harbors, shoreline beauty, and traditional coastal life in Alappuzha.",
    "notableFor": [
      "Arabian Sea Shoreline",
      "Fresh Seafood",
      "Coconut Groves",
      "Sunset Views"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "muhamma-alappuzha",
    "name": "Muhamma",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Muhamma is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "mannancherry-alappuzha",
    "name": "Mannancherry",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Mannancherry is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "kalavoor-alappuzha",
    "name": "Kalavoor",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Kalavoor is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "aryad-alappuzha",
    "name": "Aryad",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Aryad is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "alappuzha-town-alappuzha",
    "name": "Alappuzha Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Alappuzha Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "punnamada-alappuzha",
    "name": "Punnamada",
    "district": "Alappuzha",
    "category": "Backwaters & Waterways",
    "zone": "Backwater Country",
    "tagline": "Heart of Kerala’s backwaters and below-sea-level paddy cultivation",
    "description": "Punnamada represents the world-renowned backwater landscape, famous for traditional houseboats, emerald canals, and bird sanctuaries.",
    "notableFor": [
      "Houseboat Cruises",
      "Vembanad Lake",
      "Canal Waterways",
      "Bird Sanctuary"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "kuttanad-alappuzha",
    "name": "Kuttanad",
    "district": "Alappuzha",
    "category": "Backwaters & Waterways",
    "zone": "Backwater Country",
    "tagline": "Heart of Kerala’s backwaters and below-sea-level paddy cultivation",
    "description": "Kuttanad represents the world-renowned backwater landscape, famous for traditional houseboats, emerald canals, and bird sanctuaries.",
    "notableFor": [
      "Houseboat Cruises",
      "Vembanad Lake",
      "Canal Waterways",
      "Bird Sanctuary"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "nedumudi-alappuzha",
    "name": "Nedumudi",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Nedumudi is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "champakulam-alappuzha",
    "name": "Champakulam",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Champakulam is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "ramankary-alappuzha",
    "name": "Ramankary",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Ramankary is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "edathua-alappuzha",
    "name": "Edathua",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Edathua is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "ambalappuzha-town-alappuzha",
    "name": "Ambalappuzha Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Ambalappuzha Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "purakkad-alappuzha",
    "name": "Purakkad",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Purakkad is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "thottappally-alappuzha",
    "name": "Thottappally",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Thottappally is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "karuvatta-alappuzha",
    "name": "Karuvatta",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Karuvatta is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "haripad-town-alappuzha",
    "name": "Haripad Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Haripad Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "cheppad-alappuzha",
    "name": "Cheppad",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Cheppad is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "kayamkulam-town-alappuzha",
    "name": "Kayamkulam Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Kayamkulam Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "krishnapuram-alappuzha",
    "name": "Krishnapuram",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Krishnapuram is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "charummoodu-alappuzha",
    "name": "Charummoodu",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Charummoodu is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "kattanam-alappuzha",
    "name": "Kattanam",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Kattanam is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "mavelikara-town-alappuzha",
    "name": "Mavelikara Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Mavelikara Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "mannar-alappuzha",
    "name": "Mannar",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Mannar is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "chengannur-town-alappuzha",
    "name": "Chengannur Town",
    "district": "Alappuzha",
    "category": "Village & Panchayat",
    "zone": "Backwater Country",
    "tagline": "Picturesque community and locality in Alappuzha",
    "description": "Chengannur Town is a key residential and agricultural settlement located in the Alappuzha district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Alappuzha Center"
  },
  {
    "id": "pathanamthitta-pathanamthitta",
    "name": "Pathanamthitta",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Pathanamthitta is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta HQ"
  },
  {
    "id": "adoor-pathanamthitta",
    "name": "Adoor",
    "district": "Pathanamthitta",
    "category": "Urban & Commercial",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Vibrant commercial municipality in Pathanamthitta",
    "description": "Adoor is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Pathanamthitta.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "thiruvalla-pathanamthitta",
    "name": "Thiruvalla",
    "district": "Pathanamthitta",
    "category": "Urban & Commercial",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Vibrant commercial municipality in Pathanamthitta",
    "description": "Thiruvalla is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Pathanamthitta.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "ranni-pathanamthitta",
    "name": "Ranni",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Ranni is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "konni-pathanamthitta",
    "name": "Konni",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Konni is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "kozhencherry-pathanamthitta",
    "name": "Kozhencherry",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Kozhencherry is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "pandalam-pathanamthitta",
    "name": "Pandalam",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Pandalam is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "mallappally-pathanamthitta",
    "name": "Mallappally",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Mallappally is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "aranmula-pathanamthitta",
    "name": "Aranmula",
    "district": "Pathanamthitta",
    "category": "Heritage & Culture",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Spiritual and cultural haven with deep historic lineage",
    "description": "Aranmula holds religious and cultural prominence with revered shrines, traditional arts, and ancient historic heritage in Pathanamthitta.",
    "notableFor": [
      "Ancient Temple Architecture",
      "Annual Festivals",
      "Cultural Heritage",
      "Spiritual Center"
    ],
    "type": "Heritage Spot",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "kumbazha-pathanamthitta",
    "name": "Kumbazha",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Kumbazha is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "elavumthitta-pathanamthitta",
    "name": "Elavumthitta",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Elavumthitta is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "enathu-pathanamthitta",
    "name": "Enathu",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Enathu is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "chittar-pathanamthitta",
    "name": "Chittar",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Chittar is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "seethathodu-pathanamthitta",
    "name": "Seethathodu",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Seethathodu is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "vadasserikkara-pathanamthitta",
    "name": "Vadasserikkara",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Vadasserikkara is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "kodumon-pathanamthitta",
    "name": "Kodumon",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Kodumon is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "malayalappuzha-pathanamthitta",
    "name": "Malayalappuzha",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Malayalappuzha is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "mylapra-pathanamthitta",
    "name": "Mylapra",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Mylapra is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "pramadom-pathanamthitta",
    "name": "Pramadom",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Pramadom is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "ezhamkulam-pathanamthitta",
    "name": "Ezhamkulam",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Ezhamkulam is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "kadapra-pathanamthitta",
    "name": "Kadapra",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Kadapra is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "niranam-pathanamthitta",
    "name": "Niranam",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Niranam is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "kaviyoor-pathanamthitta",
    "name": "Kaviyoor",
    "district": "Pathanamthitta",
    "category": "Village & Panchayat",
    "zone": "Pilgrim & Forest Foothills",
    "tagline": "Picturesque community and locality in Pathanamthitta",
    "description": "Kaviyoor is a key residential and agricultural settlement located in the Pathanamthitta district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Pathanamthitta Center"
  },
  {
    "id": "kollam-kollam",
    "name": "Kollam",
    "district": "Kollam",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Principal administrative and commercial centre of Kollam",
    "description": "Kollam serves as a central economic, cultural, and transit nexus for Kollam with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Kollam HQ"
  },
  {
    "id": "quilon-kollam",
    "name": "Quilon",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Quilon is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "karunagappally-kollam",
    "name": "Karunagappally",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Karunagappally is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "chavara-kollam",
    "name": "Chavara",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Chavara is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "sasthamcotta-kollam",
    "name": "Sasthamcotta",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Sasthamcotta is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kunnathur-kollam",
    "name": "Kunnathur",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Kunnathur is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "pathanapuram-kollam",
    "name": "Pathanapuram",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Pathanapuram is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "punalur-kollam",
    "name": "Punalur",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Punalur is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "anchal-kollam",
    "name": "Anchal",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Anchal is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kottarakkara-kollam",
    "name": "Kottarakkara",
    "district": "Kollam",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Vibrant commercial municipality in Kollam",
    "description": "Kottarakkara is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Kollam.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kundara-kollam",
    "name": "Kundara",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Kundara is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "chathannoor-kollam",
    "name": "Chathannoor",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Chathannoor is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "paravur-kollam-kollam",
    "name": "Paravur Kollam",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Paravur Kollam is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "oachira-kollam",
    "name": "Oachira",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Oachira is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "clappana-kollam",
    "name": "Clappana",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Clappana is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "karunagappally-town-kollam",
    "name": "Karunagappally Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Karunagappally Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "vavvavakavu-kollam",
    "name": "Vavvavakavu",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Vavvavakavu is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "puthiyakavu-kollam",
    "name": "Puthiyakavu",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Puthiyakavu is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "neendakara-kollam",
    "name": "Neendakara",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Neendakara is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "sakthikulangara-kollam",
    "name": "Sakthikulangara",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Sakthikulangara is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kavanad-kollam",
    "name": "Kavanad",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Kavanad is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "tangasseri-kollam",
    "name": "Tangasseri",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Tangasseri is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "thirumullavaram-kollam",
    "name": "Thirumullavaram",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Thirumullavaram is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kollam-town-kollam",
    "name": "Kollam Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Kollam Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "eravipuram-kollam",
    "name": "Eravipuram",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Eravipuram is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "pallimukku-kollam",
    "name": "Pallimukku",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Pallimukku is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kottiyam-kollam",
    "name": "Kottiyam",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Kottiyam is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "chathannoor-town-kollam",
    "name": "Chathannoor Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Chathannoor Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "parippally-kollam",
    "name": "Parippally",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Parippally is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "paravur-town-kollam",
    "name": "Paravur Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Paravur Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "pooyappally-kollam",
    "name": "Pooyappally",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Pooyappally is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "ayoor-kollam",
    "name": "Ayoor",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Ayoor is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "chadayamangalam-kollam",
    "name": "Chadayamangalam",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Chadayamangalam is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "anchal-town-kollam",
    "name": "Anchal Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Anchal Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "punalur-town-kollam",
    "name": "Punalur Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Punalur Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "pathanapuram-town-kollam",
    "name": "Pathanapuram Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Pathanapuram Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "valakom-kollam",
    "name": "Valakom",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Valakom is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kottarakkara-town-kollam",
    "name": "Kottarakkara Town",
    "district": "Kollam",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Vibrant commercial municipality in Kollam",
    "description": "Kottarakkara Town is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Kollam.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "ezhukone-kollam",
    "name": "Ezhukone",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Ezhukone is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "kundara-town-kollam",
    "name": "Kundara Town",
    "district": "Kollam",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Kollam",
    "description": "Kundara Town is a key residential and agricultural settlement located in the Kollam district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Kollam Center"
  },
  {
    "id": "thiruvananthapuram-thiruvananthapuram",
    "name": "Thiruvananthapuram",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Principal administrative and commercial centre of Thiruvananthapuram",
    "description": "Thiruvananthapuram serves as a central economic, cultural, and transit nexus for Thiruvananthapuram with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Thiruvananthapuram HQ"
  },
  {
    "id": "trivandrum-thiruvananthapuram",
    "name": "Trivandrum",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Principal administrative and commercial centre of Thiruvananthapuram",
    "description": "Trivandrum serves as a central economic, cultural, and transit nexus for Thiruvananthapuram with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "attingal-thiruvananthapuram",
    "name": "Attingal",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Attingal is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kazhakkoottam-thiruvananthapuram",
    "name": "Kazhakkoottam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kazhakkoottam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "neyyattinkara-thiruvananthapuram",
    "name": "Neyyattinkara",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Neyyattinkara is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "nedumangad-thiruvananthapuram",
    "name": "Nedumangad",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Nedumangad is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "varkala-thiruvananthapuram",
    "name": "Varkala",
    "district": "Thiruvananthapuram",
    "category": "Coastal & Beach",
    "zone": "South Travancore",
    "tagline": "Acclaimed beach destination with spectacular coastal geological views",
    "description": "Varkala is one of Kerala’s crown coastal jewels, drawing travelers worldwide for sandy shores, ayurveda, and marine vistas.",
    "notableFor": [
      "Lighthouse Shore",
      "Cliff Walk",
      "Ayurvedic Retreats",
      "Arabian Sea Sunsets"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kilimanoor-thiruvananthapuram",
    "name": "Kilimanoor",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kilimanoor is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "vizhinjam-thiruvananthapuram",
    "name": "Vizhinjam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Vizhinjam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kovalam-thiruvananthapuram",
    "name": "Kovalam",
    "district": "Thiruvananthapuram",
    "category": "Coastal & Beach",
    "zone": "South Travancore",
    "tagline": "Acclaimed beach destination with spectacular coastal geological views",
    "description": "Kovalam is one of Kerala’s crown coastal jewels, drawing travelers worldwide for sandy shores, ayurveda, and marine vistas.",
    "notableFor": [
      "Lighthouse Shore",
      "Cliff Walk",
      "Ayurvedic Retreats",
      "Arabian Sea Sunsets"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "technopark-region-thiruvananthapuram",
    "name": "Technopark Region",
    "district": "Thiruvananthapuram",
    "category": "Tech & Knowledge Hub",
    "zone": "South Travancore",
    "tagline": "Major IT innovation corridor driving Kerala’s technology sector",
    "description": "Technopark Region is a premier technology destination housing major multinational software campuses, tech startups, and digital infrastructure.",
    "notableFor": [
      "IT Parks & Campuses",
      "Software Innovations",
      "Modern Infrastructure",
      "Startups"
    ],
    "type": "Commercial Hub",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kaniyapuram-thiruvananthapuram",
    "name": "Kaniyapuram",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kaniyapuram is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "mangalapuram-thiruvananthapuram",
    "name": "Mangalapuram",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Mangalapuram is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "korani-thiruvananthapuram",
    "name": "Korani",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Korani is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "attingal-town-thiruvananthapuram",
    "name": "Attingal Town",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Attingal Town is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "alamcode-thiruvananthapuram",
    "name": "Alamcode",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Alamcode is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kallambalam-thiruvananthapuram",
    "name": "Kallambalam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kallambalam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "navaikulam-thiruvananthapuram",
    "name": "Navaikulam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Navaikulam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "parippally-border-thiruvananthapuram",
    "name": "Parippally Border",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Parippally Border is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "varkala-town-thiruvananthapuram",
    "name": "Varkala Town",
    "district": "Thiruvananthapuram",
    "category": "Coastal & Beach",
    "zone": "South Travancore",
    "tagline": "Acclaimed beach destination with spectacular coastal geological views",
    "description": "Varkala Town is one of Kerala’s crown coastal jewels, drawing travelers worldwide for sandy shores, ayurveda, and marine vistas.",
    "notableFor": [
      "Lighthouse Shore",
      "Cliff Walk",
      "Ayurvedic Retreats",
      "Arabian Sea Sunsets"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "edava-thiruvananthapuram",
    "name": "Edava",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Edava is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kappil-trivandrum-thiruvananthapuram",
    "name": "Kappil Trivandrum",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Principal administrative and commercial centre of Thiruvananthapuram",
    "description": "Kappil Trivandrum serves as a central economic, cultural, and transit nexus for Thiruvananthapuram with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kadakkavoor-thiruvananthapuram",
    "name": "Kadakkavoor",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kadakkavoor is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "chirayinkeezhu-thiruvananthapuram",
    "name": "Chirayinkeezhu",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Chirayinkeezhu is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "murukkumpuzha-thiruvananthapuram",
    "name": "Murukkumpuzha",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Murukkumpuzha is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kazhakuttam-town-thiruvananthapuram",
    "name": "Kazhakuttam Town",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kazhakuttam Town is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "sreekariyam-thiruvananthapuram",
    "name": "Sreekariyam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Sreekariyam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "pothencode-thiruvananthapuram",
    "name": "Pothencode",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Pothencode is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "venjaramoodu-thiruvananthapuram",
    "name": "Venjaramoodu",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Venjaramoodu is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "vembayam-thiruvananthapuram",
    "name": "Vembayam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Vembayam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "nedumangad-town-thiruvananthapuram",
    "name": "Nedumangad Town",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Nedumangad Town is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "palode-thiruvananthapuram",
    "name": "Palode",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Palode is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kattakada-thiruvananthapuram",
    "name": "Kattakada",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kattakada is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "malayinkeezhu-thiruvananthapuram",
    "name": "Malayinkeezhu",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Malayinkeezhu is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "neyyattinkara-town-thiruvananthapuram",
    "name": "Neyyattinkara Town",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Neyyattinkara Town is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "parassala-thiruvananthapuram",
    "name": "Parassala",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Parassala is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "amaravila-thiruvananthapuram",
    "name": "Amaravila",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Amaravila is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "balaramapuram-thiruvananthapuram",
    "name": "Balaramapuram",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Balaramapuram is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "vizhinjam-port-region-thiruvananthapuram",
    "name": "Vizhinjam Port Region",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Vizhinjam Port Region is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kovalam-beach-thiruvananthapuram",
    "name": "Kovalam Beach",
    "district": "Thiruvananthapuram",
    "category": "Coastal & Beach",
    "zone": "South Travancore",
    "tagline": "Acclaimed beach destination with spectacular coastal geological views",
    "description": "Kovalam Beach is one of Kerala’s crown coastal jewels, drawing travelers worldwide for sandy shores, ayurveda, and marine vistas.",
    "notableFor": [
      "Lighthouse Shore",
      "Cliff Walk",
      "Ayurvedic Retreats",
      "Arabian Sea Sunsets"
    ],
    "type": "Coastal Locality",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "thiruvallam-thiruvananthapuram",
    "name": "Thiruvallam",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Vibrant commercial municipality in Thiruvananthapuram",
    "description": "Thiruvallam is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Thiruvananthapuram.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "nemom-thiruvananthapuram",
    "name": "Nemom",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Nemom is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "pappanamcode-thiruvananthapuram",
    "name": "Pappanamcode",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Pappanamcode is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "karamana-thiruvananthapuram",
    "name": "Karamana",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Karamana is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "thampanoor-thiruvananthapuram",
    "name": "Thampanoor",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Thampanoor is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "east-fort-trivandrum-thiruvananthapuram",
    "name": "East Fort Trivandrum",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Principal administrative and commercial centre of Thiruvananthapuram",
    "description": "East Fort Trivandrum serves as a central economic, cultural, and transit nexus for Thiruvananthapuram with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "palayam-thiruvananthapuram",
    "name": "Palayam",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Vibrant commercial municipality in Thiruvananthapuram",
    "description": "Palayam is an active commercial town featuring bustling markets, transportation hubs, and diverse trade in Thiruvananthapuram.",
    "notableFor": [
      "Trade & Commerce",
      "Bus/Train Connectivity",
      "Local Markets",
      "Educational Centers"
    ],
    "type": "Town",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "vellayambalam-thiruvananthapuram",
    "name": "Vellayambalam",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Vellayambalam is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kowdiar-thiruvananthapuram",
    "name": "Kowdiar",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kowdiar is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "peroorkada-thiruvananthapuram",
    "name": "Peroorkada",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Peroorkada is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "vattiyoorkavu-thiruvananthapuram",
    "name": "Vattiyoorkavu",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Vattiyoorkavu is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "mannanthala-thiruvananthapuram",
    "name": "Mannanthala",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Mannanthala is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kesavadasapuram-thiruvananthapuram",
    "name": "Kesavadasapuram",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kesavadasapuram is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "medical-college-trivandrum-thiruvananthapuram",
    "name": "Medical College Trivandrum",
    "district": "Thiruvananthapuram",
    "category": "Urban & Commercial",
    "zone": "South Travancore",
    "tagline": "Principal administrative and commercial centre of Thiruvananthapuram",
    "description": "Medical College Trivandrum serves as a central economic, cultural, and transit nexus for Thiruvananthapuram with extensive markets, healthcare, and educational facilities.",
    "notableFor": [
      "Commercial Centers",
      "Railway Hub",
      "Administrative District HQ",
      "Historic Markets"
    ],
    "type": "Major City",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "kumarapuram-thiruvananthapuram",
    "name": "Kumarapuram",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Kumarapuram is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "pettah-thiruvananthapuram",
    "name": "Pettah",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Pettah is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "shanghumukham-thiruvananthapuram",
    "name": "Shanghumukham",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Shanghumukham is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  },
  {
    "id": "veli-thiruvananthapuram",
    "name": "Veli",
    "district": "Thiruvananthapuram",
    "category": "Village & Panchayat",
    "zone": "South Travancore",
    "tagline": "Picturesque community and locality in Thiruvananthapuram",
    "description": "Veli is a key residential and agricultural settlement located in the Thiruvananthapuram district of Kerala.",
    "notableFor": [
      "Panchayat Community",
      "Agricultural Farmlands",
      "Quiet Surroundings",
      "Local Services"
    ],
    "type": "Village",
    "nearbyHub": "Thiruvananthapuram Center"
  }
];

export const INITIAL_BUSINESSES: BusinessListing[] = [];

