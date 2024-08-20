import { Tooltip } from "@mui/material";
import "./ItemCardAdmin.css";
import DeleteIcon from '@mui/icons-material/Delete';
interface ItemCardProps {
  name: string;
  image: string;
  price: string;
}

export default function ItemCardAdmin(props: ItemCardProps) {
  const { name, image, price } = props;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "RSD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));

  return (
    <div className="admin-item-card-container">
      <div className="admin-item-card-content">
        <img className="item-image" src={image} alt="slika proizvoda" />
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
                  border: '1px solid #54C143'
                },
              },
            }}
          >
            <div className="item-title">{name}</div>
          </Tooltip>

          <div className="price-icon-wrapper">
            <div className="item-price">{formattedPrice}</div>
            <div className="delete-icon-wrapper">
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
