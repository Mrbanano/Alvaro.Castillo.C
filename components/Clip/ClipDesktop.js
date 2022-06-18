import React from "react";

export const ClipDesktop = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h1360v12L0 90V0Z" fill="#F3FCF9" />
    </svg>
  );
};
