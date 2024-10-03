import React from "react";

export default function Icon({ name, type, className, onClick }) {
  return (
    <i
      className={
        "align-middle bx bx" +
        (type === "solid" ? "s" : type === "logo" ? "l" : "") +
        "-" +
        name +
        " " +
        className
      }
      onClick={onClick}
    ></i>
  );
}
