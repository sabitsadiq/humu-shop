"use client";
import { customButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  handleClick,
  containerStyle,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      className={`${containerStyle}`}
      type={"button"}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
