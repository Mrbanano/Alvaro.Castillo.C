import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index({ postsList }) {
  return (
    <>
      <section className="p-3 py-12 md:py-20 grid grid-cols-1 gap-10 md:grid-cols-2 ">
        {postsList.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a>
              <article
                className={`rounded-lg overflow-hidden hover:bg-softwhite max-w-[414px] md:h-[430px] flex flex-col items-stretch justify-between border-2 border-transparent  hover:border-${post.tags[0]} transition duration-300 ease-in-out`}
              >
                <div className="relative  w-full max-w-[414px] h-[190px] rounded-lg overflow-hidden">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={post.img}
                    alt={post.title}
                  />
                </div>
                <div className=" p-3">
                  <h2 className="text-3xl font-medium">{post.title}</h2>
                  <p className="text-sm py-1">{post.description}</p>
                  <span className="text-[12px]">{post.date}</span>
                </div>
                <div className="CardFooter ">
                  <div className="px-3 py-2 flex gap-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={post.title + tag + index}
                        className={`text-[11px] py-1 px-2  rounded-lg text-white font-bold  ${Color[tag]}`}
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
      </section>
    </>
  );
}

const Color = {
  React: "bg-React",
  JavaScript: "bg-JavaScript",
  HTML: "bg-HTML",
  CSS: "bg-CSS",
};
