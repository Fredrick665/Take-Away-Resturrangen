import "./adminpage.css";

function Adminpage() {
  return (
    <main className="admin-page">
      <span className="admin-page__hbmenu"></span>
      <h1 className="admin-page__heading">
        Välkommen till din Adminsidan Username
      </h1>
      <h2 className="admin-page__heading">Uppdatera menyn och priser</h2>
      <h2 className="admin-page__heading">Alla beställningar</h2>
      <h2 className="admin-page__heading">Lagerstatus</h2>
    </main>
  );
}

export default Adminpage;
