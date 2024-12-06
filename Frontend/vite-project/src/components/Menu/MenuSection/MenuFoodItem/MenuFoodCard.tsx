import { useCartStore } from "./../../../../stores/cartStore";
import "./menuFoodCard.css";

interface MenuFoodCardprops {
  imageurl: string;
  title: string;
  price: number;
  itemId: string;
  category: string;
}

function MenuFoodCard({
  imageurl,
  title,
  price,
  itemId,
  category,
}: MenuFoodCardprops) {
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItemToCart({
      itemId,
      imageurl,
      title,
      price,
      desc: "",
      quantity: 1,
      notes: "",
      category,
      id: 0,
    });
  };

  return (
    <article className="menu__food-card">
      <header>
        <figure>
          <img src={imageurl} alt={title} />
        </figure>
        <h4>{title}</h4>
      </header>  
      <footer>
        <p>{price}kr</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </footer>
    </article>
  );
}

export default MenuFoodCard;

// Författare: Miklós
// Ändring av Fredrick: Har typat upp props för att få ett fungerande beställningsflöde.
// Mer ändringar av Fredrick. Har typat om en del.