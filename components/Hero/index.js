import Image from "next/image";
import React from "react";
import HeroImage from "../../public/static/img/HeroImage-2.png";
import Svg from "../../public/static/clips/Clip.svg";
import Clip from "../Clip";
import { ClipDesktop } from "../Clip/ClipDesktop";

export default function index() {
  return (
    <>
      <section id="main" className="w-full bg-green-light py-14 md:py-14">
        <div className="max-w-7xl m-auto h-[600px] md:h-[550px] p-2 flex flex-col gap-3 md:flex-row">
          <div className="h-4/6  box-border md:w-1/2 md:h-auto md:order-1">
            <div className="h-full w-full relative  ">
              <Image
                className="h-1/2"
                src={HeroImage}
                alt="hero"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="p-6 z-10 box-border md:w-1/2 md:flex md:items-center md:justify-center  ">
            <div className="flex flex-col gap-3  md:w-[360px] md:h-80 ">
              <p className="uppercase font-bold text-green-dark">Bienvenidos</p>
              <h1 className="capitalize font-bold text-5xl py-2">
                Soy <span className="text-green-dark">Alvaro Castillo C.</span>
              </h1>
              <p className="p-2 text-sm font-light w-full">
                Desarrollador web apasionado con la tecnología y la innovación,
                creo firmemente que siempre hay una mejor manera de hacer las
                cosas.
              </p>
              <div className="mt-2">
                <a className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-5 md:hidden z-0">
        <Clip width="100%" height="30px" />
      </div>
      <div className="hidden md:block w-full lg:hidden">
        <ClipDesktop width="100%" height="45px" />
      </div>
      <div className="hidden lg:block relative h-20 w-full ">
        <Image src={Svg} alt="clip" layout="fill" objectFit="cover" />
      </div>
    </>
  );
}
