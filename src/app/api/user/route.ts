import { NextRequest, NextResponse } from "next/server";
;

export const GET =async(req:Request)=>{

 const { searchParams }= new URL(req.url);
       const id= searchParams.get("id")

     const resData= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

     const product = await resData.json();

     return new NextResponse(JSON.stringify({product}));
}