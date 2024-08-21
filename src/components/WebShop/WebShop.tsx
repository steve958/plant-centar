import { useEffect, useState } from "react";
import "./WebShop.css";
import { Item } from "./ShopComponents/models/item";
import ItemCard from "./ShopComponents/ItemCard/ItemCard";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { collection, getDocs } from "firebase/firestore";
import { MoonLoader } from "react-spinners";
import { db } from "../firebase";

export default function WebShop() {
  const [itemsData, setItemsData] = useState<Item[]>([]);
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("priceDesc");
  const [searchInput, setSearchInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterAndSortItems();
  }, [searchInput, sortOrder]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data: Item[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Item),
      }));
      setItemsData(data);
      setDisplayedItems(data);
    } catch (error) {
      console.error("There was a problem fetching items:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const filterAndSortItems = () => {
    let filteredItems = itemsData.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    switch (sortOrder) {
      case "priceDesc":
        filteredItems.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "priceAsc":
        filteredItems.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "alphabeticalAsc":
        filteredItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabeticalDesc":
        filteredItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setDisplayedItems(filteredItems);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="web-shop-container">
      <div className="shop-header-container">
        <div className="sort-container">
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="priceDesc">Cena: najveća-najmanja</option>
            <option value="priceAsc">Cena: najmanja-najveća</option>
            <option value="alphabeticalAsc">A-Z</option>
            <option value="alphabeticalDesc">Z-A</option>
          </select>
        </div>

        <div className="search-container">
          <div className="search-wrapper">
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchInput}
              placeholder="Pretraži..."
            />
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
        {isLoading ? <MoonLoader color="#1cff00" />: displayedItems.map((item) => (
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
