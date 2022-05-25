import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

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
  return (
    <header className={header}>
      <div className={wrapper}>
        <div className={headerContent}>
          <Link href="/">
            <Image
              src="/static/img/LOGO.png"
              width="85"
              height="39"
              alt="AlvaroCastilloCarreñoDesarolladorWeb"
            />
          </Link>
          <nav className={menu} aria-label="main-navigation">
            <ul>
              {Links.map((link, index) => (
                <li key={index}>
                  <Link id={link.id} href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className={button}
            target="_blank"
            href="/static/AlvaroCastilloCarreño.pdf"
          >
            Curriculum
          </a>
          <div className={BlogMobile}>
            <Link href="/blog" id="BtnBlog">
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

/**
 * 
                <Link id="BtnContact" href="/#contact">
                  Hablemos
                </Link>
              </li>
              <li>
               
 */
