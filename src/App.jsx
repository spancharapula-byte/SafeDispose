import './App.css'
import { useEffect, useState } from 'react'
// Lucide icons import
import {
  Battery,
  BatteryMedium,
  BatteryCharging,
  BatteryFull,
  Circle,
  Lightbulb,
  Laptop,
  Smartphone,
  Monitor,
  Cable,
  Paintbrush,
  PaintBucket,
  SprayCan,
  FlaskConical,
  Syringe,
  Pill,
  Wind,
  Car,
  Fuel,
  Droplets,
  CircleGauge,
  Refrigerator,
  Snowflake,
  WashingMachine,
  Microwave,
  CookingPot,
  Armchair,
  BedDouble,
  RockingChair,
  RectangleHorizontal,
  CarBattery,
  TriangleAlert,
  ExternalLink,
  Gamepad2,
  ClipboardList,
} from 'lucide-react'


// All categories info
const catalog = [
  {
    id: 'batteries',
    parentId: null,
    type: 'category',
    name: 'Batteries',
    icon: Battery,
    aliases: [
      'battery'
    ]
  },
  {
    id: 'lighting',
    parentId: null,
    type: 'category',
    name: 'Lighting',
    icon: Lightbulb,
    aliases: [
      'lights',
      'light bulb',
      'light bulbs',
      'lamp',
      'lamps'
    ]
  },
  {
    id: 'electronics',
    parentId: null,
    type: 'category',
    name: 'Electronics',
    icon: Laptop,
    aliases: [
      'e-waste',
      'ewaste',
      'technology',
      'devices'
    ]
  },
  {
    id: 'paint-chemicals',
    parentId: null,
    type: 'category',
    name: 'Paint & Chemicals',
    icon: Paintbrush,
  },
  {
    id: 'medicine-needles',
    parentId: null,
    type: 'category',
    name: 'Medicine & Needles',
    icon: Syringe,
    aliases: [
      'drugs',
      'drug',
      'medical',
      'sharps'
    ]
  },
  {
    id: 'automotive',
    parentId: null,
    type: 'category',
    name: 'Automotive',
    icon: Car,
    aliases: [
      'vehicle',
      'vehicles',
      'automotive',
      'auto',
      'garage'
    ]
  },
  {
    id: 'appliances',
    parentId: null,
    type: 'category',
    name: 'Appliances',
    icon: Refrigerator,
    aliases: [
      'household',
      'large appliances',
    ]
  },
  {
    id: 'furniture-bulky-items',
    parentId: null,
    type: 'category',
    name: 'Furniture & Bulky Items',
    icon: Armchair,
    aliases: [
      'large items',
      'large furniture',
      'oversized items',
      'oversized furniture'
    ]
  },

  // Battery subcategories
  {
    id: 'single-use-batteries',
    parentId: 'batteries',
    type: 'subcategory',
    name: 'Single-Use Batteries',
    icon: BatteryMedium,

    summary: 'Do not place single-use batteries in the trash or curbside recycling. Take them to an approved battery recycling location, participating retailer, or hazardous waste collection center.',
    instructions: [
      'Store the batteries in a cool, safe, dry place away from children and other flammable materials until recycled.',
      'For extra safety, tape the ends of the batteries with non-conductive or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collection/recycling location.',
    ],

    safetyNote: 'Even used batteries can retain energy. Keep them in a safe, dry place away from children and other flammable materials. Keep damaged or leaking batteries away from skin and eyes, and keep them separate from other batteries.',
    sources:
    [
      {
        name: 'California DTSC',
        url: 'https://dtsc.ca.gov/universalwaste/universal-waste-for-residents-batteries/',
      },
      {
        name: 'U.S. EPA - Used Household Batteries',
        url: 'https://www.epa.gov/recycle/used-household-batteries',
      },
      {
        name: 'CalRecycle',
        url: 'https://calrecycle.ca.gov/HomeHazWaste/Info/',
      }
    ],

    aliases: [
      'single use battery',
      'alkaline battery',
      'alkaline batteries',
      'disposable battery',
      'disposable batteries',
      'aa battery',
      'aaa battery',
      'c battery',
      'd battery',
      '9v battery',
      '9 volt battery',
    ],
  },
  {
    id: 'rechargeable-batteries',
    parentId: 'batteries',
    type: 'subcategory',
    name: 'Rechargeable Batteries',
    icon: BatteryCharging,

    summary: 'Do not place rechargeable batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collection center.',
    instructions: [
      'Remove the batteries from devices if it is designed to be safely removed.',
      'Place each battery in a separate plastic bag or tape the ends of the batteries with clear or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collector/recycler, retailer, or hazardous waste collection center.',
    ],

    safetyNote: 'Rechargeable batteries may still retain enough energy to cause a fire or injury. Do not damage, crush, puncture, or improperly remove batteries from a device.',
    sources:
    [
      {
        name: 'U.S. EPA - Used Household Batteries',
        url: 'https://www.epa.gov/recycle/used-household-batteries',
      },
      {
        name: 'California DTSC - Batteries',
        url: 'https://dtsc.ca.gov/universalwaste/universal-waste-for-residents-batteries/',
      }
    ],
    aliases: [
  'rechargeable battery',
  'nimh battery',
  'nickel metal hydride battery',
  'nicd battery',
  'nickel cadmium battery',
  'rechargeable aa battery',
  'rechargeable aaa battery',
]
  },
  {
    id: 'lithium-ion-batteries',
    parentId: 'batteries',
    type: 'subcategory',
    name: 'Lithium-Ion Batteries',
    icon: BatteryFull,

    summary: 'Do not place lithium-ion batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collection center.',
    instructions: [
      'Remove the batteries from devices if it is designed to be safely removed.',
      'Place each battery in a separate plastic bag or tape the ends of the batteries with clear or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collector/recycler, retailer, or hazardous waste collection center.',
    ],

    safetyNote: 'Lithium-ion batteries can cause fires if damaged or short-circuited. Do not crush, bend, puncture, or improperly remove them from a device. If a battery is damaged or leaking, contact the battery/device manufacturer for specific instructions.',
    sources:
    [
      {
        name: 'U.S. EPA - Lithium-Ion Batteries',
        url: 'https://www.epa.gov/recycle/used-lithium-ion-batteries',
      },
      {
        name: 'California DTSC - Batteries',
        url: 'https://dtsc.ca.gov/universalwaste/universal-waste-for-residents-batteries/',
      }
    ],
    aliases: [
  'lithium battery',
  'lithium ion battery',
  'li-ion battery',
  'li ion battery',
  'rechargeable lithium battery',
  'phone battery',
  'laptop battery',
],
  },
  {
    id: 'button-coin-batteries',
    parentId: 'batteries',
    type: 'subcategory',
    name: 'Button & Coin Batteries',
    icon: Circle,

    summary: 'Do not place button or coin batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collection center.',
    instructions: [
      'Remove the batteries from devices if it is designed to be safely removed.',
      'Cover the battery terminals or the entire battery with clear or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collector/recycler, retailer, or hazardous waste collection center.',
    ],

    safetyNote: 'Button and coin batteries can cause severe injuries if swallowed. Keep them away from children. If one is swallowed, seek medical attention immediately.',
    sources:
    [
      {
        name: 'U.S. CPSC - Button & Coin Batteries',
        url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Button-Cell-Coin-Battery-Information-Center',
      },
      {
        name: 'U.S. EPA - Used Household Batteries',
        url: 'https://www.epa.gov/recycle/used-household-batteries',
      },
      {
        name: 'California DTSC - Batteries',
        url: 'https://dtsc.ca.gov/universalwaste/universal-waste-for-residents-batteries/',
      }
    ],
    aliases: [
  'button battery',
  'button cell',
  'coin battery',
  'coin cell',
  'watch battery',
  'hearing aid battery',
  'small round battery',
],
  },
  {
    id: 'car-batteries',
    parentId: 'batteries',
    type: 'subcategory',
    name: 'Car Batteries',
    icon: CarBattery,

    summary: 'Do not place car batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collection center.',
    instructions: [
      'Keep the battery intact and undamaged if possible, and follow all handling instructions provided on the battery.',
      'Return the used battery to the retailer for recycling if purchasing a new one.',
      'If you are not purchasing a new battery, contact a local battery retailer or collector for proper disposal and to confirm it accepts used car batteries for recycling.',
    ],

    safetyNote: 'Car batteries contain lead and sulfuric acid. Do not crush, bend, puncture, or open the battery, and follow all handling instructions provided on the battery.',
    sources:
    [
      {
        name: 'California DTSC - Lead-Acid Batteries',
        url: 'https://dtsc.ca.gov/management-of-spent-lead-acid-batteries/',
      },
      {
        name: 'U.S. EPA - Used Household Batteries',
        url: 'https://www.epa.gov/recycle/used-household-batteries',
      }
    ],
    aliases: [
  'car battery',
  'vehicle battery',
  'automotive battery',
  'auto battery',
  'lead acid battery',
  'lead-acid battery',
  'starter battery',
],
  },

  // Lighting subcategories
  {
    id: 'cfl-bulbs',
    parentId: 'lighting',
    type: 'subcategory',
    name: 'CFL Bulbs',
    icon: Lightbulb,

    summary: 'Do not place CFL bulbs in the trash or curbside recycling. Take them to an approved recycling location, participating retailer, or hazardous waste collection center.',
    instructions: [
      'Keep the bulb intact and undamaged if possible, and handle carefully to prevent breakage.',
      'Store the bulb in a safe, dry place away from children and pets where it cannot be broken.',
      'Take the CFL bulbs to an approved collector/recycler, retailer, or hazardous waste collection center that accepts fluorescent bulbs.',
    ],

    safetyNote: 'CFL bulbs contain small amounts of mercury. Do not break them, and if one breaks, keep people away from the area, ventilate the room, and follow official cleanup guidance.',
    sources:
    [
      {
        name: 'California DTSC - Fluorescent Lamps',
        url: 'https://dtsc.ca.gov/universalwaste/universal-waste-for-residents-fluorescent-lamps/',
      },
      {
        name: 'U.S. EPA - Broken CFL Cleanup',
        url: 'https://www.epa.gov/mercury/cleaning-broken-cfl',
      }
    ],
    aliases: [
  'cfl bulb',
  'compact fluorescent bulb',
  'compact fluorescent lamp',
  'spiral bulb',
  'curly bulb',
  'energy saving bulb',
],
  },
  {
    id: 'led-bulbs',
    parentId: 'lighting',
    type: 'subcategory',
    name: 'LED Bulbs',
    icon: Lightbulb,

    summary: 'Do not place LED bulbs in the trash or curbside recycling. Take them to an approved recycling location or hazardous waste collection center.',
    instructions: [
      'Keep the bulb intact and undamaged if possible, and handle carefully to prevent breakage.',
      'Do not place LED bulbs in the trash or curbside recycling.',
      'Take the LED bulbs to an approved recycling location or hazardous waste collection center that accepts LED lights.',
    ],

    safetyNote: 'LED bulbs can contain small amounts of hazardous materials. Do not break them, puncture, or crush them before recycling.',
    sources:
    [
      {
        name: 'CalRecycle - Waste Banned From Trash',
        url: 'https://calrecycle.ca.gov/HomeHazWaste/Info/',
      },
      {
        name: 'California DTSC - Household Hazardous Waste',
        url: 'https://dtsc.ca.gov/households-and-hazardous-waste/',
      }
    ],
    aliases: [
  'led bulb',
  'led light',
  'led lamp',
  'light emitting diode bulb',
  'energy efficient bulb',
],
  },
  {
    id: 'incandescent-halogen-bulbs',
    parentId: 'lighting',
    type: 'subcategory',
    name: 'Incandescent & Halogen Bulbs',
    icon: Lightbulb,

    summary: 'Incandescent and halogen bulbs can generally be placed in the household trash. Do not place them in curbside recycling, however.',
    instructions: [
      'Make sure the bulbs are completely cool before handling.',
      'Wrap the bulbs in materials such as paper or newspaper or place them in protective packaging to ensure the glass does not break.',
      'Place the protected bulbs in your household trash, not the curbside recycling.',
    ],

    safetyNote: 'These bulbs are made of fragile glass and can break easily. Handle them with care and protect broken bulbs properly to prevent injury.',
    sources:
    [
      {
        name: 'OC Waste & Recycling - Light Bulbs',
        url: 'https://oclandfills.com/news/quick-guide-disposing-light-bulbs',
      },
    ],
    aliases: [
  'incandescent bulb',
  'halogen bulb',
  'traditional light bulb',
  'filament bulb',
  'old light bulb',
],
  },
  {
    id: 'fluorescent-tubes',
    parentId: 'lighting',
    type: 'subcategory',
    name: 'Fluorescent Tubes',
    icon: Lightbulb,

    summary: 'Do not place fluorescent tubes in the trash or curbside recycling. Take them to an appropriate recycling location, retailer, or hazardous waste collection center.',
    instructions: [
      'Keep the tube intact and undamaged if possible, and handle carefully to prevent breakage.',
      'Store the tube in a safe, dry place away from children and pets where it cannot be broken.',
      'Take the fluorescent tubes to an approved collector/recycler, retailer, or hazardous waste collection center that accepts fluorescent lamps.',
    ],

    safetyNote: 'Fluorescent tubes contain small amounts of mercury. Do not break them, and if one breaks, keep people away from the area, ventilate the room, and follow official cleanup guidance.',
    sources:
    [
      {
        name: 'California DTSC - Fluorescent Lamps',
        url: 'https://dtsc.ca.gov/universalwaste/universal-waste-for-residents-fluorescent-lamps/',
      },
      {
        name: 'California DTSC - Lamp Disposal Guide',
        url: 'https://dtsc.ca.gov/fluorescent-tubes-in-the-trash/',
      },
      {
        name: 'U.S. EPA - Broken CFL Cleanup',
        url: 'https://www.epa.gov/mercury/cleaning-broken-cfl',
      },
    ],
    aliases: [
  'fluorescent tube',
  'fluorescent lamp',
  'fluorescent light',
  'tube light',
  'long light bulb',
  'shop light tube',
],
  },

  // Electronics subcategories
  {
    id: 'phones-tablets',
    parentId: 'electronics',
    type: 'subcategory',
    name: 'Phones & Tablets',
    icon: Smartphone,

    summary: 'Do not place phones or tablets in the trash or curbside recycling. Take them to an authorized e-waste collector/recycler or household hazardous waste collection center.',
    instructions: [
      'Back up any important data from the device, sign out of all your accounts, and erase all personal data from the device.',
      'Keep the device intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the device to an authorized e-waste collector/recycler, retailer, or hazardous waste collection center that accepts electronic waste.',
    ],

    safetyNote: 'Many phones and tablets can contain lithium-ion batteries that can cause fires if damaged. Do not crush, bend, or tamper with a device, and do not try to forcefully remove a battery that isn\'t intended to be removed.',
    sources:
    [
      {
        name: 'California DTSC - Electronic Waste',
        url: 'https://dtsc.ca.gov/electronic-hazardous-waste/',
      },
      {
        name: 'CalRecycle - Electronic Waste',
        url: 'https://calrecycle.ca.gov/electronics/',
      }
    ],
    aliases: [
  'phone',
  'cell phone',
  'cellphone',
  'mobile phone',
  'smartphone',
  'iphone',
  'tablet',
  'ipad',
  'android phone',
],
  },
  {
    id: 'laptops-computers',
    parentId: 'electronics',
    type: 'subcategory',
    name: 'Laptops & Computers',
    icon: Laptop,

    summary: 'Do not place laptops or computers in the trash or curbside recycling. Take them to an authorized e-waste collector/recycler or household hazardous waste collection center.',
    instructions: [
      'Back up any important data from the device, sign out of all your accounts, and erase all personal data from the device.',
      'Keep the device intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the device to an authorized e-waste collector/recycler, retailer, or hazardous waste collection center that accepts electronic waste.',
    ],

    safetyNote: 'Many laptops and computers can contain lithium-ion batteries that can cause fires if damaged. Do not crush, bend, or tamper with a device, and do not try to forcefully remove a battery that isn\'t intended to be removed.',
    sources:
    [
      {
        name: 'California DTSC - Electronic Waste',
        url: 'https://dtsc.ca.gov/electronic-hazardous-waste/',
      },
      {
        name: 'CalRecycle - Electronic Waste',
        url: 'https://calrecycle.ca.gov/electronics/',
      }
    ],
    aliases: [
  'laptop',
  'computer',
  'desktop computer',
  'desktop',
  'pc',
  'chromebook',
  'macbook',
],
  },
  {
    id: 'tvs-monitors',
    parentId: 'electronics',
    type: 'subcategory',
    name: 'TVs & Monitors',
    icon: Monitor,

    summary: 'Do not place TVs or monitors in the trash or curbside recycling. Take them to an authorized e-waste collector/recycler or household hazardous waste collection center.',
    instructions: [
      'Keep the TV or monitor intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the device to an authorized e-waste collector/recycler, retailer, or hazardous waste collection center that accepts electronic waste.',
    ],

    safetyNote: 'TVs and monitors can contain hazardous materials such as lead and mercury. Do not crush, bend, or tamper with it before recycling.',
    sources:
    [
      {
        name: 'California DTSC - Electronic Waste',
        url: 'https://dtsc.ca.gov/electronic-hazardous-waste/',
      },
      {
        name: 'CalRecycle - Covered Electronic Waste',
        url: 'https://calrecycle.ca.gov/electronics/cew/',
      }
    ],
    aliases: [
  'tv',
  'television',
  'monitor',
  'computer monitor',
  'computer screen',
  'display',
  'flat screen',
],
  },
  {
    id: 'cables-chargers',
    parentId: 'electronics',
    type: 'subcategory',
    name: 'Cables & Chargers',
    icon: Cable,

    summary: 'Do not place cables or chargers in curbside recycling. Recycle them through an e-waste or electronics recycling program that accepts these items whenever possible.',
    instructions: [
      'Keep the item intact and undamaged if possible, and do not puncture, open, or damage it before recycling.',
      'Check with an electronics recycling program or e-waste collection location to confirm that it accepts cables or chargers.',
      'Take accepted cables and chargers to the appropriate e-waste or electronics recycling location.',
    ],

    safetyNote: 'Damaged/broken chargers and power adapters can pose electrical hazards. Do not use a charger with exposed wires or damaged insulation.',
    sources:
    [
      {
        name: 'California DTSC - Electronic Waste',
        url: 'https://dtsc.ca.gov/electronic-hazardous-waste/',
      },
      {
        name: 'CalRecycle - Electronic Waste',
        url: 'https://calrecycle.ca.gov/electronics/',
      }
    ],
    aliases: [
  'cable',
  'charger',
  'charging cable',
  'phone charger',
  'laptop charger',
  'power cable',
  'power cord',
  'power adapter',
  'electrical cord',
  'wire',
],
  },
  {
    id: 'small-electronics-accessories',
    parentId: 'electronics',
    type: 'subcategory',
    name: 'Small Electronics & Accessories',
    icon: Gamepad2,

    summary: 'Do not place small electronics in the trash or curbside recycling. Take them to an approved recycling location, retailer, or e-waste collector.',
    instructions: [
      'Keep the item intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the item to an authorized e-waste collector/recycler, retailer, or hazardous waste collection center that accepts electronic waste.',
    ],

    safetyNote: 'Some small electronics and accessories can contain lithium-ion batteries that can cause fires if damaged. Do not crush, bend, or tamper with a device, and do not try to forcefully remove a battery that isn\'t intended to be removed.',
    sources:
    [
      {
        name: 'California DTSC - Electronic Waste',
        url: 'https://dtsc.ca.gov/electronic-hazardous-waste/',
      },
      {
        name: 'CalRecycle - Electronic Waste',
        url: 'https://calrecycle.ca.gov/electronics/',
      },
      {
        name: 'CalRecycle - Battery-Embedded Products',
        url: 'https://calrecycle.ca.gov/electronics/embeddedbatteries/',
      }
    ],
    aliases: [
  'small electronic',
  'electronic accessory',
  'headphones',
  'earbuds',
  'keyboard',
  'computer mouse',
  'remote control',
  'game controller',
  'speaker',
  'smartwatch',
],
  },

  // Paint/chemical subcategories
  {
    id: 'latex-paint',
    parentId: 'paint-chemicals',
    type: 'subcategory',
    name: 'Latex Paint',
    icon: PaintBucket,

    summary: 'Do not place latex paint in the trash, curbside recycling, or down the drain. Take it to an approved recycling location, paint drop-off site, or hazardous waste collection center.',
    instructions: [
      'Keep the paint in its original labeled container with the lid tightly sealed.',
      'Do not pour it into a drain or sink, mix with other chemicals, or transfer it to another container.',
      'Take the leftover paint to a PaintCare site or a household hazardous waste collection center.',
    ],

    safetyNote: 'Do not intentionally dry out leftover paint for easier disposal in the trash, as this is prohibited against official California rules.',
    sources: 
    [
      {
        name: 'CalRecycle - Paint Management',
        url: 'https://calrecycle.ca.gov/Paint/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
      {
        name: 'PaintCare - California Paint Recycling',
        url: 'https://www.paintcare.org/states/california/',
      },
    ],
    aliases: [
  'latex paint',
  'water based paint',
  'water-based paint',
  'interior wall paint',
  'exterior wall paint',
  'house paint',
],
  },
  {
    id: 'oil-based-paint',
    parentId: 'paint-chemicals',
    type: 'subcategory',
    name: 'Oil-Based Paint',
    icon: PaintBucket,

    summary: 'Do not place oil-based paint in the trash, curbside recycling, or down the drain. Take it to an approved recycling location, paint drop-off site, or hazardous waste collection center.',
    instructions: [
      'Keep the paint in its original labeled container with the lid tightly sealed.',
      'Do not pour it into a drain or sink, mix with other chemicals, or transfer it to another container.',
      'Take the leftover paint to a PaintCare site or a household hazardous waste collection center that accepts paint.',
    ],

    safetyNote: 'Oil-based paint can contain flammable solvents and other hazardous materials. Keep the container away from heat, open flames, and children.',
    sources: 
    [
      {
        name: 'CalRecycle - Paint Management',
        url: 'https://calrecycle.ca.gov/Paint/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
      {
        name: 'PaintCare - California Paint Recycling',
        url: 'https://www.paintcare.org/states/california/',
      },
    ],
    aliases: [
  'oil paint',
  'oil based paint',
  'oil-based paint',
  'solvent based paint',
  'solvent-based paint',
  'enamel paint',
],
  },
  {
    id: 'cleaning-chemicals',
    parentId: 'paint-chemicals',
    type: 'subcategory',
    name: 'Cleaning Chemicals',
    icon: SprayCan,

    summary: 'Do not place hazardous household cleaners in the trash, curbside recycling, or down the drain. Take them to a hazardous waste collection center.',
    instructions: [
      'Keep the cleaner in its original labeled container with the lid tightly sealed.',
      'Do not pour it into a drain or sink, mix with other chemicals, or transfer it to another container.',
      'Take the cleaning chemicals to a household hazardous waste collection center.',
    ],

    safetyNote: 'Some household cleaning chemicals can be corrosive or toxic. Never mix products such as bleach and ammonia together, and keep flammable chemicals away from heat, flames, children, and pets.',
    sources: 
    [
      {
        name: 'CalRecycle - Wastes Banned From the Trash',
        url: 'https://calrecycle.ca.gov/homehazwaste/info/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
  'cleaning chemical',
  'household cleaner',
  'cleaning product',
  'bleach',
  'ammonia',
  'drain cleaner',
  'oven cleaner',
  'disinfectant',
],
  },
  {
    id: 'pesticides-herbicides',
    parentId: 'paint-chemicals',
    type: 'subcategory',
    name: 'Pesticides & Herbicides',
    icon: FlaskConical,

    summary: 'Do not place pesticides or herbicides in the trash, curbside recycling, or down the drain. Take them to a hazardous waste collection center.',
    instructions: [
      'Keep the pesticide or herbicide in its original labeled container with the lid tightly sealed.',
      'Do not pour it into a drain or sink, mix with other chemicals, or transfer it to another container.',
      'Take leftover pesticides or herbicides to a household hazardous waste collection center.',
    ],

    safetyNote: 'Pesticides and herbicides can be toxic to people, pets, and the environment. Avoid contact with skin or eyes, and follow provided safety instructions if given on the original container.',
    sources: 
    [
      {
        name: 'CalRecycle - Wastes Banned From the Trash',
        url: 'https://calrecycle.ca.gov/homehazwaste/info/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
  'pesticide',
  'herbicide',
  'insecticide',
  'weed killer',
  'bug killer',
  'bug spray',
  'rat poison',
  'rodent poison',
],
  },
  {
    id: 'solvents-adhesives',
    parentId: 'paint-chemicals',
    type: 'subcategory',
    name: 'Solvents & Adhesives',
    icon: PaintBucket,

    summary: 'Do not place hazardous solvents or adhesives in the trash, curbside recycling, or down the drain. Take it to a hazardous waste collection center.',
    instructions: [
      'Keep the solvent or adhesive in its original labeled container with the lid tightly sealed.',
      'Do not pour it into a drain or sink, mix with other chemicals, or transfer it to another container.',
      'Take leftover solvents or adhesives to a household hazardous waste collection center.',
    ],

    safetyNote: 'Many solvents and adhesives can be flammable and release harmful fumes. Keep them away from heat and flames, only use in properly ventilated areas, and avoid skin or eye contact.',
    sources: 
    [
      {
        name: 'CalRecycle - Wastes Banned From the Trash',
        url: 'https://calrecycle.ca.gov/homehazwaste/info/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
  'solvent',
  'adhesive',
  'glue',
  'paint thinner',
  'mineral spirits',
  'acetone',
  'epoxy',
  'contact cement',
],
  },

  // Medicine/needles subcategories
  {
    id: 'medication',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Medication',
    icon: Pill,

    summary: 'Do not flush unused or expired medication unless it is specifically listed on the FDA flush list. The preferred disposal method for most medication is to take it to a drug take-back location or mail-back program.',
    instructions: [
      'Keep the medication in its original labeled container, and remove or cover personal information on prescription labels.',
      'Take the medication to an authorized drug take-back location or use an approved mail-back program whenever possible.',
      'If a take-back or mail-back option is not available, follow the disposal instructions provided by the medication or FDA guidance on that specific medicine.',
    ],

    safetyNote: 'Unused or expired medication can be harmful if accidentally taken by children, pets, or for whom it was not prescribed to. Do not flush medication unless the FDA specifically recommends or allows flushing it.',
    sources: 
    [
      {
        name: 'U.S. FDA - Disposal of Unused Medicines',
        url: 'https://www.fda.gov/drugs/safe-disposal-medicines/disposal-unused-medicines-what-you-should-know',
      },
      {
        name: 'U.S. FDA - Drug Take-Back Options',
        url: 'https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-drug-take-back-options',
      },
      {
        name: 'U.S. FDA - Flush List',
        url: 'https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-fdas-flush-list-certain-medicines',
      },
    ],
    aliases: [
  'medicine',
  'medication',
  'prescription medicine',
  'prescription medication',
  'prescription drugs',
  'over the counter medicine',
  'otc medicine',
  'pills',
  'tablets',
  'capsules',
  'expired medicine',
],
  },
  {
    id: 'needles-syringes',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Needles & Syringes',
    icon: Syringe,

    summary: 'Do not place needles or syringes in the trash, curbside recycling, or down the toilet. Place used sharps in an approved sharps disposal container and use an appropriate sharps disposal program.',
    instructions: [
      'Immediately place used needles and syringes in an FDA-cleared sharps disposal container after use.',
      'Do not bend, break, recap, remove, or otherwise tamper with used needles before placing them in the sharps container.',
      'When the sharps container is about three-quarters full, stop adding items, securely close it, and dispose of it through an approved sharps collection, mail-back, or local disposal program.',
    ],

    safetyNote: 'Loose or improperly handled needles or syringes can cause puncture injuries and spread infections. Keep them away from children and pets.',
    sources: 
    [
      {
        name: 'U.S. FDA - Best Way to Get Rid of Used Needles and Sharps',
        url: 'https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/best-way-get-rid-used-needles-and-other-sharps',
      },
      {
        name: 'U.S. FDA - Sharps Disposal Containers',
        url: 'https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/sharps-disposal-containers',
      },
      {
        name: 'CalRecycle - Sharps Waste Stewardship',
        url: 'https://calrecycle.ca.gov/epr/pharmasharps/sharps/',
      },
    ],
    aliases: [
  'needle',
  'needles',
  'syringe',
  'syringes',
  'used needle',
  'used syringe',
  'medical needle',
  'injection needle',
  'insulin needle',
  'insulin syringe',
  'sharps',
],
  },
  {
    id: 'lancets',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Lancets',
    icon: Syringe,

    summary: 'Do not place lancets in the trash, curbside recycling, or down the toilet. Place used lancets in an approved sharps disposal package/container and use an appropriate sharps disposal program.',
    instructions: [
      'Immediately place used lancets in an FDA-cleared sharps disposal container after use.',
      'Do not bend, break, recap, or tamper with the sharp portion of a lancet before placing them in the sharps container.',
      'When the sharps container is about three-quarters full, stop adding items, securely close it, and dispose of it through an approved sharps collection, mail-back, or local disposal program.',
    ],

    safetyNote: 'Loose or improperly handled lancets can cause puncture injuries and spread infections. Keep them away from children and pets.',
    sources: 
    [
      {
        name: 'U.S. FDA - Safe Use and Disposal of Sharps',
        url: 'https://www.fda.gov/medical-devices/consumer-products/safely-using-sharps-needles-and-syringes-home-work-and-travel',
      },
      {
        name: 'U.S. FDA - Sharps Disposal Containers',
        url: 'https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/sharps-disposal-containers',
      },
      {
        name: 'CalRecycle - Sharps Waste Stewardship',
        url: 'https://calrecycle.ca.gov/epr/pharmasharps/sharps/',
      },
    ],
    aliases: [
  'lancet',
  'lancets',
  'fingerstick',
  'finger stick',
  'blood testing lancet',
  'diabetes lancet',
  'glucose lancet',
  'blood sugar lancet',
  'sharps',
],
  },
  {
    id: 'inhalers',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Inhalers',
    icon: Wind,

    summary: 'Do not dispose of an inhaler until you have checked the product instructions or local disposal requirements. Some inhalers are pressurized and may require special disposal.',
    instructions: [
      'Keep the inhaler intact and do not puncture, crush, burn, or dismantle the canister.',
      'Check the inhaler label, packaging, or manufacturer instructions for disposal directions.',
      'If no specific disposal instructions are provided, contact a pharmacy, local waste program, or household hazardous waste collection center to confirm the proper disposal method.',
    ],

    safetyNote: 'Some inhalers contain pressurized canisters that can burst if punctured, crushed, or exposed to high heat. Keep them away from heat, open flames, children, and pets.',
    sources: 
    [
      {
        name: 'U.S. FDA - Drug Disposal Questions and Answers',
        url: 'https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-questions-and-answers',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
  'inhaler',
  'asthma inhaler',
  'rescue inhaler',
  'metered dose inhaler',
  'mdi inhaler',
  'albuterol inhaler',
  'inhaler canister',
],
  },

  // Automotive subcategories
  {
    id: 'motor-oil-filters',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Motor Oil & Filters',
    icon: Droplets,

    summary:
    'Do not place used motor oil or oil filters in the trash, curbside recycling, or down the drain. Take them to a certified used-oil collection center that accepts them or a household hazardous waste collection center.',
    instructions: [
      'Store used motor oil in a clean, sturdy, leak-proof container with a tightly closed lid.',
      'Do not mix used motor oil with other fluids or chemicals.',
      'Take the used oil and oil filters to a certified used-oil collection center or household hazardous waste collection center that accepts them.',
    ],
    safetyNote:
      'Used motor oil can contain harmful contaminants. Avoid skin contact, clean up spills promptly, and keep containers away from children and pets.',
    sources: [
      {
        name: 'CalRecycle - Used Oil Recycling Program',
        url: 'https://calrecycle.ca.gov/usedoil/',
      },
      {
        name: 'CalRecycle - Certified Collection Centers',
        url: 'https://calrecycle.ca.gov/usedoil/certcenters/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
      'motor oil',
      'used motor oil',
      'engine oil',
      'car oil',
      'oil filter',
      'oil filters',
      'used oil filter',
      'automotive oil',
    ],
  },
  {
    id: 'antifreeze-coolant',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Antifreeze & Coolant',
    icon: Snowflake,

    summary:
    'Do not place antifreeze or coolant in the trash, curbside recycling, or down the drain. Take it to a household hazardous waste collection center or another approved collection location.',
    instructions: [
      'Store antifreeze or coolant in a sturdy, leak-proof container with a tightly closed lid.',
      'Do not mix antifreeze or coolant with motor oil, fuel, or other chemicals.',
      'Take the antifreeze or coolant to a household hazardous waste collection center or approved collection location that accepts automotive fluids.',
    ],
    safetyNote:
      'Antifreeze can be toxic if swallowed. Avoid skin or eye contact and keep it away from children and pets.',
    sources: [
      {
        name: 'CalRecycle - Wastes Banned From the Trash',
        url: 'https://calrecycle.ca.gov/homehazwaste/info/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
      'antifreeze',
      'coolant',
      'engine coolant',
      'radiator fluid',
      'radiator coolant',
      'car coolant',
    ],
  },
  {
    id: 'gasoline-fuel',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Gasoline & Fuel',
    icon: Fuel,

    summary:
    'Do not place gasoline or other unwanted fuel in the trash, curbside recycling, or down the drain. Take it to a household hazardous waste collection center that accepts fuel.',
    instructions: [
      'Keep gasoline or fuel in a sturdy, tightly closed container designed or approved for fuel storage.',
      'Do not mix gasoline or fuel with motor oil, antifreeze, or other chemicals.',
      'Take unwanted gasoline or fuel to a household hazardous waste collection center that accepts flammable liquids.',
    ],
    safetyNote:
      'Gasoline and other fuels are highly flammable and can release harmful vapors. Keep them away from heat, sparks, open flames, children, and pets.',
    sources: [
      {
        name: 'CalRecycle - Household Hazardous Waste',
        url: 'https://calrecycle.ca.gov/homehazwaste/',
      },
      {
        name: 'CalRecycle - Household Hazardous Waste Reporting',
        url: 'https://calrecycle.ca.gov/homehazwaste/reporting/',
      },
      {
        name: 'OC Waste & Recycling - Household Hazardous Waste',
        url: 'https://oclandfills.com/hazardous-waste',
      },
    ],
    aliases: [
      'gasoline',
      'gas',
      'fuel',
      'old gasoline',
      'old gas',
      'petrol',
      'automotive fuel',
      'lawn mower gas',
    ],
  },
  {
    id: 'tires',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Tires',
    icon: CircleGauge,

    summary:
    'Do not place tires in the trash or curbside recycling. Take unwanted tires to a tire dealer, authorized waste-tire collection location, or other approved tire recycling facility.',
    instructions: [
      'Keep the tire intact and avoid illegally dumping or burning it.',
      'Contact a tire dealer or authorized waste-tire collection location to confirm that it accepts used tires.',
      'Take the tire to an approved location for reuse, recycling, or proper disposal.',
    ],
    safetyNote:
      'Improperly stored or discarded tires can collect standing water, attract pests, and create serious fire hazards. Store them safely until they can be taken to an approved location.',
    sources: [
      {
        name: 'CalRecycle - Wastes Banned From the Trash',
        url: 'https://calrecycle.ca.gov/homehazwaste/info/',
      },
      {
        name: 'CalRecycle - Waste Tire Facilities',
        url: 'https://calrecycle.ca.gov/tires/facilities/',
      },
    ],
    aliases: [
      'tire',
      'tires',
      'car tire',
      'car tires',
      'vehicle tire',
      'vehicle tires',
      'used tire',
      'used tires',
      'waste tire',
      'scrap tire',
    ],
  },

  // Appliances subcategories
  {
    id: 'refrigerators-freezers',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Refrigerators & Freezers',
    icon: Refrigerator,

    summary:
    'Do not place refrigerators or freezers in the trash or curbside recycling. Use an appliance recycling, retailer take-back, utility pickup, or local bulky-item program that can properly handle refrigerants.',
    instructions: [
      'Keep the appliance intact and do not cut refrigerant lines, remove the compressor, or attempt to release the refrigerant.',
      'Check with your local waste provider, utility company, appliance retailer, or recycling program for an approved pickup or drop-off option.',
      'Make sure the appliance is handled by a program or facility that properly recovers the refrigerant before final recycling or disposal.',
    ],
    safetyNote:
      'Refrigerators and freezers can contain refrigerants and other components that require special handling. Do not puncture refrigerant lines or attempt to remove refrigerant yourself.',
    sources: [
      {
        name: 'U.S. EPA - Appliance Disposal',
        url: 'https://www.epa.gov/section608/appliance-disposal',
      },
      {
        name: 'U.S. EPA - Safe Disposal of Refrigerant Appliances',
        url: 'https://www.epa.gov/section608/stationary-refrigeration-safe-disposal-requirements',
      },
    ],
    aliases: [
      'refrigerator',
      'fridge',
      'freezer',
      'refrigerators',
      'freezers',
      'old fridge',
      'old refrigerator',
      'mini fridge',
    ],
  },
  {
    id: 'air-conditioners',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Air Conditioners',
    icon: Snowflake,

    summary:
    'Do not place air conditioners in the trash or curbside recycling. Use an appliance recycling, retailer take-back, or local bulky-item program that can properly handle refrigerants.',
    instructions: [
      'Keep the appliance intact and do not cut refrigerant lines, remove components, or attempt to release the refrigerant.',
      'Check with your local waste provider, appliance retailer, or recycling program for an approved pickup or drop-off option.',
      'Make sure the appliance is handled by a program or facility that properly recovers the refrigerant before final recycling or disposal.',
    ],
    safetyNote:
      'Air conditioners can contain refrigerants that require special handling. Do not puncture refrigerant lines or attempt to remove refrigerant yourself.',
    sources: [
      {
        name: 'U.S. EPA - Appliance Disposal',
        url: 'https://www.epa.gov/section608/appliance-disposal',
      },
      {
        name: 'U.S. EPA - Safe Disposal of Refrigerant Appliances',
        url: 'https://www.epa.gov/section608/stationary-refrigeration-safe-disposal-requirements',
      },
    ],
    aliases: [
      'air conditioner',
      'air conditioning unit',
      'ac unit',
      'a/c unit',
      'window ac',
      'window air conditioner',
      'portable air conditioner',
    ],
  },
  {
    id: 'washers-dryers',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Washers & Dryers',
    icon: WashingMachine,

    summary:
    'Do not place washers or dryers in curbside recycling. Use a bulky-item pickup, appliance recycling program, retailer take-back service, or approved scrap/recycling facility.',
    instructions: [
      'Disconnect the appliance safely from water, electricity, or gas before moving it.',
      'If the appliance still works, consider donating or reusing it before recycling or disposal.',
      'Arrange pickup or drop-off through a local bulky-item service, appliance recycler, retailer, or approved recycling facility.',
    ],
    safetyNote:
      'Washers and dryers are heavy and can cause injury if moved improperly. Gas dryers should be disconnected safely, and electrical appliances should be unplugged before handling.',
    sources: [
      {
        name: 'CalRecycle - Major Appliances',
        url: 'https://www2.calrecycle.ca.gov/WasteCharacterization/MaterialType/Details/19',
      },
      {
        name: 'U.S. EPA - Household Appliances',
        url: 'https://www.epa.gov/large-scale-residential-demolition/household-appliances-and-demolition',
      },
    ],
    aliases: [
      'washer',
      'washing machine',
      'dryer',
      'clothes dryer',
      'washer dryer',
      'laundry machine',
      'laundry appliance',
    ],
  },
  {
    id: 'microwaves-ovens',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Microwaves & Ovens',
    icon: Microwave,

    summary:
    'Do not place microwaves or ovens in curbside recycling. Use an appliance recycling program, bulky-item pickup service, retailer take-back option, or approved recycling facility.',
    instructions: [
      'Unplug the appliance and safely disconnect any gas or electrical connections before moving it.',
      'If the appliance still works, consider donating or reusing it before recycling or disposal.',
      'Arrange pickup or drop-off through a local bulky-item service, appliance recycler, retailer, or approved recycling facility.',
    ],
    safetyNote:
      'Microwaves and ovens can contain electrical components and may be heavy or difficult to move. Do not dismantle the appliance, and make sure gas appliances are disconnected safely.',
    sources: [
      {
        name: 'CalRecycle - Major Appliances',
        url: 'https://www2.calrecycle.ca.gov/WasteCharacterization/MaterialType/Details/19',
      },
      {
        name: 'California Appliance Material Definitions',
        url: 'https://www2.calrecycle.ca.gov/Docs/Web/120138',
      },
    ],
    aliases: [
      'microwave',
      'microwave oven',
      'oven',
      'stove',
      'range',
      'electric oven',
      'gas oven',
    ],
  },
  {
    id: 'small-appliances',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Small Appliances',
    icon: CookingPot,

    summary:
    'Do not place small appliances in curbside recycling. Reuse, donate, or recycle them through an appropriate appliance, electronics, or scrap recycling program when possible.',
    instructions: [
      'Unplug the appliance and remove any removable batteries before recycling, if they can be safely removed.',
      'If the appliance still works, consider donating or reusing it before disposal.',
      'Check with a local appliance, electronics, or scrap recycling program to confirm that it accepts the item.',
    ],
    safetyNote:
      'Do not use appliances with damaged cords, exposed wiring, or other electrical damage. Keep damaged appliances unplugged until they can be properly recycled or disposed of.',
    sources: [
      {
        name: 'California Appliance Material Definitions',
        url: 'https://www2.calrecycle.ca.gov/Docs/Web/120138',
      },
      {
        name: 'CalRecycle - Waste Characterization',
        url: 'https://www2.calrecycle.ca.gov/WasteCharacterization/MaterialType',
      },
    ],
    aliases: [
      'small appliance',
      'toaster',
      'blender',
      'coffee maker',
      'electric kettle',
      'hair dryer',
      'vacuum',
      'vacuum cleaner',
      'kitchen appliance',
    ],
  },

  // Furniture/bulky items subcategories
  {
    id: 'couches-sofas',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Couches & Sofas',
    icon: Armchair,

    summary:
    'Do not place couches or sofas in curbside recycling. If the item is still usable, consider donating or reusing it. Otherwise, arrange a bulky-item pickup or take it to an approved disposal facility.',
    instructions: [
      'If the couch or sofa is clean and in usable condition, consider donating or reusing it before disposal.',
      'Contact your local waste hauler to ask about bulky-item pickup options and preparation requirements.',
      'If pickup is not available, take the item to an approved landfill, transfer station, or other disposal facility that accepts bulky furniture.',
    ],
    safetyNote:
      'Couches and sofas can be heavy and difficult to move. Use proper lifting techniques and get help when moving large or bulky furniture.',
    sources: [
      {
        name: 'OC Waste & Recycling - Landfill Fees and Bulky Items',
        url: 'https://oclandfills.com/landfills/landfill-fees',
      },
    ],
    aliases: [
      'couch',
      'sofa',
      'sectional',
      'couches',
      'sofas',
      'old couch',
      'old sofa',
    ],
  },
  {
    id: 'chairs-tables',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Chairs & Tables',
    icon: RockingChair,

    summary:
    'Do not place large chairs or tables in curbside recycling. If the item is still usable, consider donating or reusing it. Otherwise, arrange a bulky-item pickup or take it to an approved disposal facility.',
    instructions: [
      'If the chair or table is clean and in usable condition, consider donating or reusing it before disposal.',
      'Contact your local waste hauler to ask about bulky-item pickup options and preparation requirements.',
      'If pickup is not available, take the item to an approved landfill, transfer station, or other disposal facility that accepts bulky furniture.',
    ],
    safetyNote:
      'Large chairs and tables can be heavy or awkward to move. Use proper lifting techniques and get help when moving large or bulky furniture.',
    sources: [
      {
        name: 'OC Waste & Recycling - Landfill Fees and Bulky Items',
        url: 'https://oclandfills.com/landfills/landfill-fees',
      },
    ],
    aliases: [
      'chair',
      'chairs',
      'table',
      'tables',
      'dining table',
      'desk',
      'wooden chair',
      'furniture',
    ],
  },
  {
    id: 'mattresses',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Mattresses',
    icon: BedDouble,

    summary:
    'Do not place mattresses in curbside recycling. Use a mattress recycling drop-off site, retailer take-back service, or local bulky-item pickup program.',
    instructions: [
      'Keep the mattress separate from other trash or waste when taking it to a mattress recycling location.',
      'Check for a nearby mattress recycling site or contact your local waste hauler about bulky-item pickup.',
      'If you are purchasing a new mattress, ask the retailer about taking back your old mattress when the new one is delivered.',
    ],
    safetyNote:
      'Do not illegally dump or burn mattresses. Heavily soiled or contaminated mattresses may not be accepted by some recycling programs, so confirm requirements before drop-off.',
    sources: [
      {
        name: 'CalRecycle - Mattress Product Management',
        url: 'https://calrecycle.ca.gov/mattresses/',
      },
      {
        name: 'OC Waste & Recycling - Mattress Recycling Program',
        url: 'https://www.oclandfills.com/mattress',
      },
    ],
    aliases: [
      'mattress',
      'mattresses',
      'box spring',
      'box springs',
      'futon',
      'bed mattress',
      'old mattress',
    ],
  },
  {
    id: 'carpets-rugs',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Carpets & Rugs',
    icon: RectangleHorizontal,

    summary:
    'Do not place large carpets or rugs in curbside recycling. If they are still usable, consider donating or reusing them. Otherwise, use a carpet recycling program, bulky-item pickup service, or approved disposal facility.',
    instructions: [
      'If the carpet or rug is clean and reusable, consider donating or reusing it before disposal.',
      'For carpet, check for a recycling program or facility that accepts postconsumer carpet.',
      'If recycling is not available, contact your local waste hauler about bulky-item pickup or take the item to an approved disposal facility.',
    ],
    safetyNote:
      'Large carpets and rugs can be heavy and difficult to move. Roll and secure them when possible, and use proper lifting techniques when handling bulky material.',
    sources: [
      {
        name: 'CalRecycle - Carpet Materials Management',
        url: 'https://calrecycle.ca.gov/carpet/',
      },
      {
        name: 'OC Waste & Recycling - Landfill Fees and Bulky Items',
        url: 'https://oclandfills.com/landfills/landfill-fees',
      },
    ],
    aliases: [
      'carpet',
      'carpets',
      'rug',
      'rugs',
      'area rug',
      'floor carpet',
      'old carpet',
      'old rug',
    ],
  }
]

// Location catalog/info
const disposalLocations = [
  {
    id: 'hhw-irvine',
    name: 'Irvine Household Hazardous Waste Collection Center',
    shortName: 'Irvine HHW Center',
    address: '6411 Oak Canyon, Irvine, CA 92618',
    type: 'County HHW Center',

    acceptedItemIds: [
      'single-use-batteries',
      'rechargeable-batteries',
      'lithium-ion-batteries',
      'button-coin-batteries',
      'car-batteries',

      'cfl-bulbs',
      'led-bulbs',
      'fluorescent-tubes',

      'phones-tablets',
      'laptops-computers',
      'tvs-monitors',
      'cables-chargers',
      'small-electronics-accessories',

      'latex-paint',
      'oil-based-paint',
      'cleaning-chemicals',
      'pesticides-herbicides',
      'solvents-adhesives',
    ],

    hours: 'Tuesday–Saturday, 9 AM–3 PM',

    website:
      'https://www.oclandfills.com/hazardous-waste',
  },

  {
    id: 'hhw-anaheim',
    name: 'Anaheim Household Hazardous Waste Collection Center',
    shortName: 'Anaheim HHW Center',
    address: '1071 N. Blue Gum Street, Anaheim, CA 92806',
    type: 'County HHW Center',

    acceptedItemIds: [
      'single-use-batteries',
      'rechargeable-batteries',
      'lithium-ion-batteries',
      'button-coin-batteries',
      'car-batteries',

      'cfl-bulbs',
      'led-bulbs',
      'fluorescent-tubes',

      'phones-tablets',
      'laptops-computers',
      'tvs-monitors',
      'cables-chargers',
      'small-electronics-accessories',

      'latex-paint',
      'oil-based-paint',
      'cleaning-chemicals',
      'pesticides-herbicides',
      'solvents-adhesives',
    ],

    hours: 'Tuesday–Saturday, 9 AM–3 PM',

    website:
      'https://www.oclandfills.com/hazardous-waste',
  },
  {
  id: 'hhw-huntington-beach',
  name: 'Huntington Beach Household Hazardous Waste Collection Center',
  shortName: 'Huntington Beach HHW Center',
  address: '17121 Nichols Lane, Huntington Beach, CA 92647',
  type: 'County HHW Center',

  acceptedItemIds: [
    'single-use-batteries',
    'rechargeable-batteries',
    'lithium-ion-batteries',
    'button-coin-batteries',
    'car-batteries',

    'cfl-bulbs',
    'led-bulbs',
    'fluorescent-tubes',

    'phones-tablets',
    'laptops-computers',
    'tvs-monitors',
    'cables-chargers',
    'small-electronics-accessories',

    'latex-paint',
    'oil-based-paint',
    'cleaning-chemicals',
    'pesticides-herbicides',
    'solvents-adhesives',
  ],

  hours: 'Tuesday–Saturday, 9 AM–3 PM',

  website:
    'https://www.oclandfills.com/hazardous-waste',
},

{
  id: 'hhw-san-juan-capistrano',
  name: 'San Juan Capistrano Household Hazardous Waste Collection Center',
  shortName: 'San Juan Capistrano HHW Center',
  address: '32250 Avenida La Pata, San Juan Capistrano, CA 92675',
  type: 'County HHW Center',

  acceptedItemIds: [
    'single-use-batteries',
    'rechargeable-batteries',
    'lithium-ion-batteries',
    'button-coin-batteries',
    'car-batteries',

    'cfl-bulbs',
    'led-bulbs',
    'fluorescent-tubes',

    'phones-tablets',
    'laptops-computers',
    'tvs-monitors',
    'cables-chargers',
    'small-electronics-accessories',

    'latex-paint',
    'oil-based-paint',
    'cleaning-chemicals',
    'pesticides-herbicides',
    'solvents-adhesives',
  ],

  hours: 'Tuesday–Saturday, 9 AM–3 PM',

  website:
    'https://www.oclandfills.com/hazardous-waste',
},
]


// Main app 
function App() {
  const [currentEntryId, setCurrentEntryId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [disposalListItemIds, setDisposalListItemIds] = useState(() => {
    const savedItems = localStorage.getItem('disposal-list')
    return savedItems ? JSON.parse(savedItems) : []
  })
  const [isListOpen, setIsListOpen] = useState(false)
  useEffect(() => {
    localStorage.setItem(
      'disposal-list',
      JSON.stringify(disposalListItemIds),
    )
  }, [disposalListItemIds])
  const currentEntry = catalog.find((entry) => entry.id === currentEntryId)
  const mainCategories = catalog.filter((entry) => entry.parentId === null)
  const subCategories = catalog.filter((entry) => entry.parentId === currentEntryId)
  const disposalListItems = catalog.filter((entry) => disposalListItemIds.includes(entry.id))
  const matchedLocations = disposalLocations.map((location) => {
    const matchingItems = disposalListItems.filter((item) => location.acceptedItemIds.includes(item.id))
    return {...location, matchingItems,}
  }).filter((location) => location.matchingItems.length > 0).sort((a, b) => b.matchingItems.length - a.matchingItems.length)
  const normalizedSearch = searchQuery.trim().toLowerCase()

  // Search feature code
  const searchResults = normalizedSearch ? catalog.filter((entry) => {
    const aliases = entry.aliases ?? []
    const searchableText = [entry.name, ...aliases]
      .join(' ')
      .toLowerCase()
    return searchableText.includes(normalizedSearch)
  })
: []

// Add items to the disposal plan
function addToDisposalList(itemId) {
  setDisposalListItemIds((currentIds) => {
    if (currentIds.includes(itemId)) {
      return currentIds
    }
    return [...currentIds, itemId]
  })
}

// Remove items from the disposal list
function removeFromDisposalList(itemId) {
  setDisposalListItemIds((currentIds) => currentIds.filter((id) => id !== itemId))
}

// Button to add items to the disposal list
const disposalListButton = (
  <button
    className = "disposal-list-button"
    type = "button"
    onClick = {() => setIsListOpen(true)}
    aria-label = {`Open disposal list with ${disposalListItemIds.length} items`}
  >
    <ClipboardList aria-hidden="true"/>
    <span>List</span>
    <span className="list-count">{disposalListItemIds.length}</span>
  </button>
)

// Disposal list page
if (isListOpen) {
  return (
    <main className = "app">
      <button 
        className = "back"
        type = "button"
        onClick = {() => setIsListOpen(false)}
      >
        ← Back
      </button>

      <header className = "category-header">
        <p className = "guide">Saved Items</p>
        <h1>Disposal List</h1>
        <p className = "description">
          {disposalListItemIds.length === 1 ? '1 item saved' : `${disposalListItemIds.length} items saved`}
        </p>
      </header>

      {disposalListItems.length === 0 ? (
        <p className = "empty-list">
          Your disposal list is empty
        </p>
      ) : (
        <div className = "disposal-items">
          {disposalListItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                className = "disposal-item"
                key = {item.id}>
              <button 
                className = "disposal-item-main"
                type = "button"
                onClick = {() => {
                  setCurrentEntryId(item.id)
                  setIsListOpen(false)
                }}
              >
                <Icon aria-hidden = "true"/>
                <span>{item.name}</span>
              </button>

              <button 
                className = "remove-item"
                type = "button"
                onClick = {() => removeFromDisposalList(item.id)}
              >
                Remove Item
              </button>
            </div>
            )
          })}
        </div>
      )
      }
      {matchedLocations.length > 0 && (
        <section className="location-section">
          <h2>Where to take your items:</h2>

          <div className="location-list">
            {matchedLocations.map((location) => (
              <article className="location-card" key={location.id}>
                <h3>{location.name}</h3>
                <p className='location-address'>{location.address}</p>
                <p className='location-match'>
                  Handles {location.matchingItems.length} of your{' '}
                  {disposalListItems.length} items:
                </p>
                <ul className="location-items">
                  {location.matchingItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
                <p className='location-hours'>{location.hours}</p>
                <div className="location-actions">
                  <a
                    className="location-directions"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${location.name}, ${location.address}`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>

                  <a
                    className="location-link"
                    href={location.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View official information
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

  // Disposal info pages
  if (currentEntry?.type === 'subcategory') {
    const parentEntry = catalog.find((entry) => entry.id === currentEntry.parentId)
    const isInDisposalList = disposalListItemIds.includes(currentEntry.id)
    return (
      <main className="app">
        <div className = "page-top">
        <button className = "back" type = "button" 
        onClick = {() => setCurrentEntryId(currentEntry.parentId)}>
          ← {parentEntry.name}
        </button>
        {disposalListButton}
      </div>

        <header className = "item-header">
          <h1>{currentEntry.name}</h1>
          <h2>How to dispose</h2>
          <p>{currentEntry.summary}</p>
          <button 
            className = "add-to-disposal-list"
            type = "button"
            onClick = {() => addToDisposalList(currentEntry.id)}
            disabled = {isInDisposalList}
          >
            {isInDisposalList ? 'Added to Disposal List' : 'Add to Disposal List'}
          </button>
          <ol>{currentEntry.instructions?.map((instruction, index) => (<li key={index}>{instruction}
          </li>))}</ol>

          <div className = 'safety-box'>
            <h2>
              <TriangleAlert className="safety-icon" aria-hidden="true" />
              Safety Note
            </h2>
            <p>{currentEntry.safetyNote}</p>
          </div>

          <h2>Sources</h2>
          {currentEntry.sources?.map((source) => (<a 
          className='source-button'
          key={source.url} 
          href={source.url} 
          target="_blank" 
          rel="noreferrer">
            {source.name}
            <ExternalLink aria-hidden="true" />
          </a>))}

        </header>
      </main>
    )
  }

  // Return to homepage
  if (currentEntry?.type === 'category') {
    return (
      <main className="app">
        <div className = "page-top">
        <button className="back" type="button" onClick={() => 
        setCurrentEntryId(currentEntry.parentId)}>
          ← Disposal Categories
        </button>
        {disposalListButton}
      </div>

        <header className="category-header">
          <h1>{currentEntry.name}</h1>
          <p className="description">Choose the item that best matches what you want to dispose of.</p>
        </header>

        <div className = "category-grid">
          {subCategories.map((entry) => {
            const Icon = entry.icon
          
          return (
            <button className = "category-button" type = "button" key = {entry.id} 
            onClick = {() => setCurrentEntryId(entry.id)}>
              <span className="category-icon" aria-hidden="true"><Icon /></span>
              <span className="category-name">{entry.name}</span>
            </button>
            )
            })}
        </div>
      </main>
    )
  }

  // Homepage
  return (
    <main className="app">
      <div className = "home-top">
        {disposalListButton}
      </div>
      <header className="hero">
        <p className="guide">Orange County disposal guide</p>
        <h1>SafeDispose</h1>
        <p className="description">
          Find clear instructions on how to safely dispose your everyday items
        </p>
      </header>

      <section className="search">
        <input
        className="search-input"
        type="search"
        placeholder="Batteries, lightbulbs, paint..."
        aria-label="Search for items to dispose"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        />
        {normalizedSearch && (
          <div className = "search-results">
            {searchResults.length > 0 ? (
              searchResults.slice(0, 6).map((entry) => {
                const Icon = entry.icon
                
                return (
                <button
                  className="search-result"
                  type="button"
                  key={entry.id}
                  onClick={() => {
                    setCurrentEntryId(entry.id)
                    setSearchQuery('')
                  }}
                >
                  <span className="search-result-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    {entry.name}
                  </span>
                </button>
              )
            })
          ) : (
              <p className="no-results">
                No results found.
              </p>
            )
            }
          </div>
        )}
      </section>
      
      <section className="categories">
        <h2>Browse by category</h2>
        <div className="category-grid">
          {mainCategories.map((category) => {
            const Icon = category.icon
          
          return (
            <button className="category-button" type="button" key={category.id} 
            onClick={() => setCurrentEntryId(category.id)}>
              <span className="category-icon" aria-hidden="true"><Icon /></span>
              <span className="category-name">{category.name}</span>
            </button>
          )
          })}
        </div>
      </section>
    </main>
  )
}



export default App