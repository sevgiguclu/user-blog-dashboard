"use client";

import { Box, CssBaseline, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from "@mui/material";

const drawerWidth = 240;

export default function Dashboard() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* Top Navigation Bar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        User Blog Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Navigation */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {["Home", "Blogs", "Users", "Statistics"].map((text) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
                <Toolbar />

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
                                    <Typography color="text.secondary">Most read blog</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">Total Users</Typography>
                                    <Typography color="text.secondary">120 Users</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">Total Blogs</Typography>
                                    <Typography color="text.secondary">45 Blogs</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
