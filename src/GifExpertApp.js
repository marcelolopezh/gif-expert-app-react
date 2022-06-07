import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Category } from "./components/Category";
import "./index.css";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Tom y Jerry"]);

  return (
    <>
      <h2 className="strokeTitle">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <Category setCategories={setCategories} categories={categories}/>
      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
    </>
  );
};
export default GifExpertApp;
