// WebShop.tsx
import { useEffect, useState } from "react";
import "./WebShop.css";
import { Item } from "./ShopComponents/models/item";
import ItemCard from "./ShopComponents/ItemCard/ItemCard";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function WebShop() {
  const [itemsData, setItemsData] = useState<Item[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("priceDesc");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: Response = await fetch("/items.json");
      if (!response.ok) {
        throw new Error("Failed to fetch items data");
      }
      const data: Item[] = await response.json();
      setItemsData(data);
    } catch (error) {
      console.error("There was a problem fetching items:", error);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    sortItems(newSortOrder);
  };

  const sortItems = (order: string) => {
    let sortedItems = [...itemsData];

    switch (order) {
      case "priceDesc":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "priceAsc":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "alphabeticalAsc":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabeticalDesc":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setItemsData(sortedItems);
  };

  return (
    <div className="web-shop-container">
      <div className="shop-header-container">
        <div className="sort-container">
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="priceDesc">Cena: Najveća-Najmanja</option>
            <option value="priceAsc">Cena: Najmanja-Najveća</option>
            <option value="alphabeticalAsc">A-Z</option>
            <option value="alphabeticalDesc">Z-A</option>
          </select>
        </div>

        <div className="search-container">
  <div className="search-wrapper">
    <input type="text" />
    <div className="search-icon-container">
      <SearchOutlinedIcon className="search-icon" />
    </div>
  </div>
</div>

        <div className="filter-cart-icon-wrapper">
          <div className="filter-icon-container">
            <TuneIcon sx={{ fontSize: 40 }} />
          </div>
          <div className="cart-icon-container">
            <ShoppingCartIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>

      <div className="item-card-wrapper">
        {itemsData.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
