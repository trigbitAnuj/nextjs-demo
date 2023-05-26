import axios from "axios";
import PostsCard from "../component/PostsCard";
import React, { Suspense } from "react";

export type PostElmType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const dynamic = "force-static";

export const metadata = {
  title: "posts",
  description: "data about all posts",
};

const Page = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "14px",
          textTransform: "capitalize",
        }}
      >
        {data?.map((postElm: PostElmType) => (
          <PostsCard key={postElm.id} {...postElm} />
        ))}
      </div>
    </>
  );
};

export default Page;
