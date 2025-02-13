import { Box, CircularProgress, Container, Paper, Typography } from "@mui/material";
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
    if(!res.ok){
        //return notFound();
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
                <CircularProgress/>
            </Box>
        )
    }
        

    const blog = await res.json();

    return (
        <Container maxWidth="md" sx={{mt:4}}>
            <Paper elevation={3} sx={{p:3, textAlign:"center"}}>
                <Typography variant="h3" gutterBottom>{blog.title}</Typography>
                <Box component="img" src={blog.image} alt={blog.title} sx={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 2, mb: 3 }} ></Box>
                <Typography variant="body1">{blog.content}</Typography>

            </Paper>
        </Container>      
    );
}
