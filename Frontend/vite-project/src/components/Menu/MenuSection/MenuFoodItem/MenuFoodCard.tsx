import "./menuFoodCard.css";

interface MenuFoodCardProps {
  itemId: string;
  price: number;
  imageurl: string;
  title: string;
}

const MenuFoodCard: React.FC<MenuFoodCardProps> = ({
  price,
  imageurl,
  title,
}) => {
  return (
    <article className="menu__food-card">
      <figure>
        <img src={imageurl} alt={title} />
      </figure>
      <h4>{title}</h4>
      <p>{price}kr</p>
      <button>Add to Cart</button>
    </article>
  );
};

export default MenuFoodCard;

// Författare: Miklós
// Ändrat av Fredrick så menufoodcard tar emot title och price som props från menusection.

/*import "./menuFoodCard.css";


function MenuFoodCard() {
  return (
    <article className="menu__food-card">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </figure>
      <h4>Food Card</h4>
      <p>250kr</p>
      <button>Add to Cart</button>
    </article>
  );
}

export default MenuFoodCard;*/
