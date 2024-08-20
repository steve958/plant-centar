import { useState } from "react";
import "./DeleteItemModal.css";

interface DeleteItemModalProps {
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteItemModal(props: DeleteItemModalProps) {
  const { itemName, onConfirm, onCancel } = props;
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    if (!isConfirming) {
      setIsConfirming(true); // Disable the button
      onConfirm();
    }
  };

  return (
    <div className="delete-modal-container">
      <div className="delete-modal-content">
        <div className="delete-modal-header">Potvrda brisanja</div>
        <div className="delete-modal-body">
          <span className="delete-span">
            Da li ste sigurni da želite da obrišete <strong>{itemName}</strong>?
          </span>
        </div>
        <div className="delete-modal-footer">
          <button
            onClick={handleConfirm}
            disabled={isConfirming}
          >
            Da
          </button>
          <button onClick={onCancel}>Odustani</button>
        </div>
      </div>
    </div>
  );
}
