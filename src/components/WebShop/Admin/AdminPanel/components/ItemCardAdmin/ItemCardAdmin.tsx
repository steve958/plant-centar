import { useState } from "react";
import { Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, deleteDoc } from "firebase/firestore";
import "./ItemCardAdmin.css";
import { db } from "../../../../../firebase";
import DeleteItemModal from "../modals/DeleteItemModal";

interface ItemCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  onItemDeleted: () => void;
}

export default function ItemCardAdmin(props: ItemCardProps) {
  const { id, name, image, price, onItemDeleted } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "RSD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));

  const handleDelete = async () => {
    console.log("Document ID:", id); // Debugging line

    if (!id) {
      console.error("Error: Document ID is undefined or invalid");
      return;
    }

    try {
      await deleteDoc(doc(db, "items", id));
      onItemDeleted();
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <div className="delete-icon-wrapper" onClick={openModal}>
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <DeleteItemModal
          itemName={name}
          onConfirm={handleDelete}
          onCancel={closeModal}
        />
      )}
    </div>
  );
}
