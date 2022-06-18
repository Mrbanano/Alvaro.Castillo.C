import Link from "next/link";
import Head from "next/head";

import React from "react";
import { getAllFilesMetadata } from "../lib/mdx";

export default function Blog({ post }) {
  return (
    <>
      <Head>
        <title>Blog | Alvaro Castillo</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {post.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a>
              <article className="Card">
                <div className="CardHero">
                  <img src="" alt="" />
                </div>
                <div className="CardBody">
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
    </>
  );
}

export async function getStaticProps() {
  const post = await getAllFilesMetadata();
  console.log(post);
  return {
    props: { post },
  };
}
