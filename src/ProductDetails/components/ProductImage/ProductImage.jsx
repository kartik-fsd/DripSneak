import React from "react";

import "./ProductImage.css";
import Tilt from "react-parallax-tilt";

//import ReactImageMagnify from "react-image-magnify";

export const ProductImage = ({ selectedProduct }) => {
  return (
    <div
      style={{
        // padding: "12px",
        display: "flex",
        justifyContent: "center",
        aspectRatio: "16/9",
      }}
    >
      <Tilt
        tiltEnable={true}
        scale={1.05}
        transitionSpeed={1000}
        className="product-details-image"
      >
        <img src={selectedProduct?.img} alt="drip" />
      </Tilt>
    </div>
  );
};
