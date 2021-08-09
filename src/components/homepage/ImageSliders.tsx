import React, { FC } from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const ImageSliders: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="slider_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="slider_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          {" "}
          <div
            className="slider_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          {" "}
          <div
            className="slider_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};
export default ImageSliders;
