"use client";
import { Metadata } from "next";
import { DataType } from "../page";
import CommentIdCard from "@/app/component/CommentIdCard";

interface PropsTypes {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: PropsTypes): Promise<Metadata> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${params.id}`
  );

  const data = (await res.json()) as DataType;
  return {
    title: data.name,
    description: data.body,
  };
};

const page = async ({ params }: PropsTypes) => {
  const { id } = params;

  const res = await fetch(`api/user?id=${id}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error();
  }
  const data = (await res.json()) as Array<DataType>;

  return (
    <>
      <div>
        {data.map((item) => (
          <CommentIdCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default page;
