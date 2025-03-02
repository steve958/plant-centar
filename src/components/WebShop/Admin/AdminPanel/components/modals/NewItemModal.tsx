import { useState } from "react";
import "./NewItemModal.css";
import { Item } from "../../../../ShopComponents/models/item";
import { toast } from "react-toastify";

interface NewItemProps {
  close: () => void;
  confirm(item: Item): void;
}

export default function NewItemModal(props: NewItemProps) {
  const { close, confirm } = props;

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity_in_stock, setQuantity_in_stock] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (isSaving) return;

    setIsSaving(true);
    const newItem: Item = {
      image,
      name,
      description,
      quantity_in_stock,
      price,
      category,
    };

    try {
      await confirm(newItem);
      toast.success("Proizvod je uspešno sačuvan", { autoClose: 1500 });
      close(); 
    } catch (error) {
      console.error("Error saving item:", error);
      toast.error("Došlo je do greške pri čuvanju", { autoClose: 1500 });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="new-item-modal-container">
      <div className="new-item-modal-content">
        <div className="new-item-modal-heading">Novi proizvod</div>
        <div className="new-form-group">
          <label>Slika:</label>
          <div className="image-input-container">
            <input
              className="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {image && (
              <img src={image} alt="Selected" className="preview-image" />
            )}
          </div>
        </div>
        <div className="new-form-group">
          <label>Naziv:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="new-form-group">
          <label>Opis:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="new-form-group">
          <label>Količina:</label>
          <input
            type="text"
            value={quantity_in_stock}
            onChange={(e) => setQuantity_in_stock(e.target.value)}
          />
        </div>
        <div className="new-form-group">
          <label>Kategorija:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="new-form-group">
          <label>Cena:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="new-item-button-wrapper">
          <button className="close-button" onClick={close}>
            Odustani
          </button>
          <button
            className="save-button"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Sačuvaj"}
          </button>
        </div>
      </div>
    </div>
  );
}
