"use client"
import EditorStatsChart from "@/components/EditorStatsChart";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Blog {
    id: number;
    title: string;
    author: string;
    category: string;
}


const EditorDashboard = () => {

    const [blogs,setBlogs] = useState<Blog[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [authors, setAuthors] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAuthor, setSelectedAuthor] = useState("");

    useEffect(() => {
        fetch("/api/blogs")
        .then((res) => res.json())
        .then((data) => {
            setBlogs(data);
            setFilteredBlogs(data);

            //get authors and categories from data
            const uniqueCategories = Array.from<string>(new Set(data.map((b:Blog) => (b.category))));
            //Set is a data structure in JavaScript that stores only unique values.
            // If the same category occurs more than once, Set eliminates these duplicates.
            const uniqueAuthors = Array.from<string>(new Set(data.map((b: Blog) => b.author)));

            setCategories(uniqueCategories);
            setAuthors(uniqueAuthors);
            
        })
    },[]);

    useEffect(() => {
        let filtered = blogs;

        if(selectedCategory)
            filtered = filtered.filter((b) => b.category === selectedCategory)

        if(selectedAuthor)
            filtered = filtered.filter((b) => b.author === selectedAuthor)

        setFilteredBlogs(filtered);


    },[selectedAuthor,selectedCategory,blogs]);


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
                        <Typography variant="h6">Pending Blogs</Typography>
                        <Typography variant="h4">8</Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 250 }}>
                    <CardContent>
                        <Typography variant="h6">Published Blogs</Typography>
                        <Typography variant="h4">37</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 250 }}>
                    <CardContent>
                        <Typography variant="h6">Unpublished Blogs</Typography>
                        <Typography variant="h4">2</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 250 }}>
                    <CardContent>
                        <Typography variant="h6">Followers</Typography>
                        <Typography variant="h4">67</Typography>
                    </CardContent>
                </Card>
            </div>

            <div style={{marginTop:"1.5rem"}}>
                <Typography variant="h6">
                    Your Most Read Blogs - TOP5
                </Typography>
                <EditorStatsChart/>
            </div>

            <div style={{marginTop:"1.5rem"}}>
                <div className="flex gap-4 mb-4">
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2">
                        <option value="">Kategori Seç/Hepsi</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <select value={selectedAuthor} onChange={(e) => setSelectedAuthor(e.target.value)} className="border p-2">
                        <option value="">Yazar Seç/Hepsi</option>
                        {authors.map((author) => (
                            <option key={author} value={author}>
                                {author}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Blog Listesi */}
                <ul className="border p-4">
                    {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <li key={blog.id} className="p-2 border-b">
                        <strong>{blog.title}</strong> - {blog.category} (by {blog.author})
                        </li>
                    ))
                    ) : (
                    <p>Filtreye uygun blog bulunamadı.</p>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default EditorDashboard;
