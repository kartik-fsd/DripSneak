import "./CartProductsSummary.css";

import React from "react";
export const CartProductsSummary = () => {
  // const { userDataState } = useUserData();
  return (
    <div className="product-details-container">
      <h1>In Your Bag</h1>
      <div className="ordered-products-container">
        {/* {userDataState.cartProducts?.map(
          ({ id, img, name, qty, discounted_price }) => ( */}
        <div className="ordered-product-card">
          <img
            src="https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-kids-3_qnf6pz.png"
            alt="Ascend TechFit"
          />
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
