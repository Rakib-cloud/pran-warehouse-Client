import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const navigate = useNavigate();

  const navigateToItemDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="col col-md-6 col-lg-4 d-flex justify-content-center text-center">
      <Card
        style={{
          width: "20rem",
          borderWidth: "2px",
          boxShadow: "5px 5px 8px -3px #ccc",
        }}
      >
        <Card.Title className="fs-4 fw-bold my-1 mt-3">{item.name}</Card.Title>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Text>
            <div className="d-flex justify-content-between pt-2 border px-3 my-3">
              <span className="d-block fw-bold">
                Price: <span style={{ color: "tomato" }}>{item.price}</span>
              </span>
              <h5 className="fw-bold">
                Quantity:{" "}
                <span style={{ color: "tomato" }}>{item.quantity}</span>
              </h5>
            </div>
            <span className="d-block text-start mx-1">
              {item.description.length > 100
                ? item.description.slice(0, 100) + "..."
                : item.description}
            </span>
          </Card.Text>
          <button
            onClick={() => navigateToItemDetail(item._id)}
            style={{ backgroundColor: "tomato", color: "white" }}
            className="border rounded px-5 py-2"
          >
            Stock Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
