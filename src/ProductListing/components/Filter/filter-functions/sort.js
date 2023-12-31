// export const getSortedProducts = (products, sort) =>
//   sort
//     ? products.sort((a, b) =>
//         sort === "lowToHigh"
//           ? a.discounted_price - b.discounted_price
//           : b.discounted_price - a.discounted_price
//       )
//     : products;
export const getSortedProducts = (products, sort) =>
  sort
    ? products.sort((a, b) =>
        sort === "lowToHigh"
          ? a.discounted_price - b.discounted_price
          : b.discounted_price - a.discounted_price
      )
    : products.sort((a, b) => a.name.localeCompare(b.name));
