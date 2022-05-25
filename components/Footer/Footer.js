import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const { footer, footerLogo, social, buttonIcon, footerText } = styles;

export const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerLogo}>
        <Image
          src="/static/img/LOGO.png"
          width="85"
          height="39"
          alt="AlvaroCastilloCarreñoDesarolladorWeb"
        />
      </div>
      <div className={social}>
        {SocialLinks.map((link, index) => (
          <a
            key={index}
            className={buttonIcon}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={link.img}
              alt={link.name}
              rel="noopener"
              width="24"
              height="24"
            />
          </a>
        ))}
      </div>
      <div className={footerText}>
        <p>Hecho con el 💚 por Alvaro</p>
        <p>Copyright 2021 - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const SocialLinks = [
  {
    name: "Github",
    href: "https://github.com/Mrbanano/",
    img: "/static/icons/icon-github.svg",
  },
  {
    name: "Mail",
    href: "mailto:alvarocastillocarreno@gmail.com",
    img: "/static/icons/icon-important_mail.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alvaro.castillo.c/",
    img: "/static/icons/icon-instagram.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/666alvaro",
    img: "/static/icons/icon-twitter_squared.svg",
  },
];
