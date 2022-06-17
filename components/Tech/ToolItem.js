import Image from "next/image";
import React from "react";

import styles from "./Tool.module.css";

const { ToolContainerbody, ToolsItem } = styles;

export const ToolItem = ({ title, item }) => {
  return (
    <>
      <div className="Tool-Container-subtitle">
        <h3>{title}</h3>
      </div>
      <div className={ToolContainerbody}>
        {item.map((item, index) => {
          return (
            <div className={ToolsItem} key={"Tools" + index}>
              <img src={item.Img} alt={item.Name} loading="Lazy" />
              <h5>{item.Name}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};
