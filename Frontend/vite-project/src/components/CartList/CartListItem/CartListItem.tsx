import "./cartListItem.css";

interface CartListItemProps {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  notes: string;
  onAdd: () => void;
  onSubtract: () => void;
  onNotesChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CartListItem({
  name,
  price,
  quantity,
  imageUrl,
  notes,
  onAdd,
  onSubtract,
  onNotesChange,
}: CartListItemProps) {
  return (
    <section className="product-item">
      <div className="info-product">
        <img src={imageUrl} alt={`Bild på ${name}`} className="product-image" />
        <div className="product-details">
          <h2 className="text-product">{name}</h2>
          <p>{price} kr</p>
        </div>
      </div>
      <article className="notes-container">
        <textarea
          id="notes"
          name="notes"
          placeholder="Anteckningar:"
          className="notes-input"
          value={notes}
          onChange={onNotesChange}
        ></textarea>
      </article>
      <div className="product-sum">{quantity}</div>
      <div className="btn-quantity">
        <button className="btn-subtract" onClick={onSubtract}>
          -
        </button>
        <button className="btn-add" onClick={onAdd}>
          +
        </button>
      </div>
    </section>
  );
}

export default CartListItem;

// Förtfattare Katerina
// Ändringar av Fredrick. Har skickat props och typat om en del.
