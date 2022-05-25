import Link from "next/link";
import React from "react";
import { getFilesByTags } from "../../lib/mdx";

export default function Blog({ post }) {
  return (
    <div>
      {post.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a>
            <p>{post.title}</p>
            <span>{post.date}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const post = await getFilesByTags("React");
  console.log(post);
  return {
    props: { post },
  };
}
