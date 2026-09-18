import './App.css';
import { useState } from 'react';

const categories = [
  {
    id: 'batteries',
    name: 'Batteries',
    icon: '🔋',
  },
  {
    id: 'light',
    name: 'Lighting',
    icon: '💡',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '💻',
  },
  {
    id: 'paint/chemicals',
    name: 'Paint & Chemicals',
    icon: '🖌️',
  },
  {
    id: 'medicine/needles',
    name: 'Medicine & Needles',
    icon: '💉',
  },
  {
    id: 'Automotive',
    name: 'Automotive',
    icon: '🚗',
  },
  {
    id: 'Appliances',
    name: 'Appliances',
    icon: '🏠',
  },
  {
    id: 'furniture/bulky items',
    name: 'Furniture & Bulky Items',
    icon: '🪑',
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectedCategoryData = categories.find((category) => category.id === selectedCategory);

  if (selectedCategoryData) {
    return (
      <main className="app">
        <button className="back" type="button" onClick={() => setSelectedCategory(null)}>
          ← Disposal Categories
        </button>

        <header className="category-header">
          <h1>{selectedCategoryData.name}</h1>
          <p className="description">Choose the item that best matches what you want to dispose of.</p>
        </header>
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
          {categories.map((category) => (
            <button className="category-button" type="button" key={category.id} onClick={() => setSelectedCategory(category.id)}>
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