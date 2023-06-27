// import "./ProductImage.css";
// import Tilt from "react-parallax-tilt";

// import React from "react";
// import img from "/assets/images/products-images/image-kids-3.png";
// import ReactImageMagnify from "react-image-magnify";
// // export const ProductImage = ({ selectedProduct }) => {
// export const ProductImage = ({ selectedProduct }) => {
//   return (
//     <>
//       {/* <Tilt
//         tiltEnable={true}
//         scale={1.05}
//         transitionSpeed={1000}
//         className="product-details-image"
//       >
//         {" "}
//         <img src={selectedProduct.img} alt="drip" />
//       </Tilt> */}
//       <>
//         {" "}
//         <div
//           style={{
//             // padding: "12px",
//             display: "flex",
//             justifyContent: "center",
//             aspectRatio: "16/9",
//           }}
//         >
//           {/* <img src="/onion.jpg" alt="img" width="95%" height="px" /> */}
//           <div>
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: "Small Image",
//                   src: selectedProduct.img,
//                   // src: "/onion.jpg",
//                   width: 610,
//                   height: 600,
//                 },
//                 largeImage: {
//                   src: selectedProduct?.img,
//                   width: 1200,
//                   height: 900,
//                 },
//                 lensStyle: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
//                 enlargedImagePosition: "beside",
//                 isActivatedOnTouch: true,
//               }}
//               style={{
//                 zIndex: 99,
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//                 objectFit: "contain",
//               }}
//             />
//           </div>
//         </div>
//       </>
//     </>
//   );
// };

// import React from "react";
// import { useMediaQuery } from "react-responsive";
// import "./ProductImage.css";
// import Tilt from "react-parallax-tilt";
// import img from "/assets/images/products-images/image-kids-3.png";
// import ReactImageMagnify from "react-image-magnify";

// function ProductImage({ selectedProduct }) {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-width: 992px)",
//   });

//   return (
//     <div
//       style={{
//         // padding: "12px",
//         display: "flex",
//         justifyContent: "center",
//         aspectRatio: "16/9",
//       }}
//     >
//       {isDesktopOrLaptop ? (
//         <div>
//           <ReactImageMagnify
//             smallImage={{
//               alt: "Small Image",
//               src: {selectedProduct.img},
//               width: 610,
//               height: 600,
//             }}
//             largeImage={{
//               src: selectedProduct?.img,
//               width: 1200,
//               height: 900,
//             }}
//             lensStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
//             enlargedImagePosition="beside"
//             isActivatedOnTouch={true}
//             style={{
//               zIndex: 99,
//               maxWidth: "100%",
//               maxHeight: "100%",
//               objectFit: "contain",
//             }}
//           />
//         </div>
//       ) : (
//         <Tilt
//           tiltEnable={true}
//           scale={1.05}
//           transitionSpeed={1000}
//           className="product-details-image"
//         >
//           <img src={selectedProduct.img} alt="drip" />
//         </Tilt>
//       )}
//     </div>
//   );
// }

// export default ProductImage;
import "./ProductImage.css";
import Tilt from "react-parallax-tilt";

import React from "react";

export const ProductImage = ({ selectedProduct }) => {
  console.log(selectedProduct?.img, "jj");
  return (
    <Tilt
      tiltEnable={true}
      scale={1.05}
      transitionSpeed={1000}
      className="product-details-image"
    >
      {" "}
      <img src={selectedProduct?.img} alt="shoe" />
    </Tilt>
  );
};
//import ProductImage from "./components/ProductImage/ProductImage";
