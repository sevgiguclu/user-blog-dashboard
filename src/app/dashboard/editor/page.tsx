import EditorStatsChart from "@/components/EditorStatsChart";
import { Card, CardContent, Typography } from "@mui/material";

const EditorDashboard = () => {
  return (
    <div style={{ padding: "10px" }}>
        <Typography variant="h4" gutterBottom>
            Editor Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
            You can review and edit blogs here.
        </Typography>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <Card sx={{ minWidth: 250 }}>
                <CardContent>
                    <Typography variant="h6">Bekleyen Bloglar</Typography>
                    <Typography variant="h4">8</Typography>
                </CardContent>
            </Card>

            <Card sx={{ minWidth: 250 }}>
                <CardContent>
                    <Typography variant="h6">Yayınlanan Bloglar</Typography>
                    <Typography variant="h4">37</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 250 }}>
                <CardContent>
                    <Typography variant="h6">Yayınlanmayan Bloglar</Typography>
                    <Typography variant="h4">2</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 250 }}>
                <CardContent>
                    <Typography variant="h6">Takipçi Sayısı</Typography>
                    <Typography variant="h4">67</Typography>
                </CardContent>
            </Card>
        </div>

        <div style={{marginTop:"1rem"}}>
            <Typography variant="h6">
                En Çok Okunan Bloglarınız - TOP5
            </Typography>
            <EditorStatsChart/>
        </div>
      
    </div>
  );
};

export default EditorDashboard;
