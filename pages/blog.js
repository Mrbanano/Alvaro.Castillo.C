import Link from "next/link";
import Head from "next/head";
import React from "react";

import { getAllFilesMetadata } from "../lib/mdx";

import Image from "next/image";

import Banner from "../public/static/img/books.jpg";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Alvaro Castillo</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className=" md:mt-[-115px] h-[175px] md:h-[380px] relative">
        <Image src={Banner} layout="fill" objectFit="cover" />
      </section>

      <div className="max-w-7xl m-auto  border-2 border-green-500 relative w-full h-full ">
        <div className="border-2 border-red-500 w-full p-4">
          <ul className="flex w-full items-center justify-center gap-10">
            <li className="border-2 border-red-500">Post</li>
            <li className="border-2 border-red-500">Cursos</li>
          </ul>
        </div>
        <input
          type="text"
          className="w-1/2 border-2 border-gray-600"
          placeholder="Buscar"
        />
        <h2>
          Todos los posts{" "}
          <span className="text-black font-bold">({posts.length})</span>
        </h2>
        <div className="p-5 grid grid-cols-2 gap-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a>
                <article className="border-2 border-red-500">
                  <div className="border-2 border-blue-500">
                    <img src="" alt="" />
                  </div>
                  <div className="border-2 border-green-500">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span>{post.date}</span>
                  </div>
                  <div className="CardFooter">
                    <div className="CardTags">
                      <span>{post.tags}</span>
                    </div>
                  </div>
                </article>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return {
    props: { posts },
  };
}
