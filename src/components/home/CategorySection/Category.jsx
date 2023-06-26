// import React from "react";
// import { Link } from "react-router-dom";
// import "./CategoriesSection.css";
// import img from "/assets/images/category-images/hero-image-kids-1.png";
// import img2 from "/assets/images/category-images/hero-image-men-1.png";
// import img3 from "/assets/images/category-images/hero-image-women-1.png";
// import { useNavigate } from "react-router-dom";
// export const CategoriesSection = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1 className="categories-heading">Shop By Categories</h1>
//       <div className="categories-container">
//         <div className="category-card">
//           <h3
//             onClick={() => {
//               scrollTo(0, 0);
//               navigate("/product-listing/men");
//             }}
//           >
//             MEN's
//           </h3>
//           <div className="img-cont">
//             <img src={img2} alt="Kid" />
//           </div>
//         </div>
//         <div className="category-card">
//           <h3
//             onClick={() => {
//               scrollTo(0, 0);
//               navigate("/product-listing/women");
//             }}
//           >
//             WOMEN's
//           </h3>
//           <div className="img-cont">
//             <img src={img3} alt="Kid" />
//           </div>
//         </div>
//         <div className="category-card">
//           <h3
//             onClick={() => {
//               scrollTo(0, 0);
//               navigate("/product-listing/kid");
//             }}
//           >
//             KID's
//           </h3>
//           <div className="img-cont">
//             <img src={img} alt="Kid" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { useData } from "../../../contexts/DataProvider";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";

export const CategoriesSection = () => {
  const { state, dispatch } = useData();
  return (
    <div>
      <h1 className="categories-heading">Shop By Categories</h1>
      <div className="categories-container">
        {state.allCategories.map(({ _id, categoryName, img }) => (
          <Link
            onClick={() => {
              scrollTo(0, 0);
              dispatch({
                type: "ADD_CATEGORIES_FROM_HOME",
                payload: categoryName,
              });
            }}
            to="/product-listing"
            className="category-card"
            key={_id}
          >
            <h3>{categoryName}'s</h3>
            <div className="img-cont">
              <img src={img} alt={categoryName} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
