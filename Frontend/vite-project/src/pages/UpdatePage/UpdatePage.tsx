import "./UpdatePage.css";
function UpdatePage() {
  return (
    <main className="update-page">
      <span className="update-page__hbmenu"></span>
      <h1 className="update-page__heading">Uppdatera Menyn och Priser</h1>
      <button className="update-page__button">Lägg till ny maträtt</button>
      <button className="update-page__button">
        Redigera en nuvarande maträtt
      </button>
    </main>
  );
}

export default UpdatePage;
