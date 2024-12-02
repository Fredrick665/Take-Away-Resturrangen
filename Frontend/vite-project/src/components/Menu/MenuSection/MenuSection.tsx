import React, { useEffect, useState, useRef } from "react";
import MenuFoodCard from "./MenuFoodItem/MenuFoodCard";
import FilterBtn from "./../../FilterBtns/FilterBtns";
import "./menuSection.css";
import ArrowBtn from "./../../../assets/arrow-icon.svg";

interface MenuItem {
  itemId: string;
  price: number;
  imageurl: string;
  title: string;
}

const MenuSection: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [sortedItems, setSortedItems] = useState<MenuItem[]>([]);
  const [sortBy, setSortBy] = useState<"price" | "name" | "none">("none");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/menu-items"
        );
        const data: MenuItem[] = await response.json();
        setMenuItems(data);
        setSortedItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  useEffect(() => {
    let sortedArray = [...menuItems];
    if (sortBy === "price") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedArray = [...menuItems];
    }
    setSortedItems(sortedArray);
  }, [sortBy, menuItems]);

  const handleSort = (type: "price" | "name") => {
    setSortBy((prevSortBy) => (prevSortBy === type ? "none" : type));
  };

  const scrollContainer = (direction: "left" | "right"): void => {
    if (containerRef.current) {
      const scrollAmount: number = direction === "left" ? -500 : 500;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="menu__section">
      <button
        className="slide-btn left"
        onClick={() => scrollContainer("left")}
      >
        <img src={ArrowBtn} alt="Previous" />
      </button>
      <button
        className="slide-btn right"
        onClick={() => scrollContainer("right")}
      >
        <img src={ArrowBtn} alt="Next" />
      </button>

      <section className="menu__filter-section">
        <h3>Food Type</h3>
        <div className="menu__filter-btns">
          <FilterBtn isActive={sortBy === "price"} onClick={() => handleSort("price")}>
            Price
          </FilterBtn>
          <FilterBtn isActive={sortBy === "name"} onClick={() => handleSort("name")}>
            A-Z
          </FilterBtn>
        </div>
      </section>

      <section className="menu__food-container" ref={containerRef}>
        {sortedItems.map((item) => (
          <MenuFoodCard key={item.itemId} {...item} />
        ))}
      </section>
    </section>
  );
};

export default MenuSection;


// Författare: Miklós
// Ändring av Fredrick. Har använt useFootgun för att hämta menyalternativen och skickat ner dem som props till menufooditems. Funktionalitet för kategori för sorteringen finns inte än.
