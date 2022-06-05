import React from "react";
import { useFetchGifs } from "../hooks/useFetchGif";
import "../index.css";
export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <div>
      {loading ? "Loading ..." : null}
      {data.map((img, index) => {
        let flag = index % 2 === 0 ? true : false;
        return (
          <div key={img.id} className="display">
            {flag ? <h4>{img.title}</h4> : null}
            <img src={img.url} alt={img.title} />
            {!flag ? <h4>{img.title}</h4> : null}
          </div>
        );
      })}
    </div>
  );
};
