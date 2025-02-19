"use client";

import { Box, Button, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Comment{
    id:number,
    text:string
}

export default function BlogComments(){
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        async function fetchComments() {
            const res = await fetch("/api/comments");
            const data = await res.json();
            setComments(data);
        }
        fetchComments();
    },[]);

    const AddComment = async() => {
        if(!newComment.trim()) return;

        //setComments([...comments,{id:Date.now(),text:newComment}]);
        const res = await fetch("/api/comments",
            {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: newComment }),
            }
        );

        if(res.ok){
            const data = await res.json();
            setComments((prev) => [...prev,data]);
            setNewComment("");
        }
 
    }

    return(
        <Box sx={{mt:4}}>
            <Typography variant="h6">Comments</Typography>
            <List>
                {comments.map((comment) => (
                    <ListItem key={comment.id}>
                        <ListItemText primary={comment.text}/>
                    </ListItem>
                ))}
            </List>

            <TextField 
                label="Write a comment.."
                variant="outlined"
                fullWidth
                value={newComment}
                onChange={(e)=>setNewComment(e.target.value)}
                sx={{mt:2}}
            />
            <Button variant="contained" sx={{mt:2}} onClick={AddComment}>
                Add Comment
            </Button>
        </Box>
    )


}