import { useRef } from 'react';
import MenuFoodCard from './MenuFoodItem/MenuFoodCard';
import './menuSection.css';

const MenuSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollContainer = (direction: 'left' | 'right'): void => {
    if (containerRef.current) {
      const scrollAmount: number = direction === 'left' ? -500 : 500;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="menu__section">
      <button
        className="slide-btn left"
        onClick={() => scrollContainer('left')}
      >
        <img src="/src/assets/arrow-icon.svg" alt="Previous" />
      </button>
      <button
        className="slide-btn right"
        onClick={() => scrollContainer('right')}
      >
        <img src="/src/assets/arrow-icon.svg" alt="Next" />
      </button>

      <section className="menu__filter-section">
        <h3>Food Type</h3>
        <div className='menu__filter-btns'>
          <button>Price</button>
          <button>A-Z</button>
        </div>
      </section>

      <section className="menu__food-container" ref={containerRef}>
        {Array.from({ length: 16 }).map((_, index) => (
          <MenuFoodCard key={index} />
        ))}
      </section>
    </section>
  );
}

export default MenuSection;

// Författare: Miklós