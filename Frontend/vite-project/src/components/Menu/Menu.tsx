import "./menu.css";
import MenuSection from "./MenuSection/MenuSection";
function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <MenuSection />
    </main>
  );
}

export default Menu;

// Författare: Miklós
// Komponenten visar upp en menu för restaurangens matträtter på startsidan
//Ändring av Fredrick. Tog bort renderingen av menusection två gånger för att vi för närvarande inte sorterar kategorierna.
