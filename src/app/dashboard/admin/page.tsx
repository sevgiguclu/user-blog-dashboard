import BlogStatsChart from "@/components/BlogStatsChart";
import { Card, CardContent, Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the admin panel! Here you can manage users and blogs.
      </Typography>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card sx={{ minWidth: 250 }}>
          <CardContent>
            <Typography variant="h6">Total User</Typography>
            <Typography variant="h4">150</Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 250 }}>
          <CardContent>
            <Typography variant="h6">Total Blog</Typography>
            <Typography variant="h4">45</Typography>
          </CardContent>
        </Card>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Most Read Blogs
        </Typography>
        <BlogStatsChart />
      </div>


    </div>
  );
};

export default AdminDashboard;
