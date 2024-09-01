/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Item } from "../models/item";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "./Checkout.css";
import Loader from "../../../Loader/Loader";

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const form = useRef<HTMLFormElement | null>(null);

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

  useEffect(() => {
    console.log(cartItems);

  }, [cartItems])


  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsButtonDisabled(true);

    try {

      // Send email using EmailJS
      await emailjs.sendForm(
        "service_vy94t1n", // Replace with your service ID
        "template_c5t4mce", // Replace with your template ID
        form.current!,
        "5fNu_yD0ALmsTRjiS" // Replace with your user ID
      );
      toast.success("Porudžbina uspešno poslata!", {
        className: "toast-success",
        icon: false,
        autoClose: 2000,
        position: 'top-center'
      });
      navigate("/poruka");
    } catch (error) {
      toast.error("Došlo je do greške pri slanju porudžbine.", {
        className: "toast-error",
        icon: false,
        autoClose: 1500,
        position: 'top-center'
      });
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
      setIsButtonDisabled(false);
      localStorage.clear();
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="checkout-container">
      {isLoading ? (
        <Loader />
      ) : (
        <form className="checkout-form" ref={form} onSubmit={handleOrder}>
          <div className="input-wrapper">
            <h2 className="title">Unesite vaše informacije</h2>
            <label>Ime:</label>
            <input className="input-info" type="text" name="name" required />
            <label>Prezime:</label>
            <input className="input-info" type="text" name="surname" required />
            <label>Grad:</label>
            <input className="input-info" type="text" name="city" required />
            <label>Poštanski broj:</label>
            <input
              className="input-info"
              type="text"
              name="postalCode"
              required
            />
            <label>Broj telefona:</label>
            <input className="input-info" type="text" name="phone" required />
            <label>Ulica:</label>
            <input className="input-info" type="text" name="street" required />
            <label>Broj:</label>
            <input className="input-info" type="text" name="number" required />
            <div className="total-price">
              Ukupno za plaćanje: <strong>{totalPrice.toFixed(2)} RSD</strong>
            </div>
            {cartItems.length && cartItems.map((item: Item) =>
              <div className="hidden-wrapper">
                <label>Ime artikla:</label>
                <input className="input-info" type="text" name="item-name" value={item.name} />
                <label>Kolicina:</label>
                <input className="input-info" type="text" name="item-qty" value={item.quantity} />
                <label>Cena:</label>
                <input className="input-info" type="text" name="item-price" value={item.price} />
              </div>
            )}
          </div>
          <div className="order-button-wrapper">
            <button className="back-button" type="button" onClick={handleBack}>
              Nazad
            </button>
            <button
              className="order-button"
              type="submit"
              disabled={isButtonDisabled}
            >
              Poruči
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
