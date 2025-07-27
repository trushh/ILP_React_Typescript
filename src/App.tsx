import { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import type { Item } from "./type";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    console.log("Component mounted or items updated", items);
  }, [items]);

  return (
    <div className="App">
      <h1>Inventory Tracker</h1>
      <AddItemForm onAdd={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
