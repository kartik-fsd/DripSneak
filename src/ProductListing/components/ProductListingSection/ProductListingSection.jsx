// import "./ProductListingSection.css";
// import Tilt from "react-parallax-tilt";
// import React from "react";
// import { useParams } from "react-router-dom";
// // import { useData } from "../../../../contexts/DataProvider";
// import { Link } from "react-router-dom";
// // import { getCategoryWiseProducts } from "../../../../helpers/filter-functions/category";
// // import { getRatedProducts } from "../../../../helpers/filter-functions/ratings";
// // import { getPricedProducts } from "../../../../helpers/filter-functions/price";
// // import { getSortedProducts } from "../../../../helpers/filter-functions/sort";
// // import { getSearchedProducts } from "../../../../helpers/searchedProducts";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiTwotoneHeart } from "react-icons/ai";
// // import { useUserData } from "../../../../contexts/UserDataProvider";
// import img from "/assets/images/products-images/image-kids-3.png";
// import { BsFillStarFill } from "react-icons/bs";
// import { products } from "../../../backend/db/products";

// export const ProductListingSection = ({ item }) => {
//   // const { type } = useParams();

//   // const { state } = useData();
//   // const {
//   //   isProductInCart,
//   //   isProductInWishlist,
//   //   wishlistHandler,
//   //   addToCartHandler,
//   //   cartLoading,
//   // } = useUserData();

//   // const {
//   //   allProductsFromApi,
//   //   inputSearch,
//   //   filters: { rating, categories, price, sort },
//   // } = state;

//   // const searchedProducts = getSearchedProducts(allProductsFromApi, inputSearch);

//   // const ratedProducts = getRatedProducts(searchedProducts, rating);

//   // const categoryProducts = getCategoryWiseProducts(ratedProducts, categories);

//   // const pricedProducts = getPricedProducts(categoryProducts, price);

//   // const sortedProducts = getSortedProducts(pricedProducts, sort);

//   // {
//   //   _id: uuid(),
//   //   name: "Ascend TechFit",
//   //   original_price: 199,
//   //   discounted_price: 79,
//   //   category_name: "kid",
//   //   is_stock: true,
//   //   rating: 2.7,
//   //   reviews: 19,
//   //   description:
//   //     "Combining cutting-edge technology with urban style, these running shoes feature advanced cushioning, breathable mesh, and a sleek, streamlined design.",
//   //   trending: false,
//   //   size: 4,
//   //   img: "/assets/images/products-images/image-kids-3.png",
//   // },

//   return (
//     <div className="product-card-container">
//       {/* {products
//         .filter((res) => {
//           return type == "all" ? res : res.category_name == type;
//         }) */}
//       {item.map(
//         ({
//           _id,
//           img,
//           original_price,
//           discounted_price,
//           category_name,
//           is_stock,
//           rating,
//           reviews,
//           description,
//           trending,
//           size,
//           name,
//         }) => (
//           <Tilt
//             key={_id}
//             tiltMaxAngleX={5}
//             tiltMaxAngleY={5}
//             glareEnable={false}
//             transitionSpeed={2000}
//             scale={1.02}
//           >
//             <div className="product-card" key={_id}>
//               <Link to={`/product-details/${_id}`}>
//                 <div className="product-card-image">
//                   <Tilt
//                     transitionSpeed={2000}
//                     tiltMaxAngleX={15}
//                     tiltMaxAngleY={15}
//                     scale={1.18}
//                   >
//                     <img src={img} />
//                   </Tilt>
//                 </div>
//               </Link>

//               <div className="product-card-details">
//                 <h3>{name}</h3>
//                 <p className="ratings">
//                   {rating}
//                   <BsFillStarFill color="orange" /> ({reviews} reviews){" "}
//                 </p>
//                 <div className="price-container">
//                   <p className="original-price">₹{original_price}</p>
//                   <p className="discount-price">₹{discounted_price}</p>
//                 </div>

//                 <p>Gender: {category_name}</p>
//                 <div className="info">
//                   {!is_stock && <p className="out-of-stock">Out of stock</p>}
//                   {!trending && <p className="trending">Trending</p>}
//                 </div>
//               </div>

//               {/* <div className="product-card-buttons">
//                 <button
//                   //disabled={cartLoading}
//                   onClick={() => addToCartHandler(product)}
//                   className="cart-btn"
//                 >
//                   Add To Cart
//                 </button>
//                 <button
//                   onClick={() => wishlistHandler(product)}
//                   className="wishlist-btn"
//                 >
//                   <AiTwotoneHeart size={30} />
//                 </button>
//               </div> */}
//               <div className="product-card-buttons">
//                 <button
//                   //disabled={cartLoading}
//                   // onClick={() => addToCartHandler(product)}
//                   className="cart-btn"
//                 >
//                   {/* {!isProductInCart(product) ? "Add To Cart" : "Go to Cart"} */}
//                   <Link
//                     to="/cart"
//                     style={{ textDecoration: "none", color: "#ffff" }}
//                   >
//                     {" "}
//                     Add to cart{" "}
//                   </Link>
//                 </button>
//                 <button
//                   // onClick={() => wishlistHandler(product)}
//                   className="wishlist-btn"
//                 >
//                   {/* {!isProductInWishlist(product) ? ( */}
//                   <AiOutlineHeart size={30} />
//                   {/* ) : ( */}
//                   <AiTwotoneHeart size={30} />
//                   {/* )} */}
//                 </button>
//               </div>
//             </div>
//           </Tilt>
//         )
//       )}
//     </div>
//   );
// };

import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import React, { useEffect, useState } from "react";

import { useData } from "../../../contexts/DataProvider";
import { Link, useNavigate } from "react-router-dom";
import { getCategoryWiseProducts } from "../Filter/filter-functions/category";
import { getRatedProducts } from "../Filter/filter-functions/ratings";
import { getPricedProducts } from "../Filter/filter-functions/price";
import { getSortedProducts } from "../Filter/filter-functions/sort";
import { getSearchedProducts } from "../Filter/filter-functions/searchedProducts";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { useUserData } from "../../../contexts/UserDataProvider";
import { BsFillStarFill } from "react-icons/bs";

export const ProductListingSection = () => {
  const { state } = useData();
  // const {
  //   isProductInCart,
  //   isProductInWishlist,
  //   wishlistHandler,
  //   addToCartHandler,
  //   cartLoading,
  // } = useUserData();

  const {
    allProductsFromApi,
    inputSearch,
    filters: { rating, categories, price, sort },
  } = state;

  const searchedProducts = getSearchedProducts(allProductsFromApi, inputSearch);

  const ratedProducts = getRatedProducts(searchedProducts, rating);

  const categoryProducts = getCategoryWiseProducts(ratedProducts, categories);

  const pricedProducts = getPricedProducts(categoryProducts, price);

  const sortedProducts = getSortedProducts(pricedProducts, sort);
  const navigate = useNavigate();

  const [local, setLocal] = useState([])
  const [wishData, setWishData] = useState([])

  useEffect(() => {
    const dataGet = JSON.parse(localStorage.getItem("cart_data")) 
    setLocal(dataGet)
    const dataWish = JSON.parse(localStorage.getItem("wishlist")) 
    setWishData(dataWish)
  }, [])
  

  const handleAddCart = (pro) => {
    const dataGet = JSON.parse(localStorage.getItem("cart_data")) ?? []
    const dataExists = [...dataGet,pro]
    const unique = new Set(dataExists)
    const spreadData = [...unique]
    setLocal(spreadData)
    
    localStorage.setItem("cart_data",JSON.stringify(spreadData))
  }

  const handleAddWishlist = (pro) => {
    const dataGet = JSON.parse(localStorage.getItem("wishlist")) ?? []
    const dataExists = [...dataGet,pro]
    const unique = new Set(dataExists)
    const spreadData = [...unique]
    setWishData(spreadData)
    
    localStorage.setItem("wishlist",JSON.stringify(spreadData))
  }



  return (
    <div className="product-card-container">
      {!sortedProducts.length ? (
        <h2 className="no-products-found">
          Sorry, there are no matching products!
        </h2>
      ) : (
        sortedProducts.map((product) => {
          const {
            _id,
            id,
            name,
            original_price,
            discounted_price,
            category_name,
            is_stock,
            rating,
            reviews,
            trending,
            img,
          } = product;

          return (
            <Tilt
              key={product._id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={false}
              transitionSpeed={2000}
              scale={1.02}
            >
              <div className="product-card" key={_id}>
                <Link to={`/product-details/${id}`}>
                  <div className="product-card-image">
                    <Tilt
                      transitionSpeed={2000}
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      scale={1.18}
                    >
                      <img src={img} />
                    </Tilt>
                  </div>
                </Link>

                <div className="product-card-details">
                  <h3>{name}</h3>
                  <p className="ratings">
                    {rating}
                    <BsFillStarFill color="orange" /> ({reviews} reviews){" "}
                  </p>
                  <div className="price-container">
                    <p className="original-price">₹{original_price}</p>
                    <p className="discount-price">₹{discounted_price}</p>
                  </div>

                  <p>Gender: {category_name}</p>
                  <div className="info">
                    {!is_stock && <p className="out-of-stock">Out of stock</p>}
                    {trending && <p className="trending">Trending</p>}
                  </div>
                </div>

                <div className="product-card-buttons">
                  {local.includes(_id) ? <button
                    onClick={() => {
                      navigate(`/cart/list`);
                    }}
                    className="cart-btn"
                  >
                    {/* {!isProductInCart(product) ? "Add To Cart" : "Go to Cart"} */}
                    Go To Cart
                  </button>:<button
                    // onClick={() => {
                    //   navigate(`/cart/${product?._id}`);
                    // }}
                    onClick={()=>handleAddCart(_id)} 
                    className="cart-btn"
                  >
                    {/* {!isProductInCart(product) ? "Add To Cart" : "Go to Cart"} */}
                    Add To Cart
                  </button>}
                  <button
                    //onClick={() => wishlistHandler(product)}
                    className="wishlist-btn"
                  >
                    {/* {!isProductInWishlist(product) ? (
                      <AiOutlineHeart size={30} />
                    ) : (
                      <AiTwotoneHeart size={30} />
                    )} */}
                    {wishData.includes(_id) ? <AiTwotoneHeart size={30} />:
                    <AiOutlineHeart size={30} onClick={()=>handleAddWishlist(_id)}/>}
                  </button>
                </div>
              </div>
            </Tilt>
          );
        })
      )}
    </div>
  );
};
