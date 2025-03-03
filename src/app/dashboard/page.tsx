"use client";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [stats, setStats] = useState({
        topBlog: "",
        totalUsers: 0,
        totalBlogs: 0,
    });

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch("api/stats");
                const data = await res.json();

                setStats(data);

            }
            catch(error) {
                console.error("Error fetching stats:", error);
            }
        }

        fetchStats();

    },[]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            {/* Dashboard Stats */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Top Blog</Typography>
                            <Typography color="text.secondary">{stats.topBlog}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Users</Typography>
                            <Typography color="text.secondary">{stats.totalUsers} Users</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Blogs</Typography>
                            <Typography color="text.secondary">{stats.totalBlogs} Blogs</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Container>  
    );
}
