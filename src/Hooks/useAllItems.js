import { useEffect, useState } from "react";

const useAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    fetch('https://pran-dealer-inventory.herokuapp.com/inventory')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])


  return [items, setItems];
}

export default useAllItems;