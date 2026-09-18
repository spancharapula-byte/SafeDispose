import './App.css'
import { useState } from 'react'

const categories = [
  { id: 'batteries', name: 'Batteries', icon: '🔋' },
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'lighting', name: 'Lighting', icon: '💡' },
  { id: 'chemicals', name: 'Chemicals', icon: '🧪' },
  { id: 'medical', name: 'Medical', icon: '💊' },
  { id: 'automotive', name: 'Automotive', icon: '🚗' },
]

const itemsByCategory = {
  lighting: [
    { id: 'cfl-bulb', name: 'CFL Bulbs', label: 'CFL' },
    { id: 'fluorescent-tube', name: 'Fluorescent Tubes', label: 'TUBE' },
    { id: 'led-bulb', name: 'LED Bulbs', label: 'LED' },
    {
      id: 'incandescent-halogen',
      name: 'Incandescent & Halogen',
      label: 'BULB',
    },
  ],
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  if (selectedCategory !== null) {
  const category = categories.find(
    (currentCategory) => currentCategory.id === selectedCategory,
  )

  const items = itemsByCategory[selectedCategory] ?? []

  return (
    <main className="app">
      <div className="category-topbar">
        <button
          className="back-button"
          onClick={() => setSelectedCategory(null)}
        >
          ← Back
        </button>

        <span className="small-logo">SafeDrop</span>
      </div>

      <header className="category-header">
        <h1 className="category-title">{category.name}</h1>

        <p className="category-description">
          Choose the type that best matches your item.
        </p>
      </header>

      {items.length > 0 ? (
        <div className="item-grid">
          {items.map((item) => (
            <button className="item-card" key={item.id}>
              <span className="item-label" aria-hidden="true">
                {item.label}
              </span>

              <span className="item-name">{item.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <p className="empty-message">
          Items for this category will be added soon.
        </p>
      )}
    </main>
  )
}

  return (
    <main className="app">
      <header className="hero">
        <p className="location-label">Orange County disposal guide</p>

        <h1>SafeDrop</h1>

        <p className="description">
          Find clear instructions to dispose of everyday items.
        </p>
      </header>

      <section className="search-section">
        <input
          className="search-input"
          type="search"
          placeholder="Search batteries, paint, bulbs..."
          aria-label="Search for an item"
        />
      </section>
      <section className="categories-section">
        <h2>Browse categories</h2>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon" aria-hidden="true">
                {category.icon}
              </span>

              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App