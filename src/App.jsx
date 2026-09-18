import './App.css';
import { useState } from 'react';

const catalog = [
  {
    id: 'batteries',
    parentId: null,
    type: 'category',
    name: 'Batteries',
    icon: '🔋',
  },
  {
    id: 'lighting',
    parentId: null,
    type: 'category',
    name: 'Lighting',
    icon: '💡',
  },
  {
    id: 'electronics',
    parentId: null,
    type: 'category',
    name: 'Electronics',
    icon: '💻',
  },
  {
    id: 'paint-chemicals',
    parentId: null,
    type: 'category',
    name: 'Paint & Chemicals',
    icon: '🖌️',
  },
  {
    id: 'medicine-needles',
    parentId: null,
    type: 'category',
    name: 'Medicine & Needles',
    icon: '💉',
  },
  {
    id: 'automotive',
    parentId: null,
    type: 'category',
    name: 'Automotive',
    icon: '🚗',
  },
  {
    id: 'appliances',
    parentId: null,
    type: 'category',
    name: 'Appliances',
    icon: '🏠',
  },
  {
    id: 'furniture-bulky-items',
    parentId: null,
    type: 'category',
    name: 'Furniture & Bulky Items',
    icon: '🪑',
  },

  // Battery subcategories
  {
    id: 'alkaline-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Alkaline Batteries',
    icon: '🔋',
  },
  {
    id: 'rechargeable-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Rechargeable Batteries',
    icon: '🔋',
  },
  {
    id: 'lithium-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Lithium Batteries',
    icon: '🔋',
  },
  {
    id: 'car-batteries',
    parentId: 'batteries',
    type: 'item',
    name: 'Car Batteries',
    icon: '🔋',
  },

  // Lighting subcategories
  {
    id: 'cfl-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'CFL Bulbs',
    icon: '💡',
  },
  {
    id: 'led-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'LED Bulbs',
    icon: '💡',
  },
  {
    id: 'incandescent-halogen-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'Incandescent & Halogen Bulbs',
    icon: '💡',
  },
  {
    id: 'fluorescent-tubes',
    parentId: 'lighting',
    type: 'item',
    name: 'Fluorescent Tubes',
    icon: '💡',
  },

  // Electronics subcategories
  {
    id: 'phones-tablets',
    parentId: 'electronics',
    type: 'item',
    name: 'Phones & Tablets',
    icon: '📱',
  },
  {
    id: 'laptops-computers',
    parentId: 'electronics',
    type: 'item',
    name: 'Laptops & Computers',
    icon: '💻',
  },
  {
    id: 'tvs-monitors',
    parentId: 'electronics',
    type: 'item',
    name: 'TVs & Monitors',
    icon: '📺',
  },
  {
    id: 'cables-accessories',
    parentId: 'electronics',
    type: 'item',
    name: 'Cables & Accessories',
    icon: '🔌',
  },

  // Paint/chemical subcategories
  {
    id: 'latex-paint',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Latex Paint',
    icon: '🎨',
  },
  {
    id: 'oil-based-paint',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Oil-Based Paint',
    icon: '🎨',
  },
  {
    id: 'cleaning-chemicals',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Cleaning Chemicals',
    icon: '🎨',
  },
  {
    id: 'pesticides-herbicides',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Pesticides & Herbicides',
    icon: '🎨',
  },
  {
    id: 'solvents-adhesives',
    parentId: 'paint-chemicals',
    type: 'item',
    name: 'Solvents & Adhesives',
    icon: '🎨',
  },

  // Medicine/needles subcategories
  {
    id: 'medication',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Medication',
    icon: '💊',
  },
  {
    id: 'needles-syringes',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Needles & Syringes',
    icon: '💉',
  },
  {
    id: 'lancets',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Lancets',
    icon: '💉',
  },
  {
    id: 'inhalers',
    parentId: 'medicine-needles',
    type: 'item',
    name: 'Inhalers',
    icon: '💨',
  },

  // Automotive subcategories
  {
    id: 'motor-oil-filters',
    parentId: 'automotive',
    type: 'item',
    name: 'Motor Oil & Filters',
    icon: '🛢️',
  },
  {
    id: 'antifreeze-coolant',
    parentId: 'automotive',
    type: 'item',
    name: 'Antifreeze & Coolant',
    icon: '❄️',
  },
  {
    id: 'gasoline-fuel',
    parentId: 'automotive',
    type: 'item',
    name: 'Gasoline & Fuel',
    icon: '⛽',
  },
  {
    id: 'tires',
    parentId: 'automotive',
    type: 'item',
    name: 'Tires',
    icon: '🛞',
  },

  // Appliances subcategories
  {
    id: 'refrigerators-freezers',
    parentId: 'appliances',
    type: 'item',
    name: 'Refrigerators & Freezers',
    icon: '🧊',
  },
  {
    id: 'air-conditioners',
    parentId: 'appliances',
    type: 'item',
    name: 'Air Conditioners',
    icon: '❄️',
  },
  {
    id: 'washers-dryers',
    parentId: 'appliances',
    type: 'item',
    name: 'Washers & Dryers',
    icon: '🧺',
  },
  {
    id: 'microwaves-ovens',
    parentId: 'appliances',
    type: 'item',
    name: 'Microwaves & Ovens',
    icon: '🍳',
  },
  {
    id: 'small-appliances',
    parentId: 'appliances',
    type: 'item',
    name: 'Small Appliances',
    icon: '🍽️',
  },

  // Furniture/bulky items subcategories
  {
    id: 'couches-sofas',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Couches & Sofas',
    icon: '🛋️',
  },
  {
    id: 'chairs-tables',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Chairs & Tables',
    icon: '🪑',
  },
  {
    id: 'mattresses',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Mattresses',
    icon: '🛏️',
  },
  {
    id: 'carpets-rugs',
    parentId: 'furniture-bulky-items',
    type: 'item',
    name: 'Carpets & Rugs',
    icon: '🧶',
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

        <header className = "category-header">
          <p className = "guide">Disposal Guide</p>
          <h1>{currentEntry.name}</h1>
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
          {childCategories.map((entry) => (
            <button className = "category-button" type = "button" key = {entry.id} 
            onClick = {() => setCurrentEntryId(entry.id)}>
              <span className="category-icon" aria-hidden="true">{entry.icon}</span>
              <span className="category-name">{entry.name}</span>
            </button>
          ))}
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
          {mainCategories.map((category) => (
            <button className="category-button" type="button" key={category.id} 
            onClick={() => setCurrentEntryId(category.id)}>
              <span className="category-icon" aria-hidden="true">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App