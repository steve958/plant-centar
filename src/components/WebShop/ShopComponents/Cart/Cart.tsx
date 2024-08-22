import React, { useEffect, useState } from "react";
import { Item } from "../models/item";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<
    Map<string, { item: Item; quantity: number }>
  >(new Map());

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const items = JSON.parse(storedCartItems) as Item[];
      const itemMap = new Map<string, { item: Item; quantity: number }>();

      items.forEach((item: Item) => {
        if (itemMap.has(item.name)) {
          const existing = itemMap.get(item.name);
          if (existing) {
            existing.quantity += 1;
            itemMap.set(item.name, existing);
          }
        } else {
          itemMap.set(item.name, { item, quantity: 1 });
        }
      });

      setCartItems(itemMap);
    }
  }, []);

  const updateLocalStorage = (
    itemMap: Map<string, { item: Item; quantity: number }>
  ) => {
    const allItems = Array.from(itemMap.values()).flatMap(
      ({ item, quantity }) => Array(quantity).fill(item)
    );
    localStorage.setItem("cartItems", JSON.stringify(allItems));
  };

  const handleIncreaseQuantity = (name: string) => {
    const updatedCartItems = new Map(cartItems);
    const itemEntry = updatedCartItems.get(name);

    if (itemEntry) {
      itemEntry.quantity += 1;
      updatedCartItems.set(name, itemEntry);
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  const handleDecreaseQuantity = (name: string) => {
    const updatedCartItems = new Map(cartItems);
    const itemEntry = updatedCartItems.get(name);

    if (itemEntry) {
      if (itemEntry.quantity > 1) {
        itemEntry.quantity -= 1;
        updatedCartItems.set(name, itemEntry);
      } else {
        updatedCartItems.delete(name);
      }
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  const handleDeleteItem = (name: string) => {
    const updatedCartItems = new Map(cartItems);
    updatedCartItems.delete(name);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  // Function to format the price
  const formatPrice = (price: string) => {
    const numberPrice = parseFloat(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "RSD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numberPrice);
  };

  return (
    <div className="cart-items-container">
      <div className="cart-items-wrapper">
        {cartItems.size === 0 ? (
          <div className="empty-cart-message">Your cart is empty</div>
        ) : (
          Array.from(cartItems.values()).map(({ item, quantity }) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="item-name-price-wrapper">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(item.name)}
                  >
                    <RemoveIcon />
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(item.name)}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
              <div
                className="delete-icon-container"
                onClick={() => handleDeleteItem(item.name)}
              >
                <DeleteIcon />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
