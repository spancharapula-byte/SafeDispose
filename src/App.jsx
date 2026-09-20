import './App.css';
import { useState } from 'react';
import {
  Battery,
  BatteryMedium,
  BatteryCharging,
  BatteryFull,
  Circle,
  Lightbulb,
  LampDesk,
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
} from 'lucide-react';

const catalog = [
  {
    id: 'batteries',
    parentId: null,
    type: 'category',
    name: 'Batteries',
    icon: Battery,
  },
  {
    id: 'lighting',
    parentId: null,
    type: 'category',
    name: 'Lighting',
    icon: Lightbulb,
  },
  {
    id: 'electronics',
    parentId: null,
    type: 'category',
    name: 'Electronics',
    icon: Laptop,
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
  },
  {
    id: 'automotive',
    parentId: null,
    type: 'category',
    name: 'Automotive',
    icon: Car,
  },
  {
    id: 'appliances',
    parentId: null,
    type: 'category',
    name: 'Appliances',
    icon: Refrigerator,
  },
  {
    id: 'furniture-bulky-items',
    parentId: null,
    type: 'category',
    name: 'Furniture & Bulky Items',
    icon: Armchair,
  },

  // Battery subcategories
  {
    id: 'single-use-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Single-Use Batteries',
    icon: BatteryMedium,

    summary: 'Do not place single-use batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collector.',
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
    ]
  },
  {
    id: 'rechargeable-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Rechargeable Batteries',
    icon: BatteryCharging,

    summary: 'Do not place rechargeable batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collector.',
    instructions: [
      'Remove the batteries from devices if it is designed to be safely removed.',
      'Place each battery in a separate plastic bag or tape the ends of the batteries with clear or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collector/recycler, retailer, or hazardous waste collector.',
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
    ]
  },
  {
    id: 'lithium-ion-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Lithium-Ion Batteries',
    icon: BatteryFull,

    summary: 'Do not place lithium-ion batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collector.',
    instructions: [
      'Remove the batteries from devices if it is designed to be safely removed.',
      'Place each battery in a separate plastic bag or tape the ends of the batteries with clear or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collector/recycler, retailer, or hazardous waste collector.',
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
    ]
  },
  {
    id: 'button-coin-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Button & Coin Batteries',
    icon: Circle,

    summary: 'Do not place button or coin batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collector.',
    instructions: [
      'Remove the batteries from devices if it is designed to be safely removed.',
      'Cover the battery terminals or the entire battery with clear or electrical tape to prevent short-circuiting.',
      'Take the batteries to an approved battery collector/recycler, retailer, or hazardous waste collector.',
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
    ]
  },
  {
    id: 'car-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Car Batteries',
    icon: CarBattery,

    summary: 'Do not place car batteries in the trash or curbside recycling. Take them to an approved battery recycling location, retailer, or hazardous waste collector.',
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
    ]
  },

  // Lighting subcategories
  {
    id: 'cfl-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'CFL Bulbs',
    icon: Lightbulb,

    summary: 'Do not place CFL bulbs in the trash or curbside recycling. Take them to an approved recycling location, retailer, or hazardous waste collector.',
    instructions: [
      'Keep the bulb intact and undamaged if possible, and handle carefully to prevent breakage.',
      'Store the bulb in a safe, dry place away from children and hazardous materials until recycled.',
      'Take the CFL bulbs to an approved collector/recycler, retailer, or hazardous waste collector that accepts fluorescent bulbs.',
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
    ]
  },
  {
    id: 'led-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'LED Bulbs',
    icon: Lightbulb,

    summary: 'Do not place LED bulbs in the trash or curbside recycling. Take them to an approved recycling location, retailer, or hazardous waste collector.',
    instructions: [
      'Keep the bulb intact and undamaged if possible, and handle carefully to prevent breakage.',
      'Do not place LED bulbs in the trash or curbside recycling.',
      'Take the LED bulbs to an approved collector/recycler, retailer, or hazardous waste collector that accepts LED lights.',
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
    ]
  },
  {
    id: 'incandescent-halogen-bulbs',
    parentId: 'lighting',
    type: 'item',
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
    ]
  },
  {
    id: 'fluorescent-tubes',
    parentId: 'lighting',
    type: 'item',
    name: 'Fluorescent Tubes',
    icon: Lightbulb,

    summary: 'Do not place fluorescent tubes in the trash or curbside recycling. Take them to an appropriate recycling location, retailer, or hazardous waste collector.',
    instructions: [
      'Keep the tube intact and undamaged if possible, and handle carefully to prevent breakage.',
      'Store the tube in a safe, dry place away from children and hazardous materials until recycled.',
      'Take the fluorescent tubes to an approved collector/recycler, retailer, or hazardous waste collector that accepts fluorescent lamps.',
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
    ]
  },

  // Electronics subcategories
  {
    id: 'phones-tablets',
    parentId: 'electronics',
    type: 'item',
    name: 'Phones & Tablets',
    icon: Smartphone,

    summary: 'Do not place phones or tablets in the trash or curbside recycling. Take them to an approved recycling location, retailer, or e-waste collector.',
    instructions: [
      'Back up any important data from the device, sign out of all your accounts, and erase all personal data from the device.',
      'Keep the device intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the device to an authorized e-waste collector/recycler, retailer, or hazardous waste collector that accepts electronic waste.',
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
    ]
  },
  {
    id: 'laptops-computers',
    parentId: 'electronics',
    type: 'item',
    name: 'Laptops & Computers',
    icon: Laptop,

    summary: 'Do not place laptops or computers in the trash or curbside recycling. Take them to an approved recycling location, retailer, or e-waste collector.',
    instructions: [
      'Back up any important data from the device, sign out of all your accounts, and erase all personal data from the device.',
      'Keep the device intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the device to an authorized e-waste collector/recycler, retailer, or hazardous waste collector that accepts electronic waste.',
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
    ]
  },
  {
    id: 'tvs-monitors',
    parentId: 'electronics',
    type: 'item',
    name: 'TVs & Monitors',
    icon: Monitor,

    summary: 'Do not place TVs or monitors in the trash or curbside recycling. Take them to an approved recycling location, retailer, or e-waste collector.',
    instructions: [
      'Keep the TV or monitor intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the device to an authorized e-waste collector/recycler, retailer, or hazardous waste collector that accepts electronic waste.',
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
    ]
  },
  {
    id: 'cables-chargers',
    parentId: 'electronics',
    type: 'item',
    name: 'Cables & Chargers',
    icon: Cable,

    summary: 'Do not place cables or chargers in curbside recycling. Take them to an approved recycling location, retailer, or e-waste collector.',
    instructions: [
      'Keep the item intact and undamaged if possible, and do not puncture, open, or damage it before recycling.',
      'Take the cables and chargers to an authorized e-waste collector/recycler or retailer that accepts them.',
    ],

    safetyNote: 'Damaged/broken chargers and power adapters can pose electrical hazards. Do not use a charger with exposed wires, damaged insulation.',
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
    ]
  },
  {
    id: 'small-electronics-accessories',
    parentId: 'electronics',
    type: 'item',
    name: 'Small Electronics & Accessories',
    icon: Gamepad2,

    summary: 'Do not place small electronics in the trash or curbside recycling. Take them to an approved recycling location, retailer, or e-waste collector.',
    instructions: [
      'Keep the item intact and undamaged if possible, and do not crush, puncture, open, or damage it before recycling.',
      'Take the item to an authorized e-waste collector/recycler, retailer, or hazardous waste collector that accepts electronic waste.',
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
    ]
  },

  // Paint/chemical subcategories
  {
    id: 'latex-paint',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Latex Paint',
    icon: PaintBucket,
  },
  {
    id: 'oil-based-paint',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Oil-Based Paint',
    icon: PaintBucket,
  },
  {
    id: 'cleaning-chemicals',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Cleaning Chemicals',
    icon: SprayCan,
  },
  {
    id: 'pesticides-herbicides',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Pesticides & Herbicides',
    icon: FlaskConical,
  },
  {
    id: 'solvents-adhesives',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Solvents & Adhesives',
    icon: PaintBucket,
  },

  // Medicine/needles subcategories
  {
    id: 'medication',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Medication',
    icon: Pill,
  },
  {
    id: 'needles-syringes',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Needles & Syringes',
    icon: Syringe,
  },
  {
    id: 'lancets',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Lancets',
    icon: Syringe,
  },
  {
    id: 'inhalers',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Inhalers',
    icon: Wind,
  },

  // Automotive subcategories
  {
    id: 'motor-oil-filters',
    parentId: 'automotive',
    type: 'item',
    name: 'Motor Oil & Filters',
    icon: Droplets,
  },
  {
    id: 'antifreeze-coolant',
    parentId: 'automotive',
    type: 'item',
    name: 'Antifreeze & Coolant',
    icon: Snowflake,
  },
  {
    id: 'gasoline-fuel',
    parentId: 'automotive',
    type: 'item',
    name: 'Gasoline & Fuel',
    icon: Fuel,
  },
  {
    id: 'tires',
    parentId: 'automotive',
    type: 'item',
    name: 'Tires',
    icon: CircleGauge,
  },

  // Appliances subcategories
  {
    id: 'refrigerators-freezers',
    parentId: 'appliances',
    type: 'item',
    name: 'Refrigerators & Freezers',
    icon: Refrigerator,
  },
  {
    id: 'air-conditioners',
    parentId: 'appliances',
    type: 'item',
    name: 'Air Conditioners',
    icon: Snowflake,
  },
  {
    id: 'washers-dryers',
    parentId: 'appliances',
    type: 'item',
    name: 'Washers & Dryers',
    icon: WashingMachine,
  },
  {
    id: 'microwaves-ovens',
    parentId: 'appliances',
    type: 'item',
    name: 'Microwaves & Ovens',
    icon: Microwave,
  },
  {
    id: 'small-appliances',
    parentId: 'appliances',
    type: 'item',
    name: 'Small Appliances',
    icon: CookingPot,
  },

  // Furniture/bulky items subcategories
  {
    id: 'couches-sofas',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Couches & Sofas',
    icon: Armchair,
  },
  {
    id: 'chairs-tables',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Chairs & Tables',
    icon: RockingChair,
  },
  {
    id: 'mattresses',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Mattresses',
    icon: BedDouble,
  },
  {
    id: 'carpets-rugs',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Carpets & Rugs',
    icon: RectangleHorizontal,
  }
]

function App() {
  const [currentEntryId, setCurrentEntryId] = useState(null);
  const currentEntry = catalog.find((entry) => entry.id === currentEntryId);
  const mainCategories = catalog.filter((entry) => entry.parentId === null);
  const childCategories = catalog.filter((entry) => entry.parentId === currentEntryId);

  if (currentEntry?.type === 'item') {
    const parentEntry = catalog.find((entry) => entry.id === currentEntry.parentId)
    return (
      <main className="app">
        <button className = "back" type = "button" 
        onClick = {() => setCurrentEntryId(currentEntry.parentId)}>
          ← {parentEntry.name}
        </button>

        <header className = "item-header">
          <h1>{currentEntry.name}</h1>
          <h2>How to dispose</h2>
          <p>{currentEntry.summary}</p>
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

  if (currentEntry?.type === 'category') {
    return (
      <main className="app">
        <button className="back" type="button" onClick={() => 
        setCurrentEntryId(currentEntry.parentId)}>
          ← Disposal Categories
        </button>

        <header className="category-header">
          <h1>{currentEntry.name}</h1>
          <p className="description">Choose the item that best matches what you want to dispose of.</p>
        </header>

        <div className = "category-grid">
          {childCategories.map((entry) => {
            const Icon = entry.icon;
          
          return (
            <button className = "category-button" type = "button" key = {entry.id} 
            onClick = {() => setCurrentEntryId(entry.id)}>
              <span className="category-icon" aria-hidden="true"><Icon /></span>
              <span className="category-name">{entry.name}</span>
            </button>
            );
            })}
        </div>
      </main>
    )
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="guide">Orange County disposal guide</p>
        <h1>SafeDispose</h1>
        <p className="description">
          Find clear instructions on how to safely dispose your everyday items.
        </p>
      </header>

      <section className="search">
        <input
        className="search-input"
        type="search"
        placeholder="Batteries, lightbulbs, paint..."
        aria-label="Search for items to dispose"
        />
      </section>
      
      <section className="categories">
        <h2>Browse by category</h2>
        <div className="category-grid">
          {mainCategories.map((category) => {
            const Icon = category.icon;
          
          return (
            <button className="category-button" type="button" key={category.id} 
            onClick={() => setCurrentEntryId(category.id)}>
              <span className="category-icon" aria-hidden="true"><Icon /></span>
              <span className="category-name">{category.name}</span>
            </button>
          );
          })}
        </div>
      </section>
    </main>
  )
}

export default App