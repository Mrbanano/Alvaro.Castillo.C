import React from "react";
import { ToolItem } from "./ToolItem";
import styles from "./Tool.module.css";

const { Tool, ToolContainer, ToolContainerHeader, ToolContainerbody } = styles;

export const Tools = () => {
  return (
    <div className={Tool}>
      <div className={ToolContainer}>
        <h1>hola</h1>
      </div>
    </div>
  );
};

/**
 * <div className={ToolContainerHeader}>
          <h2>Tecnologías y software que manejo</h2>
        </div>
        <div className={ToolContainerbody}>
          <ToolItem title="Fron End" item={ToolsItem.Front} />
          {/**
             * <ToolItem title="Back End" item={ToolsItem.Back} />
          <ToolItem title="Base de datos" item={ToolsItem.DB} />
          <ToolItem title="Sistemas operativos" item={ToolsItem.Os} />
          <ToolItem title="Hardware" item={ToolsItem.Hardware} />
          </div>
             */

const ToolsItem = {
  Front: [
    {
      Name: "HTML5",
      Img: "https://i.postimg.cc/RVYZ1kDK/Html.png",
    },
    {
      Name: "CSS3",
      Img: "https://i.postimg.cc/jjL9H1Bw/css.png",
    },
    {
      Name: "JavaScript",
      Img: "https://i.postimg.cc/sg20z8j6/js.png",
    },
    {
      Name: "Git",
      Img: "https://i.postimg.cc/jjwgw7Jy/git-2.png",
    },
  ],
  Back: [
    {
      Name: "JavaScript",
      Img: "js",
    },
  ],
  DB: [
    {
      Name: "JavaScript",
      Img: "js",
    },
  ],
  Os: [
    {
      Name: "JavaScript",
      Img: "js",
    },
  ],
  Hardware: [
    {
      Name: "JavaScript",
      Img: "js",
    },
  ],
};
