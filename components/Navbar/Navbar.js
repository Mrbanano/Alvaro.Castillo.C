import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

import Logo from "../../public/static/clips/logo.svg";
import { useRouter } from "next/router";

const { header, wrapper, headerContent, menu, button, Active, BlogMobile } =
  styles;

const Links = [
  {
    name: "Hola",
    href: "/#main",
    id: "BtnHome",
  },
  {
    name: "Proyectos",
    href: "/#project",
    id: "BtnProject",
  },
  {
    name: "Contacto",
    href: "/#contact",
    id: "BtnHome",
  },
  {
    name: "Blog",
    href: "/blog",
    id: "BtnBlog",
  },
];

export const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <header className={`${header}  sticky top-0 z-50`}>
      <div className={wrapper}>
        <div className={headerContent}>
          <div className="hidden md:block mt-[-10px] ">
            <Link href="/">
              <Image
                src={Logo}
                width="200px"
                height="100%"
                objectFit="cover"
                alt="AlvaroCastilloCarre├▒oDesarolladorWeb"
              />
            </Link>
          </div>
          <div className="md:hidden self-start mt-[-10px] w-[200px] ">
            <Link href="/">
              <Image
                src={Logo}
                width="100%"
                height="53%"
                objectFit="cover"
                alt="AlvaroCastilloCarre├▒oDesarolladorWeb"
              />
            </Link>
          </div>

          <nav className={menu} aria-label="main-navigation">
            <ul>
              {Links.map((link, index) => (
                <li key={index}>
                  <Link id={link.id} href={link.href}>
                    <a
                      className={`
                      text-bold 
                      ${asPath == link.href ? "text-green-dark" : ""}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className={`${btnStyle} border-2 border-green-dark rounded-xl px-2 hover:bg-green-dark hover:text-white transition duration-150 ease-out`}
            target="_blank"
            href="/static/AlvaroCastilloCarre├▒o.pdf"
          >
            Curriculum
          </a>

          <Link href="/blog" id="BtnBlog">
            <div className={`border-2 border-green-dark rounded-xl md:hidden `}>
              <a className={linkStyle}>Blog </a>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

const linkStyle =
  "self-start m-8 py-2 text-green-dark font-bold text-lg md:hidden";

const btnStyle =
  "hidden self-start m-8 py-2 text-green-dark font-bold text-lg md:block";

const active = "";
const noactive = "";
