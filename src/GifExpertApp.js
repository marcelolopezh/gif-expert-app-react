import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Tom y Jerry']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
    </>
  );
};
export default GifExpertApp;
