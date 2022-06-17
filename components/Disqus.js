import React from "react";
import { DiscussionEmbed } from "disqus-react";

export const DisqusComponents = ({
  dominio = "alvarocastillo",
  url,
  id,
  title,
}) => {
  return (
    <div styles={{ backgroundColor: "#FFF" }}>
      <DiscussionEmbed
        shortname={dominio}
        config={{
          url: "https://mrbanano.github.io/Alvaro.Castillo.C/" + url,
          identifier: id,
          title,
          language: "es_MX",
        }}
      />
    </div>
  );
};
