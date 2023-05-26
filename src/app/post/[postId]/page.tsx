import axios from "axios";
import { Metadata } from "next";
import { PostElmType } from "../page";
import PostIdCard from "../../component/PostIdCard";

interface PropsTypes {
  params: {
    postId: string;
  };
}

export const generateMetadata = async ({
  params,
}: PropsTypes): Promise<Metadata> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as PostElmType;
  return {
    title: data.title,
    description: data.body,
  };
};

const page = async ({ params }: PropsTypes) => {
  const { postId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    throw new Error();
  }
  const data = (await res.json()) as PostElmType;

  return (
    <>
      <div>
        <PostIdCard key={data.id} {...data} />
      </div>
    </>
  );
};

export default page;
