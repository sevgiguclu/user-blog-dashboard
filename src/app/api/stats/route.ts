import { NextResponse } from "next/server"

export async function GET() {
    const data = {
        topBlog: "Next.js",
        totalUsers: 150,
        totalBlogs: 45,
        top5 : [
            { name: "Blog 1", views: 1500 },
            { name: "Blog 4", views: 1100 },
            { name: "Blog 7", views: 900 },
            { name: "Blog 5", views: 500 },
            { name: "Blog 2", views: 450 },
        ]
    }

    return NextResponse.json(data);
}