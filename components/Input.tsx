import React from "react";

const Input = ({ handleChange, value, title, name, category }: any) => {
  return (
    <>
      <div
        className="h-fit ease-linear duration-150
        flex items-center gap-2"
      >
        <input
          type="checkbox"
          onChange={handleChange}
          title={title}
          value={value}
          name={name}
        />
        <p className="font-medium text-sm leading-6 text-[#1B0C2E]">
          {category}
        </p>
      </div>
    </>
  );
};

export default Input;
