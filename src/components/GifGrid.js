import React from "react";
import { useFetchGifs } from "../hooks/useFetchGif";
import "../index.css";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box md={{ width: 800, minHeight: 800 }}>
      {loading ? "Loading ..." : null}
      <h2 className="center strokeSubsubtitle">{category}</h2>
      <Masonry columns={4} spacing={2}>
        {data.map((img, index) => {
          return (
            <div key={img.id}>
              <Item className="display">
                <img
                  src={`${img.url}?w=162&auto=format`}
                  srcSet={`${img.url}?w=162&auto=format&dpr=2 2x`}
                  alt={img.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
              </Item>
            </div>
          );
        })}
      </Masonry>
    </Box>
  );
};
