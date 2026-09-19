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
  TriangleAlert
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
    id: 'alkaline-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Alkaline Batteries',
    icon: BatteryMedium,

    summary: 'Do not place alkaline batteries in the trash or curbside recycling. Take them to an approved battery recycling location.',
    instructions: [
      'Tape the ends of the batteries/battery terminals with non-conductive tape (e.g., electrical tape) to prevent short-circuiting.',
      'Place the batteries in a clear plastic bag or a container that can be sealed, and keep them separate during transport.',
      'Take the batteries to an approved battery recycling location.',
    ],

    safetyNote: 'Keep damaged or leaking batteries away from skin and eyes, and keep them seperate from other batteries.',
    sources:
    [
      '...'
    ]
  },
  {
    id: 'rechargeable-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Rechargeable Batteries',
    icon: BatteryCharging,
  },
  {
    id: 'lithium-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Lithium Batteries',
    icon: BatteryFull,
  },
  {
    id: 'button-coin-cell-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Button & Coin Cell Batteries',
    icon: Circle,
  },
  {
    id: 'car-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Car Batteries',
    icon: Battery,
  },

  // Lighting subcategories
  {
    id: 'cfl-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'CFL Bulbs',
    icon: Lightbulb,
  },
  {
    id: 'led-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'LED Bulbs',
    icon: Lightbulb,
  },
  {
    id: 'incandescent-halogen-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'Incandescent & Halogen Bulbs',
    icon: LampDesk,
  },
  {
    id: 'fluorescent-tubes',
    parentId: 'lighting',
    type: 'item',
    name: 'Fluorescent Tubes',
    icon: LampDesk,
  },

  // Electronics subcategories
  {
    id: 'phones-tablets',
    parentId: 'electronics',
    type: 'item',
    name: 'Phones & Tablets',
    icon: Smartphone,
  },
  {
    id: 'laptops-computers',
    parentId: 'electronics',
    type: 'item',
    name: 'Laptops & Computers',
    icon: Laptop,
  },
  {
    id: 'tvs-monitors',
    parentId: 'electronics',
    type: 'item',
    name: 'TVs & Monitors',
    icon: Monitor,
  },
  {
    id: 'cables-accessories',
    parentId: 'electronics',
    type: 'item',
    name: 'Cables & Accessories',
    icon: Cable,
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
          {currentEntry.sources?.map((source) => (<a key={source.url} href={source.url} 
          target="_blank" rel="noreferrer">
            {source.name}
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