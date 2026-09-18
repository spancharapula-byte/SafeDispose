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
    id: 'incandescent-bulbs',
    parentId: 'lighting',
    type: 'item',
    name: 'Incandescent Bulbs',
    icon: '💡',
  },
  {
    id: 'fluorescent-tubes',
    parentId: 'lighting',
    type: 'item',
    name: 'Fluorescent Tubes',
    icon: '💡',
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