"use client";

import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const EditorStatsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        const result = await response.json();
        setData(result.top5);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <ResponsiveContainer width="40%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="views" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EditorStatsChart;
