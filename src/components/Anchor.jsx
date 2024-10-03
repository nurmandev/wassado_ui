import React from "react";
import Icon from "./Icon";

export default function Anchor({
  text,
  href,
  icon,
  showArrow,
  onClick,
  className,
}) {
  return (
    <div
      className={"mt-2 w-fit group cursor-pointer " + className}
      onClick={onClick}
    >
      <a className="group text-gray-500 text-base" href={href}>
        {icon ? <Icon name={icon} className="pr-2" /> : ""}
        <span className="align-middle">{text}</span>{" "}
        {showArrow ? (
          <Icon
            name="right-arrow-alt"
            className="duration-100 group-hover:translate-x-1"
          />
        ) : (
          ""
        )}
      </a>
      <div className="duration-200 opacity-0 group-hover:opacity-100 w-full h-0.5 bg-gray-400"></div>
    </div>
  );
}
