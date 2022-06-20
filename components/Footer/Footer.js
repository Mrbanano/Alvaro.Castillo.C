import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Svg from "../../public/static/clips/ClipGreen.svg";
import { useRouter } from "next/router";

const { footer, footerLogo, social, buttonIcon, footerText } = styles;

export const Footer = () => {
  const { asPath } = useRouter();

  return (
    <footer>
      <div
        className={`relative h-20 w-full ${
          asPath === "/blog" ? " " : "bg-green-light"
        }  `}
      >
        <Image src={Svg} alt="clip" layout="fill" objectFit="cover" />
      </div>
      <div className="bg-green-soft">
        <div className="max-w-7xl m-auto h-10"></div>
      </div>
      <div className="bg-green-darker">
        <div className="max-w-7xl m-auto flex flex-col items-center gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-2">
          <div className="">
            <Image
              src="/static/img/Logowhite.png"
              width="85"
              height="20"
              alt="AlvaroCastilloCarreñoDesarolladorWeb"
            />
          </div>
          <div className="text-center py-3 text-white">
            <p className="py-2">Hecho con el 💚 por Alvaro</p>
            <p className="text-sm">
              Copyright 2021 - Todos los derechos reservados.
            </p>
          </div>
          <div className="">
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
        </div>
      </div>
    </footer>
  );
};

/**
 *  
      
        <footer
          className={`${footer} py-2 text-white bg-green-darker  max-w-7xl flex items-center`}
        >
          <div className={footerLogo}>
            <Image
              src="/static/img/Logowhite.png"
              width="85"
              height="20"
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
      </div>
 */

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
