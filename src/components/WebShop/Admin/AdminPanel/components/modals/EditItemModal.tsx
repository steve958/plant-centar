import { useState } from "react";
import { Item } from "../../../../ShopComponents/models/item";
import "./EditItemModal.css";
import { toast } from "react-toastify";

interface EditItemProps {
  close: () => void;
  confirm: (updatedItem: Item) => Promise<void>;
  id: string;
  image: string;
  name: string;
  description?: string;
  category?: string;
  quantity_in_stock?: string;
  price: string;
}

export default function EditItemModal(props: EditItemProps) {
  const {
    close,
    confirm,
    id,
    image,
    name,
    description = "",
    category = "",
    quantity_in_stock = "",
    price,
  } = props;

  const [currentImage, setCurrentImage] = useState(image);
  const [currentName, setCurrentName] = useState(name);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [currentQuantity, setCurrentQuantity] = useState(quantity_in_stock);
  const [currentPrice, setCurrentPrice] = useState(price);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [isSaving, setIsSaving] = useState<boolean>(false); // Track saving state

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setCurrentImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (isSaving) return;

    setIsSaving(true);
    const updatedItem: Item = {
      id,
      image: currentImage,
      name: currentName,
      description: currentDescription,
      category: currentCategory,
      quantity_in_stock: currentQuantity,
      price: currentPrice,
    };

    try {
      await confirm(updatedItem);
    } catch (error) {
      toast.error("Doslo je do greške pri čuvanju", { autoClose: 1500 });
    } finally {
      setIsSaving(false);
      toast.success("Uspešno sačuvano", { autoClose: 1500 });
    }
  };

  const handleQuantityChange = (change: number) => {
    const updatedQuantity = (parseInt(currentQuantity) || 0) + change;
    setCurrentQuantity(updatedQuantity.toString());
  };

  return (
    <div className="edit-item-modal-container">
      <div className="edit-item-modal-content">
        <div className="edit-item-modal-heading">Izmena proizvoda</div>
        <div className="edit-form-group">
          <label>Naziv:</label>
          <input
            type="text"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="edit-form-group">
          <label>Slika:</label>
          <div className="image-input-container">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-input"
            />
            <div className="image-preview-container">
              <img
                src={currentImage}
                alt="Item preview"
                className="image-preview"
              />
            </div>
          </div>
        </div>
        <div className="edit-form-group">
          <label>Opis:</label>
          <textarea
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="edit-form-group">
          <label>Kategorija:</label>
          <input
            type="text"
            value={currentCategory}
            onChange={(e) => setCurrentCategory(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="edit-quantity-form-group">
          <label>Količina:</label>
          <div className="quantity-wrapper" >
          <div className="substract-quantity-button-wrapper">
          <button onClick={() => handleQuantityChange(-10)}>-10</button>
          <button onClick={() => handleQuantityChange(-1)}>-1</button>
          </div>
          <input
            type="text"
            value={currentQuantity}
            onChange={(e) => setCurrentQuantity(e.target.value)}
            placeholder=""
            className="quantity-input"
          />
          <div className="addition-quantity-button-wrapper">
            <button onClick={() => handleQuantityChange(+1)}>+1</button>
            <button onClick={() => handleQuantityChange(+10)}>+10</button>
          </div>
          </div>
        </div>
        <div className="edit-form-group">
          <label>Cena:</label>
          <input
            type="text"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="edit-item-button-wrapper">
          <button className="close-edit-button" onClick={close}>
            Close
          </button>
          <button
            className="save-edit-button"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
