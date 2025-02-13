import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
    /*
    context: { params: { id: string } } == { params }: { params: { id: string } }
    In Next.js App Router, the effect from dynamic routes comes as params inside the context object.
    We can perform destructuring (parsing) while getting the params from the context.
    So we can just use params instead of context.params
    *****************
    { params: { id: string } }
    We specify the structure and content of the params object.
    id: string → There is a variable named id in params and its type must be string.
    Additionally, URL parameters are always passed as strings.So we specified that id will be of type string.

    */
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
