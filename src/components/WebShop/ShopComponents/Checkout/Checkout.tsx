import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Item } from "../models/item";
import "./Checkout.css";

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    city: "",
    postalCode: "",
    phone: "",
    street: "",
    number: "",
  });
  const [cartItems, setCartItems] = useState<{ item: Item; quantity: number }[]>([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const storedTotalPrice = localStorage.getItem("totalPrice");
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    const orderDetails = {
      userInfo,
      cartItems,
      totalPrice,
    };
    console.log("Order details:", orderDetails);
  };

  const handleBack = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="checkout-container">
      <div className="input-wrapper">
        <h2 className="title">Unesite vaše informacije</h2>
        <label>Ime:</label>
        <input
          type="text"
          name="name"
          placeholder=""
          value={userInfo.name}
          onChange={handleChange}
        />
        <label>Prezime:</label>
        <input
          type="text"
          name="surname"
          placeholder=""
          value={userInfo.surname}
          onChange={handleChange}
        />
        <label>Grad:</label>
        <input
          type="text"
          name="city"
          placeholder=""
          value={userInfo.city}
          onChange={handleChange}
        />
        <label>Poštanski broj:</label>
        <input
          type="text"
          name="postalCode"
          placeholder=""
          value={userInfo.postalCode}
          onChange={handleChange}
        />
        <label>Broj telefona:</label>
        <input
          type="text"
          name="phone"
          placeholder=""
          value={userInfo.phone}
          onChange={handleChange}
        />
        <label>Ulica:</label>
        <input
          type="text"
          name="street"
          placeholder=""
          value={userInfo.street}
          onChange={handleChange}
        />
        <label>Broj:</label>
        <input
          type="text"
          name="number"
          placeholder=""
          value={userInfo.number}
          onChange={handleChange}
        />
        <div className="total-price">
          Ukupno za plaćanje: <strong>{totalPrice.toFixed(2)} RSD</strong>
        </div>
      </div>
      <div className="order-button-wraper">
      <button className="back-button-wrapper" onClick={handleBack}>Nazad</button>
        <button onClick={handleOrder}>Poruči</button>
      </div>
    </div>
  );
}
