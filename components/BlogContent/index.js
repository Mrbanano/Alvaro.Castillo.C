import React from "react";
import BlogEmpty from "../BlogEmpty";
import BlogPost from "../BlogPost";

export default function index({ postsList, Search }) {
  return (
    <section className="md:w-8/12 max-w-[850px] my-12">
      <h2 className="p-3 border-b-2 border-green-dark w-[95%] m-auto md:w-full">
        Todos los posts
        <span className="ml-2 text-black font-bold">({postsList.length})</span>
      </h2>
      <div className="p-3  mt-6 w-full ">
        <input
          onChange={Search}
          placeholder="Buscar"
          className="border-2  rounded-md w-full focus:border-green-dark active:border-green-dark p-2 outline-green-dark"
        />
      </div>
      <section>
        {postsList.length === 0 && <BlogEmpty />}
        {postsList.length > 0 && <BlogPost postsList={postsList} />}
      </section>
    </section>
  );
}
