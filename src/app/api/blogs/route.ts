import { NextResponse } from "next/server";

export async function GET() {
    const blogs = [
        { id: 1, title: "React Best Practices", author: "John Doe", description: "Learn the best practices for writing clean React code." },
        { id: 2, title: "Next.js Performance Tips", author: "Jane Smith", description: "Optimize your Next.js application for speed and efficiency." },
        { id: 3, title: "Material UI Design Guide", author: "Alice Johnson", description: "Create stunning UIs with Material UI components and best practices." },
        { id: 4, title: "HTML5", author: "Alice Johnson", description: "Learn the best practices for writing clean HTML5 code." },
        { id: 5, title: "CSS And Bootstrap", author: "Alice Johnson", description: "Learn the best practices for writing clean CSS code." },
        { id: 6, title: "C#", author: "Alice Johnson", description: "Learn the best practices for writing clean C# code." },
        { id: 7, title: "Vue Best Practices", author: "Alice Johnson", description: "Learn the best practices for writing clean Vue code." },
    ];

    return NextResponse.json(blogs);
}