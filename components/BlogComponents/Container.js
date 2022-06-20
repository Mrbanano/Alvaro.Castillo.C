import React from "react";

export const Container = ({ children }) => {
  return (
    <section className=" min-h-screen w-full ">
      <article className="max-w-7xl m-auto p-5 md:p-16 ">{children}</article>
    </section>
  );
};
