import Image from "next/image";
import Link from "next/link";
import React from "react";
import AlvaroCastillo from "../../public/static/img/AlvaroCastillo.jpeg";
import { Autor } from "./Autor";

export default function Header({ Title, Subtitle, Topic }) {
  return (
    <header className="flex flex-col gap-5">
      <span className="uppercase text-xs text-gray-600">{Topic}</span>
      <h1 className="text-[34px] md:w-full md:text-[32px]">{Title}</h1>
      <em className="text-base text-gray-500">{Subtitle}</em>
      <div className="w-4/6 h-1 bg-green-dark"></div>
      <div className="my-3 flex items-center gap-4">
        <Image
          src={AlvaroCastillo}
          alt={Autor.Name}
          width={40}
          height={40}
          objectFit="fill"
        />
        <div>
          <h3 className="capitalize font-bold ">{Autor.Name}</h3>
          <h4 className="capitalize font-medium text-gray-500">
            {Autor.Description}
          </h4>
        </div>
      </div>
    </header>
  );
}
