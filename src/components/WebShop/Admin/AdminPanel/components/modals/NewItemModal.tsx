import { useState } from "react";
import "./NewItemModal.css";
import { Item } from "../../../../ShopComponents/models/item";

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

    const handleSave = () => {
        const newItem: Item = {
            image,
            name,
            description,
            quantity_in_stock,
            price,
        };
        confirm(newItem);
    };

    return (
        <div className="new-item-modal-container">
            <div className="new-item-modal-content">
                <div className="new-item-modal-heading">Novi proizvod</div>
                <div className="new-form-group">
                    <label>Slika:</label>
                    <input
                    className="image-input"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {image && <img src={image} alt="Selected" className="preview-image" />}
                </div>
                <div className="new-form-group">
                <label>Ime</label>
                <input
                    type="text"
                    placeholder="Ime"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="new-form-group">
                <label>Opis</label>
                <textarea
                    placeholder="Opis"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </div>
                <div className="new-form-group">
                <label>Kolicina</label>
                <input
                    type="number"
                    placeholder="Količna"
                    value={quantity_in_stock}
                    onChange={(e) => setQuantity_in_stock(e.target.value)}
                />
                </div>
                <div className="new-form-group">
                <label>Cena</label>
                <input
                    type="number"
                    placeholder="Cena"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                </div>
                <div className="new-item-button-wrapper">
                <button onClick={handleSave}>Sačuvaj</button>
                <button onClick={close}>Odustani</button>
                </div>
            </div>
        </div>
    );
}
