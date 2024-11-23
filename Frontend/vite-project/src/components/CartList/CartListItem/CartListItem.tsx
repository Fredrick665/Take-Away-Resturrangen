import "./cartListItem.css";

// Gränssnitt för komponentens props (egenskaper)
interface CartListItemProps {
  name: string;
  price: number;
  quantity: number;
  onAdd: () => void;
  onSubtract: () => void;
  notes: string;
  onNotesChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Funktion för att hantera ändringar i anteckningar
}

function CartListItem({
  name,
  price,
  quantity,
  onAdd,
  onSubtract,
  notes,
  onNotesChange,
}: CartListItemProps) {
  return (
    <section className="product-item">
      <div className="info-product">
        <img src="#" alt="bild" />
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
