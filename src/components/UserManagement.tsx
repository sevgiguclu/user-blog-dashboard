"use client";

import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, MenuItem, Select } from "@mui/material";


interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function UserManagement(){
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user"); // default role
    const [search, setSearch] = useState("");

    useEffect(()=>{
        fetch("/api/users")
        .then((res)=>res.json())
        .then((data)=> setUsers(data))
        .catch((err)=>console.error("Error fetching users",err));
    },[]);

    const AddUser = async() => {
        if (!name || !email || !role) return alert("Lütfen tüm bilgileri girin!");

        const newUser = { id: users.length+1, name, email, role };
        const res = await fetch("/api/users",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });

        if(res.ok){
            setUsers([...users,newUser]);
            setName("");
            setEmail("");
            setRole("user");
        }
    };

    const DeleteUser = async(id:number) => {
        const res = await fetch("/api/users",{
            method:"DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id})
        });
        
        if(res.ok)
            setUsers(users.filter((user)=> user.id !== id));
    };

    //filtered users
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <Box sx={{ maxWidth: 550, margin: "auto", mt: 4 }}>
            <Typography variant="h5">User Management</Typography>

            {/* User Add Form */}
            <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} sx={{ my: 1 }} />
            <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ my: 1 }} />

            {/* Role Selection */}
            <Select fullWidth value={role} onChange={(e) => setRole(e.target.value)} sx={{ my: 1 }}>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
            </Select>

            <Button variant="contained" onClick={AddUser} sx={{ mb: 2 }}>Add User</Button>

            {/* Search Box */}
            <TextField fullWidth label="Search" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ my: 2 }} />

            {/* user list */}
            <List>
                {filteredUsers.map((user) => (
                <ListItem key={user.id} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primary={`${user.name} (${user.role})`} secondary={user.email} />
                    <Button variant="outlined" color="error" onClick={() => DeleteUser(user.id)}>Delete</Button>
                </ListItem>
                ))}
            </List>
        </Box>
    );

}