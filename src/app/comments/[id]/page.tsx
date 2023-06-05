"use client";
import { Metadata } from "next";
import { DataType } from "../page";
import CommentIdCard from "@/app/component/CommentIdCard";
import React from "react";

interface PropsTypes {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PropsTypes) => {
  const [data, setData] = React.useState<DataType[] | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const { id } = params;

  try {
    const res = await fetch(`api/user?query=${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error();
    }
    const resData: Array<DataType> = await res.json();
    setData(resData);
  } catch (e) {
    if (e instanceof Error) {
      setError(e);
    }
  }

  if (!data && error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div>
        {data?.map((item) => (
          <CommentIdCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Page;
