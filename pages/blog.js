import Link from "next/link";
import Head from "next/head";
import React from "react";

import { getAllFilesMetadata } from "../lib/mdx";
import Image from "next/image";
import blogCoverDefault from "../public/static/img/blogCoverDefault.png";

export default function Blog({ posts }) {
  const [postsList, setPostsList] = React.useState(posts);

  const Search = ({ target }) => {
    const search = target.value.trim().toLowerCase();
    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
    setPostsList(filteredPosts);
  };

  return (
    <>
      <Head>
        <title>Blog | Alvaro Castillo</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <div className="max-w-7xl m-auto pt-8  relative w-full h-full ">
        <header className="mb-16">
          <h1 className="capitalize font-bold text-5xl text-center">
            <span className="text-green-dark">Blog</span>
          </h1>
        </header>
        <section className=" md:flex md:items-start relative md:gap-5">
          <section className="md:w-8/12 max-w-[850px] my-12">
            <h2 className="p-3 border-b-2 border-green-dark w-[95%] m-auto md:w-full">
              Todos los posts{" "}
              <span className="text-black font-bold">({posts.length})</span>
            </h2>
            <section>
              <input
                type="text"
                className="w-full p-3 border-b-2 border-green-dark"
                placeholder="Buscar"
                onChange={Search}
              />
              <div className="p-3 py-12 md:py-20 grid grid-cols-1 gap-10 md:grid-cols-2 ">
                {postsList.length === 0 && (
                  <div className="border-2 border-red-500 w-full h-full">
                    <p>No hay post</p>
                  </div>
                )}
                {postsList.length > 0 && (
                  <>
                    {postsList.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <a>
                          <article className="rounded-lg overflow-hidden hover:bg-softwhite max-w-[414px]">
                            <div className="relative  w-full max-w-[414px] h-[190px] rounded-lg overflow-hidden">
                              <Image
                                layout="fill"
                                objectFit="cover"
                                src={post.img}
                                alt={post.title}
                              />
                            </div>
                            <div className=" p-3">
                              <h2 className="text-3xl font-medium">
                                {post.title}
                              </h2>
                              <p className="text-sm py-1">{post.description}</p>
                              <span className="text-[12px]">{post.date}</span>
                            </div>
                            <div className="CardFooter">
                              <div className="px-3 py-2 flex gap-3">
                                {post.tags.map((tag, index) => (
                                  <span
                                    key={post.title + tag + index}
                                    className={`text-[11px] py-1 px-2  rounded-lg text-white font-bold bg-${tag}`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </article>
                        </a>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </section>
          </section>
          <aside className="md:w-4/12  sticky top-28 hidden md:block  my-12">
            <h2 className="p-3 border-b-2 border-green-dark w-full m-auto md:w-full">
              <span className="text-black font-bold">Tags</span>
            </h2>
          </aside>
        </section>
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
