import React, { useEffect, useState } from "react";
import { Item } from "../models/item";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [shippingPrice] = useState<number>(300);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateLocalStorage = (updatedCartItems: Item[]) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartItemCount", JSON.stringify(updatedCartItems.reduce((total, item) => total + (item.quantity || 0), 0)));
  };

  const handleRemoveItem = (itemId: string | undefined) => {
    if (itemId) {
      const updatedItems = cartItems.map(item =>
        item.id === itemId && item.quantity && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity && item.quantity > 0);

      setCartItems(updatedItems);
      updateLocalStorage(updatedItems);
    }
  };

  const handleAddItem = (itemId: string | undefined) => {
    if (itemId) {
      const updatedItems = cartItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );

      setCartItems(updatedItems);
      updateLocalStorage(updatedItems);
    }
  };

  const handleDeleteItem = (itemId: string | undefined) => {
    if (itemId) {
      const updatedItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedItems);
      updateLocalStorage(updatedItems);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(({ price, quantity = 1 }) => {
      total += Number(price) * quantity;
    });
    return total + shippingPrice;
  };

  const totalPrice = calculateTotalPrice();

  const handleNextClick = () => {
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  const formatPrice = (price: number | string) => {
    return `RSD ${Number(price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="cart-items-container">
      <div className="cart-items-wrapper">
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">Vaša korpa je prazna</div>
        ) : (
          cartItems.map(({ id, image, name, price, quantity = 1 }) => (
            <div key={id} className="cart-item">
              <img
                src={image}
                alt={name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="item-name-price-wrapper">
                  <div className="cart-item-name">{name}</div>
                  <div className="cart-item-price">
                    <strong>{formatPrice(price)}</strong>
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleRemoveItem(id)}
                  >
                    <RemoveIcon />
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleAddItem(id)}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
              <div
                className="delete-icon-container"
                onClick={() => handleDeleteItem(id)}
              >
                <DeleteIcon />
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="shipping-price-container">
          <span>Usluge dostave:</span>{" "}
          <strong>
            <span>{formatPrice(shippingPrice)}</span>
          </strong>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="total-price-container">
          <span>Ukupno za plaćanje:</span>{" "}
          <strong>
            <span>{formatPrice(totalPrice)}</span>
          </strong>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="next-button-container">
          <button className="next-button" onClick={handleNextClick}>Nastavi...</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
