import React from "react";
import CommentCard from "../component/CommentsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "comments",
};

export interface DataType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type Data = Array<DataType>;

const page = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data: Data = await res.json();
  return (
    <section
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "14px",
        textTransform: "capitalize",
      }}
    >
      {data.map((item) => (
        <CommentCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default page;
