// import "./ProductDescription.css";
// import React, { useEffect, useState } from "react";
// import { BsFillStarFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { products } from "../../../backend/db/products";
// //import { useUserData } from "../../../../contexts/UserDataProvider";

// // export const ProductDescription = ({ selectedProduct }) => {

// export const ProductDescription = ({ item }) => {
//   // const { productId } = useParams();
//   // const [item, setItem] = useState({});

//   // useEffect(() => {
//   //   const data = products.find((id) => id._id == productId);
//   //   setItem(data);
//   // }, []);

//   // const {
//   //   addToCartHandler,
//   //   wishlistHandler,
//   //   isProductInCart,
//   //   isProductInWishlist,
//   //   cartLoading
//   // } = useUserData();

//   return (
//     // <div className="product-details-description">
//     //   {products
//     //     ?.find((res) => res._id === _id)
//     //     ?.map(
//     //       ({
//     //         _id,
//     //         img,
//     //         original_price,
//     //         discounted_price,
//     //         category_name,
//     //         is_stock,
//     //         rating,
//     //         reviews,
//     //         description,
//     //         trending,
//     //         size,
//     //         name,
//     //       }) => (
//     //         <>
//     //           <h1 className="product-name">{name}</h1>

//     //           <div className="ratings-reviews">
//     //             <span></span>
//     //             <span>{rating}</span> <BsFillStarFill color={"orange"} />
//     //             <span>
//     //               <span className="review">({reviews}) reviews </span>
//     //             </span>
//     //           </div>

//     //           <div className="product-price-container">
//     //             <span className="product-original-price">
//     //               ₹{original_price}
//     //             </span>
//     //             <span className="product-discount-price">
//     //               {" "}
//     //               ₹{discounted_price}
//     //             </span>
//     //           </div>

//     //           <p className="description-container">
//     //             <span>Description</span>: {description}
//     //           </p>

//     //           <span className="gender-container">
//     //             <span>Gender</span>: {category_name}'s
//     //           </span>
//     //           <p className="size-container">
//     //             <span>Size</span>: {size}
//     //           </p>

//     //           <div className="tags">
//     //             {/* {!selectedProduct?.is_stock && ( */}
//     //             <span className="out-of-stock">
//     //               {/* {selectedProduct?.is_stock ? "In Stock" : "Out of stock"} */}
//     //               In Stock
//     //             </span>
//     //             {/* )} */}
//     //             {/* {selectedProduct?.trending && ( */}
//     //             <span className="trending">
//     //               {/* {selectedProduct?.trending ? "Trending" : ""} */}
//     //               Trending
//     //             </span>
//     //             {/* )} */}
//     //           </div>

//     //           <div className="product-card-buttons-container">
//     //             <button
//     //               //disabled={cartLoading}
//     //               //onClick={() => addToCartHandler(selectedProduct)}
//     //               className="add-to-cart-btn"
//     //             >
//     //               {/* {!isProductInCart(selectedProduct) ? "Add to cart" : "Go to cart"} */}
//     //               <Link
//     //                 to="/cart"
//     //                 style={{ textDecoration: "none", color: "#ffff" }}
//     //               >
//     //                 {" "}
//     //                 Add to cart{" "}
//     //               </Link>
//     //             </button>

//     //             <button
//     //               //disabled={cartLoading}
//     //               //onClick={() => wishlistHandler(selectedProduct)}
//     //               className="add-to-wishlist-btn"
//     //             >
//     //               {/* {!isProductInWishlist(selectedProduct)
//     //         ? "Add to wishlist"
//     //         : "Remove from wishlist"} */}
//     //               Add to wishlist
//     //             </button>
//     //           </div>
//     //         </>
//     //       )
//     //     )}
//     // </div>
//     <div className="product-details-description">
//       <React.Fragment key={item._id}>
//         <h1 className="product-name">{item.name}</h1>

//         <div className="ratings-reviews">
//           <span></span>
//           <span>{item.rating}</span> <BsFillStarFill color={"orange"} />
//           <span>
//             <span className="review">({item.reviews}) reviews </span>
//           </span>
//         </div>

//         <div className="product-price-container">
//           <span className="product-original-price">₹{item.original_price}</span>
//           <span className="product-discount-price">
//             {" "}
//             ₹{item.discounted_price}
//           </span>
//         </div>

//         <p className="description-container">
//           <span>Description</span>: {item.description}
//         </p>

//         <span className="gender-container">
//           <span>Gender</span>: {item.category_name}'s
//         </span>
//         <p className="size-container">
//           <span>Size</span>: {item.size}
//         </p>

//         <div className="tags">
//           {!item.is_stock && (
//             <span className="out-of-stock">
//               {item.is_stock ? "In Stock" : "Out of stock"}
//               In Stock
//             </span>
//           )}
//           {item.trending && (
//             <span className="trending">
//               {!item.trending ? "Trending" : ""}
//               Trending
//             </span>
//           )}
//         </div>

//         <div className="product-card-buttons-container">
//           <button
//             // disabled={cartLoading}
//             // onClick={() => addToCartHandler(selectedProduct)}
//             className="add-to-cart-btn"
//           >
//             {/* {!isProductInCart(selectedProduct) ? "Add to cart" : "Go to cart"} */}
//             <Link
//               to={`/cart/${item._id}`}
//               style={{ textDecoration: "none", color: "#ffff" }}
//             >
//               {" "}
//               Add to cart{" "}
//             </Link>
//           </button>

//           <button
//             // disabled={cartLoading}
//             // onClick={() => wishlistHandler(selectedProduct)}
//             className="add-to-wishlist-btn"
//           >
//             {/* {!isProductInWishlist(selectedProduct) ? "Add to wishlist" : "Remove from wishlist"} */}
//             Add to wishlist
//           </button>
//         </div>
//       </React.Fragment>
//     </div>
//   );
// };

import "./ProductDescription.css";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useUserData } from "../../../contexts/UserDataProvider";

export const ProductDescription = ({ selectedProduct }) => {
  // const {
  //   addToCartHandler,
  //   wishlistHandler,
  //   isProductInCart,
  //   isProductInWishlist,
  //   cartLoading,
  // } = useUserData();

  return (
    <div className="product-details-description">
      <h1 className="product-name">{selectedProduct?.name}</h1>

      <div className="ratings-reviews">
        <span></span>
        <span>{selectedProduct?.rating}</span>{" "}
        <BsFillStarFill color={"orange"} />
        <span>
          <span className="review">({selectedProduct?.reviews}) reviews </span>
        </span>
      </div>

      <div className="product-price-container">
        <span className="product-original-price">
          ₹{selectedProduct?.original_price}{" "}
        </span>
        <span className="product-discount-price">
          {" "}
          ₹{selectedProduct?.discounted_price}
        </span>
      </div>

      <p className="description-container">
        <span>Description</span>: {selectedProduct?.description}
      </p>

      <span className="gender-container">
        <span>Gender</span>: {selectedProduct?.category_name}
      </span>
      <p className="size-container">
        <span>Size</span>: {selectedProduct?.size}
      </p>

      <div className="tags">
        {!selectedProduct?.is_stock && (
          <span className="out-of-stock">
            {selectedProduct?.is_stock ? "In Stock" : "Out of stock"}
          </span>
        )}
        {selectedProduct?.trending && (
          <span className="trending">
            {selectedProduct?.trending ? "Trending" : ""}
          </span>
        )}
      </div>
      <div className="product-card-buttons-container">
        <button
          //disabled={cartLoading}
          //onClick={() => addToCartHandler(selectedProduct)}
          className="add-to-cart-btn"
        >
          {/* {!isProductInCart(selectedProduct) ? "Add to cart" : "Go to cart"} */}
          Add to cart
        </button>
        <button
          // disabled={cartLoading}
          // onClick={() => wishlistHandler(selectedProduct)}
          className="add-to-wishlist-btn"
        >
          {/* {!isProductInWishlist(selectedProduct)
            ? "Add to wishlist"
            : "Remove from wishlist"} */}
          Add to wishlist
        </button>
      </div>
    </div>
  );
};
