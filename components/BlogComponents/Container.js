import React from "react";

export const Container = ({ children }) => {
  return (
    <section className="w-full">
      <article className="max-w-7xl m-auto p-5 md:p-16">{children}</article>
    </section>
  );
};
