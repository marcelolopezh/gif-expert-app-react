import React from "react";
import Chip from "@mui/material/Chip";
import Delete from "@mui/icons-material/Delete";

export const Category = ({ categories, setCategories }) => {
  const handleDelete = (indexArr) => {
    setCategories(categories.filter((item, index) => index !== indexArr));
  };
  return (
    <>
      {categories.map((cat, index) => {
        return (
          <Chip color="primary" label={cat} key={cat} onDelete={()=> handleDelete(index)}/>
        );
      })}
    </>
  );
};
