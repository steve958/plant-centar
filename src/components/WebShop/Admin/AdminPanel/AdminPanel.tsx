import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Item } from "../../ShopComponents/models/item";
import ItemCardAdmin from "./components/ItemCardAdmin/ItemCardAdmin";
import NewItemModal from "./components/modals/NewItemModal";
import DeleteItemModal from "./components/modals/DeleteItemModal";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { MoonLoader } from "react-spinners";

export default function AdminPanel() {
  const [itemsData, setItemsData] = useState<Item[]>([]);
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("priceDesc");
  const [searchInput, setSearchInput] = useState<string>("");
  const [addItemClicked, setAddItemClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

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
    let filteredItems = itemsData.filter((item) =>
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

  const handleCloseModal = () => {
    setAddItemClicked(false);
  };

  const handleConfirm = async (newItem: Item) => {
    try {
      const itemsCollection = collection(db, "items");
      const docRef = await addDoc(itemsCollection, newItem);

      setItemsData((prevItems) => [
        ...prevItems,
        { ...newItem, id: docRef.id },
      ]);
      setDisplayedItems((prevItems) => [
        ...prevItems,
        { ...newItem, id: docRef.id },
      ]);
      handleCloseModal();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleAddItemClick = () => {
    setAddItemClicked(true);
  };

  const handleDeleteRequest = (id: string) => {
    setDeleteItemId(id);
  };

  const handleDelete = async () => {
    if (!deleteItemId) {
      console.error("Error: Document ID is undefined or invalid");
      return;
    }

    try {
      await deleteDoc(doc(db, "items", deleteItemId));
      setItemsData((prevItems) => prevItems.filter(item => item.id !== deleteItemId));
      setDisplayedItems((prevItems) => prevItems.filter(item => item.id !== deleteItemId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      setDeleteItemId(null);
    }
  };

  const handleCloseDeleteModal = () => {
    setDeleteItemId(null);
  };

  return (
    <div className="admin-panel-container">
      {addItemClicked && (
        <NewItemModal close={handleCloseModal} confirm={handleConfirm} />
      )}

      {deleteItemId && (
        <DeleteItemModal
          itemName={itemsData.find(item => item.id === deleteItemId)?.name || ""}
          onConfirm={handleDelete}
          onCancel={handleCloseDeleteModal}
        />
      )}

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

      {isLoading ? (
        <div className="loader-container">
          <MoonLoader color="#1cff00" />
        </div>
      ) : (
        <div className="item-card-wrapper">
          <div className="add-item-card" onClick={handleAddItemClick}>
            <AddCircleIcon className="add-icon" sx={{ fontSize: 80 }} />
          </div>
          {displayedItems.map((item) => (
            <ItemCardAdmin
              key={item.id}
              id={item.id!}
              image={item.image}
              name={item.name}
              price={item.price}
              onDeleteRequest={handleDeleteRequest}
            />
          ))}
        </div>
      )}
    </div>
  );
}
