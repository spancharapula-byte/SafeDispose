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

    summary: 'Do not place TVs or in the trash or curbside recycling. Take them to an authorized e-waste collector/recycler or household hazardous waste collection center.',
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

    summary: 'Do not place cables or chargers in curbside recycling. Recyle them through an e-waste or electronics recycling program that accepits these items whenever possible.',
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

    summary: 'Do not place solvents or adhesives in the trash, curbside recycling, or down the drain. Take it to a hazardous waste collection center.',
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
  },
  {
    id: 'needles-syringes',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Needles & Syringes',
    icon: Syringe,
  },
  {
    id: 'lancets',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Lancets',
    icon: Syringe,
  },
  {
    id: 'inhalers',
    parentId: 'medicine-needles',
    type: 'subcategory',
    name: 'Inhalers',
    icon: Wind,
  },

  // Automotive subcategories
  {
    id: 'motor-oil-filters',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Motor Oil & Filters',
    icon: Droplets,
  },
  {
    id: 'antifreeze-coolant',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Antifreeze & Coolant',
    icon: Snowflake,
  },
  {
    id: 'gasoline-fuel',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Gasoline & Fuel',
    icon: Fuel,
  },
  {
    id: 'tires',
    parentId: 'automotive',
    type: 'subcategory',
    name: 'Tires',
    icon: CircleGauge,
  },

  // Appliances subcategories
  {
    id: 'refrigerators-freezers',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Refrigerators & Freezers',
    icon: Refrigerator,
  },
  {
    id: 'air-conditioners',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Air Conditioners',
    icon: Snowflake,
  },
  {
    id: 'washers-dryers',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Washers & Dryers',
    icon: WashingMachine,
  },
  {
    id: 'microwaves-ovens',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Microwaves & Ovens',
    icon: Microwave,
  },
  {
    id: 'small-appliances',
    parentId: 'appliances',
    type: 'subcategory',
    name: 'Small Appliances',
    icon: CookingPot,
  },

  // Furniture/bulky items subcategories
  {
    id: 'couches-sofas',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Couches & Sofas',
    icon: Armchair,
  },
  {
    id: 'chairs-tables',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Chairs & Tables',
    icon: RockingChair,
  },
  {
    id: 'mattresses',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Mattresses',
    icon: BedDouble,
  },
  {
    id: 'carpets-rugs',
    parentId: 'furniture-bulky-items',
    type: 'subcategory',
    name: 'Carpets & Rugs',
    icon: RectangleHorizontal,
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