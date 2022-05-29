import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAllItems from "../../../Hooks/useAllItems";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import "./ManageItem.css";

const ManageItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useAllItems();
  const navigate = useNavigate();

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteItemFromDB = (id) => {
    fetch(`https://pran-dealer-inventory.herokuapp.com/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
      });
  };

  const handleEdit = (id) => {
    alert("working on edit...");
  };

  const gotoLogin = () => navigate("/login");

  if (!user) {
    gotoLogin();
  }

  if(items.length === 0){
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto">
      <h2
        className="mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5"
        style={{ color: "tomato" }}
      >
        Manage Inventory
      </h2>
      <div className="">
        <button
          onClick={() => navigate("/addItem")}
          style={{ backgroundColor: "Gainsboro", color: "black" }}
          className="btn rounded border d-block mx-auto my-4"
        >
          Add New Item <FaPlusCircle />{" "}
        </button>
      </div>
      {items.map((item) => (
        <>
          <div className="border d-flex justify-content-between px-2 w-75 mx-auto rounded mb-1">
            <div key={item._id} className="d-flex gap-3">
              <img src={item.img} width="100px" alt="pic" />
              <div>
                <h6>{item.name}</h6>
                <span className="d-block">Price: {item.price}</span>
                <span className="d-block">Quantity: {item.quantity}</span>
                <span className="d-block">
                  Supplier: {item?.supplier?.split("@")[0]}
                </span>
              </div>
            </div>
            <div className="my-auto d-flex gap-2">
              <button
                onClick={() => handleEdit(item._id)}
                style={{ fontSize: "24px", color: "seagreen" }}
                className="border rounded"
              >
                <FaEdit />
              </button>
              <button
                onClick={handleShow}
                style={{ fontSize: "24px", color: "tomato" }}
                className="border rounded"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
          <Modal
            show={show}
            onHide={() => {
              handleClose();
            }}
            backdrop={false}
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-danger">
                Delete Confirmation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure to delete{" "}
              <strong className="text-danger">DELETE</strong> this item?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose();
                }}
              >
                No
              </Button>
              <Button
                onClick={() => {
                  handleClose();
                  deleteItemFromDB(item._id);
                }}
                variant="danger"
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ))}
    </div>
  );
};

export default ManageItem;
