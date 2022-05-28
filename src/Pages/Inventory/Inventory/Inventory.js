import React from "react";
import useAllItems from "../../../Hooks/useAllItems";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Item from "../Item/Item";

const Inventory = () => {
  const [items] = useAllItems();

  if(items.length === 0){
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h2
        className="mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5"
        style={{ color: "tomato" }}
      >
        INVENTORY
      </h2>
      <div id="items-container" className="container row g-3 mx-auto">
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
