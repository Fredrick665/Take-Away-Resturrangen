import "./addItemPage.css";
import DD from "../../assets/DD.png";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";

function AddItemPage() {
  return (
    <main className="add-item-page">
      <Hamburgericon />
      <h1 className="add-item-page__title">Lägg till ny maträtt</h1>
      <h3 className="add-item-page__subtitle">Add Image</h3>
      <section className="add-item-page__drag-and-drop">
        <img src={DD} alt="Logga" />
        Drag and Drop
      </section>
      <article className="add-item-page__file-info">
        Choose file. No file chosen.
      </article>
      <h3 className="add-item-page__subtitle">Add name</h3>
      <input className="add-item-page__input_name" type="text" placeholder="" />
      <h3 className="add-item-page__subtitle">Add Price</h3>
      <input
        className="add-item-page__input_price"
        type="number"
        placeholder=""
      />

      <button className="add-item-page__button">Create Dish!</button>
    </main>
  );
}

export default AddItemPage;
// Författare Fredrick.
