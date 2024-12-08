import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import useAnimationStore from "../../../stores/AnimationStore";
import MenuFoodCard from "./MenuFoodItem/MenuFoodCard";
import "./menuSection.css";

interface MenuItem {
  itemId: string;
  price: number;
  imageurl: string;
  title: string;
  category: string;
}

const MenuSection: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [sortBy, setSortBy] = useState<{ [key: string]: string }>({});
  const containerRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { fadeInUp, staggerChildren, slideInUp } = useAnimationStore();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/menu-items"
        );
        const data: MenuItem[] = await response.json();

        const parsedData = data.map((item) => ({
          ...item,
          price: parseFloat(item.price.toString()),
        }));

        setMenuItems(parsedData);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const scrollContainer = (
    category: string,
    direction: "left" | "right"
  ): void => {
    const container = containerRefs.current[category];
    if (container) {
      const scrollAmount: number = direction === "left" ? -500 : 500;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const groupedByCategory = menuItems.reduce((groups, item) => {
    const { category } = item;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {} as { [key: string]: MenuItem[] });

  const handleSortToggle = (category: string, criteria: string) => {
    setSortBy((prevSortBy) => {
      const currentSort = prevSortBy[category];
      const newSort = currentSort === criteria ? "none" : criteria;
      return {
        ...prevSortBy,
        [category]: newSort,
      };
    });
  };

  const getSortedItems = (category: string) => {
    const items = groupedByCategory[category] || [];
    const currentSort = sortBy[category] || "none";

    if (currentSort === "price") {
      return [...items].sort((a, b) => a.price - b.price);
    }
    if (currentSort === "reverse-price") {
      return [...items].sort((a, b) => b.price - a.price);
    }
    if (currentSort === "az") {
      return [...items].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (currentSort === "za") {
      return [...items].sort((a, b) => b.title.localeCompare(a.title));
    }
    return items;
  };

  return (
    <>
      {Object.keys(groupedByCategory).map((category) => (
        <motion.section
          key={category}
          className="menu__section"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button
            className="slide-btn left"
            onClick={() => scrollContainer(category, "left")}
          >
            <img src="/src/assets/arrow-icon.svg" alt="Previous" />
          </button>
          <button
            className="slide-btn right"
            onClick={() => scrollContainer(category, "right")}
          >
            <img src="/src/assets/arrow-icon.svg" alt="Next" />
          </button>

          <section className="menu__filter-section">
            <h3>{category}</h3>
            <motion.div
              variants={slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
              className="menu__filter-btns"
            >
              <button
                onClick={() =>
                  handleSortToggle(
                    category,
                    sortBy[category] === "price" ? "reverse-price" : "price"
                  )
                }
              >
                Price: {sortBy[category] === "price" ? "→" : "←"}
              </button>
              <button
                onClick={() =>
                  handleSortToggle(
                    category,
                    sortBy[category] === "az" ? "za" : "az"
                  )
                }
              >
                {sortBy[category] === "az" ? "A-Z" : "Z-A"}
              </button>
            </motion.div>
          </section>

          <motion.section
            className="menu__food-container"
            ref={(el) => (containerRefs.current[category] = el)}
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {getSortedItems(category).map((item) => (
              <MenuFoodCard key={item.itemId} {...item} />
            ))}
          </motion.section>
        </motion.section>
      ))}
    </>
  );
};

export default MenuSection;
// Författare: Miklós
// Ändring av Fredrick. Har använt useFootgun för att hämta menyalternativen och skickat ner dem som props till menufooditems. Funktionalitet för kategori för sorteringen finns inte än.
// Ändring av Fredrick. Allt är sorterat efter kategori.
// Ändringar av Fredrick. Har typat om en del.
// Ändring av Fredrick. Animation Animation och åter Animation
