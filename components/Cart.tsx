import React from "react";
const Cart = ({ cartItem }: any) => {
  console.log(cartItem);
  return <div>{cartItem?.length === 0 && <div>No items</div>}</div>;
};

export default Cart;
