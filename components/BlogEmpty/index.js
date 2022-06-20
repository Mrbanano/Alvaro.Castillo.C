import Image from "next/image";
import React from "react";
import File from "../../public/static/img/file.svg";

export default function index() {
  return (
    <section className="p-3 h-[400px] md:h-[600px]">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="p-5 flex flex-col gap-10">
          <Image
            src={File}
            width={180}
            height={180}
            alt="No se encontraron post ni imagen"
          />
          <h2 className="font-bold text-xl ">
            No hay <span className="text-green-dark">post</span> disponibles
          </h2>
        </div>
      </div>
    </section>
  );
}
