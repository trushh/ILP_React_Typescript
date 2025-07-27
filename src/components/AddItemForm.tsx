import { useState } from "react";
import { Item } from "../types";

interface AddItemFormProps {
  onAdd: (item: Item) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    const newItem: Item = {
      id: Date.now(),
      name,
      quantity,
    };
    onAdd(newItem);
    setName("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
