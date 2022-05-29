import { useEffect, useState } from "react";

const useAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/inventory')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])


  return [items, setItems];
}

export default useAllItems;