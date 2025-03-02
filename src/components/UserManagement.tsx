"use client";

import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, MenuItem, Select, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

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
    const [editUser,setEditUser] = useState<User|null>(null);

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

    const UpdateUser = async() => {
        if(!editUser) return;

        const res = await fetch("/api/users", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser),
        });

        if(res.ok){
            setUsers(users.map((user) => (user.id !== editUser.id ? user : editUser)));
            setEditUser(null);
        }
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
                    {editUser?.id === user.id ? (
                        <>
                        <TextField size="small" value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} sx={{ mr: 1 }} />
                        <TextField size="small" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} sx={{ mr: 1 }} />
                        <Select size="small" value={editUser.role} onChange={(e) => setEditUser({ ...editUser, role: e.target.value })} sx={{ mr: 1 }}>
                          <MenuItem value="user">User</MenuItem>
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="editor">Editor</MenuItem>
                        </Select>
                        <IconButton onClick={UpdateUser}><SaveIcon color="primary" /></IconButton>
                        <IconButton onClick={() => setEditUser(null)}><CancelIcon color="error" /></IconButton>
                      </>
                    ) : (
                        <>
                            <ListItemText primary={`${user.name} (${user.role})`} secondary={user.email} />
                            <IconButton onClick={() => setEditUser(user)}><EditIcon color="primary" /></IconButton>
                            <Button variant="outlined" color="error" onClick={() => DeleteUser(user.id)}>Delete</Button>
                        </>
                    )}
                </ListItem>
                ))}
            </List>
        </Box>
    );

}