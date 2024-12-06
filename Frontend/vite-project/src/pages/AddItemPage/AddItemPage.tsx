import "./addItemPage.css";
import DD from "../../assets/DD.png";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";

function AddItemPage() {
  return (
    <main className="add-item-page">
      <HamburgerIcon />
      <h1 className="add-item-page__title">Lägg till ny maträtt</h1>

      <section className="add-item-page__section">
        <h3 className="add-item-page__subtitle">Add Image</h3>
        <div className="add-item-page__drag-and-drop">
          <img src={DD} alt="Drag and Drop Icon" />
          Drag and Drop
        </div>
          <input type="file" name="file" id="file"/>
      </section>

      <section className="add-item-page__section">
        <h3 className="add-item-page__subtitle">Add Food Category</h3>
        <input
          className="add-item-page__input"
          type="text"
          placeholder="Enter food category"
        />
      </section>

      <section className="add-item-page__section">
        <h3 className="add-item-page__subtitle">Add Name</h3>
        <input
          className="add-item-page__input"
          type="text"
          placeholder="Enter dish name"
        />
      </section>

      <section className="add-item-page__section">
        <h3 className="add-item-page__subtitle">Add Price</h3>
        <input
          className="add-item-page__input add-item-page__input--price"
          type="number"
          placeholder="Enter price"
        />
      </section>

      <button className="add-item-page__button">Create Dish!</button>
    </main>
  );
}

export default AddItemPage;

// Författare Fredrick.
