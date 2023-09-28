import { useGlobalContext } from "@/app/context";
import React, { useContext } from "react";
import Card from "./Card";
import { allCategoriesProps } from "@/types";
import Image from "next/image";
const Cart = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  return (
    <div>
      <h1>card item</h1>
      {cart.length === 0 && <div>No items</div>}
      <div>
        {cart.map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Cart;
