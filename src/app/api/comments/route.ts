import { NextResponse } from "next/server";

let comments = [
    { id: 1, text: "Great blog post!" },
    { id: 2, text: "Very informative, thanks!" }
];

export async function GET(){
    return NextResponse.json(comments);
}

export async function POST(req:Request) {
    const {text} = await req.json();
    if(!text) return NextResponse.json({error:"Text is required.."},{status:400});

    const newComment = { id: comments.length+1, text};
    comments.push(newComment);

    return NextResponse.json(newComment,{status:201});

}

