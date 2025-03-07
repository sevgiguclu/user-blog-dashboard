"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router için
import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from "@mui/material";

const drawerWidth = 240;

const pages = [
  { name: "Home", path: "/" },
  { name: "Admin Dashboard", path: "/dashboard/admin" },
  { name: "Editor Dashboard", path: "/dashboard/editor" },
  { name: "Blogs", path: "/blog" },
  { name: "Users", path: "/users" },
  { name: "Profile", path: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
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
          {pages.map((page) => {
            const isActive = pathname === page.path;
            return (
              <ListItem
                key={page.name}
                component="div"
                sx={{
                  backgroundColor: isActive ? "primary.main" : "inherit",
                  color: isActive ? "white" : "inherit",
                  "&:hover": { backgroundColor: "#1976d27a" },
                }}
              >
                <Link
                  href={page.path}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    height: "100%",
                    display: "block",
                    padding: "8px 16px",
                    color: isActive ? "white" : "inherit",
                  }}
                >
                  <ListItemText primary={page.name} />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}