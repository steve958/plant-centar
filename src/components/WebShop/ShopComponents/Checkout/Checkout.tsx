import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Item } from "../models/item";
import { toast } from 'react-toastify';
import "./Checkout.css";

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    city: "",
    postalCode: "",
    phone: "",
    street: "",
    number: "",
  });
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { cartItems: Item[]; totalPrice: number };
    if (state) {
      setCartItems(state.cartItems);
      setTotalPrice(state.totalPrice);
    } else {
      const storedTotalPrice = localStorage.getItem("totalPrice");
      const storedCartItems = localStorage.getItem("cartItems");

      if (storedTotalPrice) {
        setTotalPrice(parseFloat(storedTotalPrice));
      }

      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    const isEmptyField = Object.values(userInfo).some(value => value.trim() === "");
    if (isEmptyField) {
      if (!isButtonDisabled) {
        setIsButtonDisabled(true);
        toast.error("Sva polja moraju biti popunjena!", {
          className: "toast-error",
          icon: false,
          autoClose: 1500,
        });
        setTimeout(() => setIsButtonDisabled(false), 1500); 
      }
      return;
    }

    const orderDetails = {
      userInfo,
      cartItems,
      totalPrice,
    };
    navigate("/poruka");
    console.log("Order details:", orderDetails);
    localStorage.clear();
  };

  const handleBack = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <div className="checkout-container">
      <div className="input-wrapper">
        <h2 className="title">Unesite vaše informacije</h2>
        <label>Ime:</label>
        <input
          className="input-info"
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <label>Prezime:</label>
        <input
          className="input-info"
          type="text"
          name="surname"
          value={userInfo.surname}
          onChange={handleChange}
        />
        <label>Grad:</label>
        <input
          className="input-info"
          type="text"
          name="city"
          value={userInfo.city}
          onChange={handleChange}
        />
        <label>Poštanski broj:</label>
        <input
          className="input-info"
          type="text"
          name="postalCode"
          value={userInfo.postalCode}
          onChange={handleChange}
        />
        <label>Broj telefona:</label>
        <input
          className="input-info"
          type="text"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
        />
        <label>Ulica:</label>
        <input
          className="input-info"
          type="text"
          name="street"
          value={userInfo.street}
          onChange={handleChange}
        />
        <label>Broj:</label>
        <input
          className="input-info"
          type="text"
          name="number"
          value={userInfo.number}
          onChange={handleChange}
        />
        <div className="total-price">
          Ukupno za plaćanje: <strong>{totalPrice.toFixed(2)} RSD</strong>
        </div>
      </div>
      <div className="order-button-wrapper">
        <button className="back-button" onClick={handleBack}>
          Nazad
        </button>
        <button
          className="order-button"
          onClick={handleOrder}
          disabled={isButtonDisabled} 
        >
          Poruči
        </button>
      </div>
    </div>
  );
}
