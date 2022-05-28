import React from "react";
import { Carousel } from "react-bootstrap";
import HomeItems from "../HomeItems/HomeItems";
import NearbyDealers from "../NearbyDealers/NearbyDealers";
import TopDealers from "../TopDealers/TopDealers";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="container"
      id="home"
    >
      <div className="mx-auto d-flex flex-column flex-lg-row gap-4 justify-content-between">
        <div className="container-fluid d-flex flex-column justify-content-center my-3 mx-3 mx-lg-0">
          <h1 className="fs-1 fw-bold">
            Tired of{" "}
            <span style={{ color: "tomato" }}>managing your Inventory</span> in
            old-fashioned way?
          </h1>
          <p>
            We present to you the coolest inventory management web app, where
            you can manage your inventory products. You can add and delete
            products to your inventory, also can update the stocks of an item
            with ease. Stocks will be calculated automatically based on your
            delivery.{" "}
          </p>
        </div>
        <div
          className="d-block w-100"
          style={{ height: "600px", width: "600px" }}
        >
          <Carousel variant="dark" interval={2000}>
            <Carousel.Item>
              <img
                className="img-fluid"
                height={600}
                width={600}
                src={require("../../../Assets/images/chocolatebun.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid"
                height={600}
                width={600}
                src={require("../../../Assets/images/frooto.png")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid"
                height={600}
                width={600}
                src={require("../../../Assets/images/potatocrackers.png")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="pt-5 pb-5">
        <HomeItems />
      </div>
      <div className="pt-5">
        <TopDealers />
      </div>
      <div className="py-5">
        <NearbyDealers />
      </div>
    </div>
  );
};

export default Home;
