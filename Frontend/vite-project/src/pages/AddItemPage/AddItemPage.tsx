import "./addItemPage.css";
import DD from "../../assets/DD.png";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";

function AddItemPage() {
  return (
    <main className="add-item-page">
      <Hamburgericon />
      <h1 className="add-item-page__title">Lägg till ny maträtt</h1>
      <article className="add-item-page__subtitle-container">
        <h3 className="add-item-page__subtitle">Add Image</h3>
      </article>
      <section className="add-item-page__drag-and-drop">
        <img src={DD} alt="Logga" />
        Drag and Drop
      </section>
      <article className="add-item-page__file-info">
        <h3 className="add-item-page__subtitle">
          Choose file. No file chosen.
        </h3>
      </article>
      <article className="add-item-page__subtitle-container">
        <h3 className="add-item-page__subtitle">Add food category</h3>
      </article>
      <input className="add-item-page__input_name" type="text" placeholder="" />
      <article className="add-item-page__subtitle-container">
        <h3 className="add-item-page__subtitle">Add name</h3>
      </article>
      <input className="add-item-page__input_name" type="text" placeholder="" />
      <article className="add-item-page__subtitle-container">
        <h3 className="add-item-page__subtitle">Add Price</h3>
      </article>
      <section className="add-item-page__input-container">
        <input
          className="add-item-page__input_price"
          type="number"
          placeholder=""
        />
      </section>
      <button className="add-item-page__button">Create Dish!</button>
    </main>
  );
}

export default AddItemPage;
// Författare Fredrick.
