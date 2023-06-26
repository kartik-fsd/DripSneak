import { useEffect, useState } from "react";
import "./Cart.css";

// import { CartListing } from "./components/CartListing/CartListing";
// import { Coupons } from "./components/Coupons/Coupons";
// import { CartAmountSummary } from "./components/CartAmountSummary/CartAmountSummary";
//import { useUserData } from "../../contexts/UserDataProvider";
// import { useNavigate } from "react-router-dom";
import { CartAmountSummary } from "./components/CartAmountSummary/CartAmountSummary";
import { CartListing } from "./components/CartListing/CartListing";
import { useParams } from "react-router-dom";
import { products } from "../backend/db/products";
// import { useData } from "../../contexts/DataProvider";

export const Cart = () => {
  // const [couponSelected, setCouponSelected] = useState([]);
  // const { userDataState } = useUserData();
  // const navigate = useNavigate();
  // const { loading } = useData();productId
  const { productId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const data = products.find((id) => id._id == productId);
    setItem(data);
  }, []);

  return (
    // !loading && (
    // (userDataState.cartProducts.length ? (
    <div>
      <h1 className="page-heading">Cart</h1>
      <div className="cart-container">
        <CartListing item={item} />
        <div>
          {/* <Coupons
              couponSelected={couponSelected}
              setCouponSelected={setCouponSelected}
            /> */}
          {/* <CartAmountSummary couponSelected={couponSelected} /> */}
          <CartAmountSummary item={item} />
        </div>
      </div>
    </div>
    //)
    // ) : (
    // <div className="no-items-container">
    //   <h2 className="page-heading">Cart is Empty!</h2>
    //   <button
    //     className="explore-btn"
    //     onClick={() => navigate("/product-listing")}
    //   >
    //     Explore
    //   </button>
    // </div>
    // ))
  );
};
