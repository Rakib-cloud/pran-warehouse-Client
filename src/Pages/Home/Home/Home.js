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
            Are you {" "}
            <span style={{ color: "tomato" }}> Manage Inventory </span> with the best way?
          </h1>
          <p>
          We offer to you the greatest stock management web software, which allows you to keep track of your goods. You can add and remove products from your inventory, as well as update an item's stock levels.

without difficulties Stocks will be estimated dynamically depending on the information you provide.

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
