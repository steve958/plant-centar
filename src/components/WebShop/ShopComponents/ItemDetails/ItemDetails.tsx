import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import "./ItemDetalis.css";
import { MoonLoader } from "react-spinners";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ItemDetails() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "items", id!);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    const count = storedCartItems.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    );
    setCartItemCount(count);
  }, []);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prevQuantity) =>
      Math.max(1, increment ? prevQuantity + 1 : prevQuantity - 1)
    );
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const itemIndex = cartItems.findIndex(
      (cartItem: any) => cartItem.id === id
    );

    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity += quantity;
    } else {
      const newItem = {
        id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity,
      };
      cartItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const itemCount = cartItems.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    );
    localStorage.setItem("cartItemCount", JSON.stringify(itemCount));
    setCartItemCount(itemCount); 
  };

  const handleCartIconClick = () => {
    navigate("/korpa");
  };

  return (
    <div className="item-details-container">
      {isLoading ? (
        <div className="loader-container">
          <MoonLoader color="#1cff00" />
        </div>
      ) : (
        <div className="item-details-content">
          <div className="item-details-header">
            <button className="back-button" onClick={() => navigate(-1)}>
              Nazad
            </button>
            <div className="cart-icon-container" onClick={handleCartIconClick}>
              <ShoppingCartIcon sx={{ fontSize: 40 }} />
              {cartItemCount > 0 && (
                <div className="cart-item-count">
                  <strong>{cartItemCount}</strong>
                </div>
              )}
            </div>
          </div>
          <div className="item-detalis-wrapper">
            <div className="image-container">
              <img className="show-item-image" src={item.image} alt={item.name} />
            </div>
            <div className="item-info">
              <h1 className="item-name">{item.name}</h1>
              <div className="item-detali-price">
                <strong>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "RSD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(Number(item.price))}
                </strong>
              </div>
              <p className="item-description">
                {item.description || "No description available"}
              </p>

              <div className="add-to-cart-container">
                <div className="item-detali-quantity-wrapper">
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(false)}
                  >
                    -
                  </button>
                  <span className="number-of-items">{quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(true)}
                  >
                    +
                  </button>
                </div>
                <div className="add-cart-icon-container">
                  <button
                    onClick={handleAddToCart}
                  >Dodaj u korpu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
