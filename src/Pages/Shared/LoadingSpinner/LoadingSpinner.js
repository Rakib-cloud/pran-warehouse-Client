import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div
      className="w-100 d-flex justify-content-center mx-auto"
      style={{ height: "100vh", marginTop: "200px" }}
    >
      <Spinner
        style={{ width: "60px", height: "60px" }}
        animation="border"
        variant="danger"
      />
    </div>
  );
};

export default LoadingSpinner;