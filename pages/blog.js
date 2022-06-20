import Link from "next/link";
import Head from "next/head";
import React from "react";

import { getAllFilesMetadata } from "../lib/mdx";
import Image from "next/image";

import HeaderBlog from "../components/HeaderBlog";
import BlogContent from "../components/BlogContent";
import BlogAside from "../components/BlogAside";

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
      <HeaderBlog />
      <div className="max-w-7xl m-auto pt-8  relative w-full h-full ">
        <header className="mb-16">
          <h1 className="capitalize font-bold text-5xl text-center">
            <span className="text-green-dark">Blog</span>
          </h1>
        </header>
        <section className=" md:flex md:items-start relative md:gap-5">
          <BlogContent postsList={postsList} Search={Search} />
          <BlogAside />
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

/**
 * const SearchByTag = ({ target }) => {
    const search = target.innerText;
    console.log(search);
    const filteredPosts = posts.filter((post) => {
      return post.tags.includes(search);
    });
    setPostsList(filteredPosts);
  };
 * 
 * {postsList.map((post) => {
                return post.tags.map((tag, index) => {
                  return (
                    <div key={post.title + tag + index}>
                      <span
                        className="text-black font-bold  bg-green-light p-2 rounded-lg "
                        onClick={SearchByTag}
                      >
                        {tag}
                      </span>
                    </div>
                  );
                });
              })}
 */
