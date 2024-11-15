import "./editItemsPage.css";

function EditItemsPage() {
  return (
    <main className="edit-items-page">
      <span className="edit-items-page__hbmenu"></span>
      <h1 className="edit-items-page__title">Redigera en nuvarande maträtt</h1>
      <section className="edit-items-page__details">
        <ul className="edit-items-page__order-list">
          <li className="edit-items-page__order-item">
            <label className="edit-items-page__order-item-label">
              Lorem ipsum dolor sit amet
              <button className="edit-items-page__order-item-button">
                Ändra/Ta bort
              </button>
            </label>
          </li>
          <li className="edit-items-page__order-item">
            <label className="edit-items-page__order-item-label">
              Integer at ornare nibh
              <button className="edit-items-page__order-item-button">
                Ändra/Ta bort
              </button>
            </label>
          </li>
          <li className="edit-items-page__order-item">
            <label className="edit-items-page__order-item-label">
              Suspendisse venenatis elit
              <button className="edit-items-page__order-item-button">
                Ändra/Ta bort
              </button>
            </label>
          </li>
          <li className="edit-items-page__order-item">
            <label className="edit-items-page__order-item-label">
              Maecenas id dui egestas
              <button className="edit-items-page__order-item-button">
                Ändra/Ta bort
              </button>
            </label>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default EditItemsPage;
