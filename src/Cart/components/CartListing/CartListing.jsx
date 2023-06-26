import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./CartListing.css";

// import { useUserData } from "../../../../contexts/UserDataProvider";
import img from "/assets/images/products-images/image-kids-3.png";

export const CartListing = ({ item }) => {
  // const {
  //   userDataState,
  //   isProductInWishlist,
  //   removeFromCartHandler,
  //   wishlistHandler,
  //   cartCountHandler,
  //   cartLoading,
  // } = useUserData();

  return (
    <div className="cart-products-container">
      {/* {userDataState.cartProducts.map((product) => ( */}
      {/* <div className="cart-product-card" key={product.id}> */}
      <div className="cart-product-card">
        <div>
          <img className="cart-img" alt="drip" src={item.img} />
        </div>
        <div className="product-description">
          <h3>{item.name}</h3>
          <p>$ {item.discounted_price}</p>
          <p>Size: {item.size}</p>
        </div>
        <div className="button-section">
          <div className="count-btn-container">
            <button
              //disabled={cartLoading}
              className="counter-btn"
              //onClick={() => cartCountHandler(product, "decrement")}
            >
              -
            </button>
            <span>1</span>
            <button
              //disabled={cartLoading}
              className="counter-btn"
              //onClick={() => cartCountHandler(product, "increment")}
            >
              +
            </button>
          </div>
          <div className="secondary-btn-section">
            <MdDelete
              size={25}
              //onClick={() => removeFromCartHandler(product)}
            />

            {/* {!isProductInWishlist(product) ? ( */}
            <AiOutlineHeart
              size={25}
              //onClick={() => wishlistHandler(product)}
            />
            {/* ) : (
                <AiFillHeart
                  size={25}
                  onClick={() => wishlistHandler(product)}
                />
              )} */}
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};
