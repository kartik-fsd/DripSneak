import { useEffect, useState } from "react";
import "./Cart.css";
import { CartAmountSummary } from "./components/CartAmountSummary/CartAmountSummary";
import { CartListing } from "./components/CartListing/CartListing";
import { products } from "../backend/db/products";
import { useData } from "../contexts/DataProvider";
import empty from "/assets/empty.mp4";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { loading } = useData();
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart_data"));
    const data = products.filter((product) => local.includes(product._id));
    setItem(data);

    const totalAmount = data.reduce(
      (sum, item) => sum + (item.original_price - 2480),
      0
    );
    setTotal(totalAmount);
  }, [check]);

  return (
    !loading && (
      <>
        {item.length > 0 ? (
          <div>
            <h1 className="page-heading" style={{ marginTop: 100 }}>
              Cart
            </h1>
            {item.map((it) => (
              <div key={it.id} className="cart-container">
                <CartListing item={it} setCheck={setCheck} check={check} />
                <div>
                  <CartAmountSummary item={it} />
                </div>
              </div>
            ))}
            <div
              style={{
                fontWeight: 700,
                fontSize: "35px",
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "50vw" }}></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  width: "50vw",
                }}
              >
                <span className="total-container">Grand Total: </span>
                <span>₹ {total}</span>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video
              style={{
                objectFit: "cover",
                opacity: 0.5,
                width: 500,
              }}
              autoPlay
              loop
              muted
            >
              <source src={empty} type="video/mp4" />
            </video>
            <h3 style={{ textAlign: "center" }}>
              OOPS....! The Cart Is Empty{"  "}
              <span
                className="btn"
                onClick={() => {
                  scrollTo(0, 0);
                  navigate("/product-listing");
                }}
              >
                Continue shopping{" "}
              </span>
            </h3>
          </div>
        )}
      </>
    )
  );
};
