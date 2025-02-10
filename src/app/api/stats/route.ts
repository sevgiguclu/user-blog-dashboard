import { NextResponse } from "next/server"

export async function GET() {
    const data = {
        topBlog: "Next.js",
        totalUsers: 150,
        totalBlogs: 45,
    }

    return NextResponse.json(data);
}