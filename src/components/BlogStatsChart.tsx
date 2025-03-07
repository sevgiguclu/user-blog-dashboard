"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Blog 1", views: 1200 },
  { name: "Blog 2", views: 900 },
  { name: "Blog 3", views: 600 },
  { name: "Blog 4", views: 400 },
];

const BlogStatsChart = () => {
  return (
    <ResponsiveContainer width="25%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="views" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BlogStatsChart;
