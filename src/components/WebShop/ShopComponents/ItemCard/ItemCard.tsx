import React from "react";
import { Tooltip } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import "./ItemCard.css";

interface ItemCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  onAddToCart: (name: string, price: string, image: string) => void;
}

export default function ItemCard(props: ItemCardProps) {
  const { id, name, image, price, onAddToCart } = props;
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "RSD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(name, price, image);
  };

  const handleItemClick = () => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="item-card-container" onClick={handleItemClick}>
      <div className="item-card-content">
        <img className="item-image" src={image} alt={name} />
        <div className="item-details">
          <Tooltip
            title={name}
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: '0.75rem',
                  bgcolor: '#fff',
                  color: 'black',
                  p: 1,
                  border: '1px solid #54C143',
                },
              },
            }}
          >
            <div className="item-title">{name}</div>
          </Tooltip>

          <div className="price-icon-wrapper">
            <div className="item-price">{formattedPrice}</div>
            <div className="cart-icon-wrapper" onClick={handleAddToCart}>
              <AddShoppingCartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
