import MenuFoodCard from './MenuFoodItem/MenuFoodCard'
import './menuSection.css'
function MenuSection() {
  return (
    <section className="menu__section">
        <button className="slide-btn left"><img src="/src/assets/arrow-icon.svg" alt="" /></button>
        <button className="slide-btn right"><img src="/src/assets/arrow-icon.svg" alt="" /></button>
        <section className='menu__filter-section'>
            <h3>Food Type</h3>
            <button>Price</button>
            <button>A-Z</button>
        </section>
        <section className='menu__food-container'>
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
            <MenuFoodCard />
        </section>
    </section>
  )
}

export default MenuSection