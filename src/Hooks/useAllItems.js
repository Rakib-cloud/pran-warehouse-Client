import { useEffect, useState } from "react";

const useAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://evening-escarpment-01408.herokuapp.com/inventory')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])


  return [items, setItems];
}

export default useAllItems;