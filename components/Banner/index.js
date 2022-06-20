import Image from "next/image";
import React from "react";
import banner from "../../public/static/img/Banner.svg";

export default function index() {
  return (
    <section
      className="w-full relative border-2 border-red-500 h-24 overflow-hidden "
      style={{ clipPath: "polygon(0 7%, 100% 3%, 100% 91%, 0 97%)" }}
    >
      <div className=" max-w-7xl m-auto bg-red-500 h-full w-full "></div>
    </section>
  );
}
