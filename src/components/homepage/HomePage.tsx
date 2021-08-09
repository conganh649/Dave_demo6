import React, { FC } from "react";
import { Link } from "react-router-dom";

import ImageSliders from "./ImageSliders";
import Header from "../header_footer/Header";

const HomePage: FC = () => {
  return (
    <div style={{ height: "1500px" }}>
      <div style={{ position: "relative" }}>
        <Header />
        <ImageSliders />
        <div className="name">
          <Link to={{ pathname: `/table` }} style={{ textDecoration: "none" }}>
            <div className="wrapper">Flower shop</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
