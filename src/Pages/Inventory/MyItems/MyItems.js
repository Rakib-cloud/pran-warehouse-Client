import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [userItems, setUserItems] = useState([]);

  //getting users added items only
  useEffect(() => {
    const getUserItems = async () => {
      const url = `https://pran-dealer-inventory.herokuapp.com/myItems?email=${user?.email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setUserItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error("Authorization error occurred. \nPlease Login again!", {
            toastId: "error1",
            bodyStyle: { textAlign: "center" },
          });
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getUserItems();
  }, [user, navigate]);

  //setting react-bootstrap modal for delete confirmation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteItemFromDB = (id) => {
    fetch(`https://pran-dealer-inventory.herokuapp.com/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = userItems.filter((item) => item._id !== id);
        setUserItems(remaining);
      });
  };

  const handleEdit = (id) => {
    alert("working on edit...");
  };

  const gotoHome = () => navigate("/");

  if (!user) {
    gotoHome();
  }

  if(userItems.length === 0){
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2
        className="mt-5 text-center fs-2 fw-bold text-decoration-underline mb-5"
        style={{ color: "tomato" }}
      >
        My Items
      </h2>
      <div>
        {userItems.map((item) => (
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
                Are you sure you want to{" "}
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
    </div>
  );
};

export default MyItems;
