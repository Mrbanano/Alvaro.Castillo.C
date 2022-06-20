import React from "react";

export default function index() {
  return (
    <header>
      <section className="max-w-7xl m-auto md:rounded-2xl md:mt-8  h-[140px] md:h-[200px] bg-green-light md:shadow-md"></section>
      <section className="max-w-6xl mx-auto  px-5 mb-10 flex items-center justify-center">
        <div className="w-[80px] h-[80px]  flex items-center justify-center  mt-[-35px] ">
          <span
            className="text-8xl ml-6 rounded-full border-4 border-white p-5 bg-green-light shadow-md"
            role="image"
            aria-label="📝"
          >
            📝
          </span>
        </div>
      </section>
    </header>
  );
}
