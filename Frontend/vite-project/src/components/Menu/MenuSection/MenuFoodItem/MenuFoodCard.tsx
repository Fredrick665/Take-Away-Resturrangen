// MenuFoodCard.tsx
import { useCartStore } from './../../../../stores/cartStore'; // Store importálása
import './menuFoodCard.css';

function MenuFoodCard() {
  const addItemToCart = useCartStore((state) => state.addItem);
  const foodItem = {
    id: 1, // Az étel ID-ja (ennek dinamikusnak kell lennie a valós adatokkal)
    name: 'Sushi One',
    price: 1500,
  };

  const handleAddToCart = () => {
    addItemToCart(foodItem.id); // Hozzáadjuk az ételt a kosárhoz
  };

  return (
    <article className="menu__food-card">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </figure>
      <h4>{foodItem.name}</h4>
      <p>{foodItem.price}kr</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </article>
  );
}


export default MenuFoodCard;


// Författare: Miklós