import "./CartProductsSummary.css";

import React from "react";
//import { useUserData } from "../../../../contexts/UserDataProvider";
import img from "/assets/images/products-images/image-kids-3.png";
export const CartProductsSummary = () => {
  // const { userDataState } = useUserData();
  return (
    <div className="product-details-container">
      <h1>In Your Bag</h1>
      <div className="ordered-products-container">
        {/* {userDataState.cartProducts?.map(
          ({ id, img, name, qty, discounted_price }) => ( */}
        <div className="ordered-product-card">
          <img src={img} alt="Ascend TechFit" />
          <span>
            <span>Ascend TechFit - </span>
            <span>1</span>
          </span>
          <span> ₹ 2480</span>
        </div>
        {/* )
        )} */}
      </div>
    </div>
  );
};
