import { v4 as uuid } from "uuid";
import kid from "/assets/images/category-images/hero-image-kids-1.png";
import men from "/assets/images/category-images/hero-image-men-1.png";
import women from "/assets/images/category-images/hero-image-women-1.png";
export const categories = [
  {
    _id: "a",
    categoryName: "Men",
    img: men,
  },

  {
    _id: "b",
    categoryName: "Women",
    img: women,
  },

  {
    _id: "c",
    categoryName: "Kid",
    img: kid,
  },
];
