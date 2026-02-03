import React from "react";
import Card from "./Card";

const CardGrid = ({ posts = [] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "30px",
        marginTop: "50px",
        width: "100%",
        padding: "0 24px",
        boxSizing: "border-box"
      }}
    >
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardGrid;
