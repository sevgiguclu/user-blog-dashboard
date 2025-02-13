import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: { id: string } }) {

    const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`);
    if(!res.ok)
        return notFound();

    const blog = await res.json();

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>        
    );
}
