import React, { useEffect, useState } from "react";
import { Item } from "../models/item";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<
    Map<string, { item: Item; quantity: number }>
  >(new Map());

  const [shippingPrice] = useState<string>("300");
  const navigate = useNavigate();

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

  useEffect(() => {
    updateLocalStorage();
  }, [cartItems]);

  const updateLocalStorage = () => {
    if (cartItems.size === 0) {
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartItemCount", "0"); // Update count to 0
      localStorage.setItem("totalPrice", "0.00"); // Update total price to 0
    } else {
      const allItems = Array.from(cartItems.values()).flatMap(
        ({ item, quantity }) => Array(quantity).fill(item)
      );
      localStorage.setItem("cartItems", JSON.stringify(allItems));
      localStorage.setItem("cartItemCount", JSON.stringify(allItems.length)); // Update count
      
      const total = calculateTotalPrice();
      localStorage.setItem("totalPrice", total.toFixed(2)); // Update total price
    }
  };

  const handleIncreaseQuantity = (name: string) => {
    const updatedCartItems = new Map(cartItems);
    const itemEntry = updatedCartItems.get(name);

    if (itemEntry) {
      itemEntry.quantity += 1;
      updatedCartItems.set(name, itemEntry);
      setCartItems(updatedCartItems);
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
    }
  };

  const handleDeleteItem = (name: string) => {
    const updatedCartItems = new Map(cartItems);
    updatedCartItems.delete(name);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    let shipping = parseFloat(shippingPrice);
    cartItems.forEach(({ item, quantity }) => {
      total += parseFloat(item.price) * quantity;
    });
    return total + shipping;
  };

  const formatPrice = (price: string) => {
    const numberPrice = parseFloat(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "RSD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numberPrice);
  };

  const handleNext = () => {
    localStorage.setItem("totalPrice", calculateTotalPrice().toFixed(2));
    navigate("/checkout");
  };

  return (
    <div className="cart-items-container">
      <div className="cart-items-wrapper">
        {cartItems.size === 0 ? (
          <div className="empty-cart-message">Vaša korpa je prazna</div>
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
      {cartItems.size > 0 ? (
        <div className="shipping-price-container">
          <span>Usluge dostave:</span>{" "}
          <strong>
            <span>{formatPrice(shippingPrice)}</span>
          </strong>
        </div>
      ) : null}
      {cartItems.size > 0 ? (
        <div className="total-price-container">
          <span>Ukupno za plaćanje:</span>{" "}
          <strong>
            <span>{formatPrice(calculateTotalPrice().toString())}</span>
          </strong>
        </div>
      ) : null}
       {cartItems.size > 0 ? (
      <div className="next-button-container">
        <button className="next-button" onClick={handleNext}>Nastavi...</button>
      </div>
       ) : null}
    </div>
  );
};

export default Cart;
