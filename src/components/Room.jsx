import React from "react";

export default function Room({ name, description, imageURL, price, currency }) {
  return (
    <div className="rounded-xl border md:hover:shadow-xl duration-300 cursor-pointer">
      <img
        className="rounded-t-xl w-full h-32 object-cover"
        src={imageURL}
        alt={"Image of a " + name}
      />
      <p className="px-4 pt-2 font-bold">{name}</p>
      <p className="px-4 text-gray-500 text-sm">{description}</p>
      <p className="px-4 pb-2 text-hotel">
        <span className="font-bold">
          {currency ? currency : "$"}
          {price}
        </span>
        <span className="opacity-60">/night</span>
      </p>
    </div>
  );
}
