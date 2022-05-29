import React, { useEffect, useState } from "react";
import { MdInventory } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import "./ItemDetail.css";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  //fetching a single item
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });

  const { _id, name, img, price, quantity, description, supplier } = item;

  //update quantity
  const updateQuantity = newQuantity => {
    
    fetch(`https://pran-dealer-inventory.herokuapp.com/inventory/${itemId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      })
        .then((response) => response.json())
  }

  //handle delivered update
  const handleDelivered = (id) => {
    let newQuantity;
    if (quantity > 0) {
      newQuantity = quantity - 1;
      updateQuantity(newQuantity);
    }
  };

  //updating product stock
  const updateStock = event => {
    event.preventDefault();
    const newQuantity = quantity + parseInt(event.target.stock.value);
    updateQuantity(newQuantity);
    event.target.stock.value = "";
  }

  if(!item._id) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto">
      <div className="row g-3 p-4">
        <div className="col-12 col-md-6 mx-auto">
          <img
            src={img}
            className="w-75 border d-block mx-auto"
            alt="product"
          />
        </div>
        <div className="col-12 col-md-6 border p-2">
          <h1 className="text-center">{name}</h1>
          <p className="text-muted text-center p-0 m-0">
            <small>Product Id: {_id}</small>
          </p>
          <div className="border d-flex justify-content-between p-2 pb-0 my-3">
            <h4>
              Price:{" "}
              <span style={{ color: "tomato" }} className="fw-bold">
                ${price}
              </span>
            </h4>
            <h4>
              Quantity:{" "}
              <span style={{ color: "tomato" }} className="fw-bold">
                {quantity}
              </span>
            </h4>
          </div>
          <h6>Supplier Name: {supplier}</h6>
          <p>Description: {description}</p>

          <div className=" border p-2 mt-3 d-flex justify-content-between">
            <div>
              <button
                onClick={() => handleDelivered(_id)}
                style={{ backgroundColor: "tomato", color: "white" }}
                className="btn rounded border d-block mx-auto"
              >
                {quantity > 0 ? "Delivered" : "Sold Out"}
              </button>
            </div>
            <form onSubmit={updateStock}>
              <input
                style={{ width: "100px" }}
                type="number"
                name="stock"
                id="stock"
              />
              <input
                style={{
                  width: "100px",
                  backgroundColor: "seagreen",
                  color: "white",
                }}
                className="p-1 border rounded ms-2"
                type="submit"
                value="Restock"
              />
            </form>
          </div>
          <div className="">
            <button onClick={()=> navigate("/manageInventory")}
              style={{ backgroundColor: "goldenrod", color: "white" }}
              className="btn rounded border d-block mx-auto mt-4 py-3"
            >
              Manage Inventories <MdInventory />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
