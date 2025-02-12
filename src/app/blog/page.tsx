"use client";

import { useState,useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent, CircularProgress } from "@mui/material";


type Blog = {
    id: number;
    title: string;
    author: string;
    description: string;
};

export default function BlogPage() {

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch("/api/blogs");
                if (!res.ok) throw new Error("Failed to fetch blogs");
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    },[]);

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Blogs
            </Typography>

            {loading && <CircularProgress />}
            {error && <Typography color="error">Error: {error}</Typography>}

            <Grid container spacing={3}>
                {!loading &&
                    !error &&
                    blogs.map((blog) => (
                        <Grid item xs={12} md={6} lg={4} key={blog.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{blog.title}</Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        by {blog.author}
                                    </Typography>
                                    <Typography variant="body2">{blog.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Container>
>>>>>>> 36a49bd (created blog api and fetch method, changed blog page)
    );
}